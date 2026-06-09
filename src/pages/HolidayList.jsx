import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { nationalHolidays, stateHolidays, cityHolidays, brazilCities } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import logoImg from "../assets/logo.svg";
import styles from "./HolidayList.module.css";

const MONTHS_SHORT = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const DAY_LABELS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const MAX_SUGGESTIONS = 8;

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${parseInt(d)} ${MONTHS_SHORT[parseInt(m) - 1]} ${y}`;
}

const TODAY = new Date().toISOString().slice(0, 10);

function getHolidays(city) {
  const all = [
    ...nationalHolidays,
    ...(city ? (stateHolidays[city.state] ?? []) : []),
    ...(city ? (cityHolidays[city.id] ?? []) : []),
  ];
  return all
    .filter((h) => (h.endDate ?? h.date) >= TODAY)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function normalize(str) {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// ── City search ──────────────────────────────────────────────
function CitySearch({ selected, onSelect, onClear }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const suggestions = query.length < 1 ? [] : brazilCities
    .filter((c) =>
      normalize(c.name).includes(normalize(query)) ||
      normalize(c.state).includes(normalize(query))
    )
    .slice(0, MAX_SUGGESTIONS);

  function handleSelect(city) {
    onSelect(city);
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
  }

  function handleClear() {
    onClear();
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIndex]);
    }
  }

  const showDropdown = open && query.length >= 1;

  return (
    <div className={styles.searchWrapper} ref={wrapperRef}>
      <div className={`${styles.searchField} ${showDropdown ? styles.searchFieldOpen : ""}`}>
        <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        {selected ? (
          <div className={styles.selectedCity}>
            <span className={styles.selectedCityName}>{selected.name}</span>
            <span className={styles.selectedCityState}>{selected.state}</span>
          </div>
        ) : (
          <input
            ref={inputRef}
            className={styles.searchInput}
            placeholder="Buscar cidade..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); setActiveIndex(-1); }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls="city-suggestions"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
          />
        )}
        {selected && (
          <button className={styles.clearBtn} onClick={handleClear} aria-label="Limpar cidade selecionada">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {showDropdown && (
        <ul id="city-suggestions" className={styles.suggestions} role="listbox" aria-label="Cidades sugeridas">
          {suggestions.length > 0 ? suggestions.map((city, i) => (
            <li key={city.id} role="option" aria-selected={i === activeIndex} id={`suggestion-${i}`}>
              <button
                className={`${styles.suggestion} ${i === activeIndex ? styles.suggestionActive : ""}`}
                onClick={() => handleSelect(city)}
                tabIndex={-1}
              >
                <span className={styles.suggestionName}>{city.name}</span>
                <span className={styles.suggestionState}>{city.state}</span>
              </button>
            </li>
          )) : (
            <li className={styles.suggestionEmpty} role="option" aria-selected={false}>
              Nenhuma cidade encontrada
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

// ── Holiday card ─────────────────────────────────────────────
function HolidayCard({ holiday, onClick }) {
  return (
    <button
      className={styles.card}
      onClick={() => onClick(holiday)}
      aria-label={`Ver detalhes de ${holiday.name}`}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardRow}>
          <span className={styles.name}>{holiday.name}</span>
          <span className={styles.typeTag}>{holiday.type}</span>
        </div>
        <span className={styles.meta}>
          {holiday.dayOfWeek} · {formatDate(holiday.date)}
          {holiday.endDate ? ` — ${formatDate(holiday.endDate)}` : ""}
          {" · "}<strong>{holiday.travelDays}</strong>{" "}
          {holiday.travelDays === 1 ? "dia" : "dias"}
        </span>
        {holiday.bridge?.tip && (
          <span className={styles.bridgeTip}>{holiday.bridge.tip}</span>
        )}
      </div>
      {holiday.bridge?.possible && (
        <div className={styles.cardFooter}>
          <span className={styles.bridgePill}>Emenda possível</span>
        </div>
      )}
    </button>
  );
}

// ── Calendar month ────────────────────────────────────────────
function MonthBlock({ year, month, holidayMap, onHolidayClick }) {
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className={styles.monthBlock}>
      <h3 className={styles.monthTitle}>{MONTHS_FULL[month]} {year}</h3>
      <div className={styles.calDayLabels}>
        {DAY_LABELS.map((d) => <span key={d} className={styles.calDayLabel}>{d}</span>)}
      </div>
      <div className={styles.calDaysGrid}>
        {cells.map((day, i) => {
          if (!day) return <span key={`e-${i}`} className={styles.calEmpty} />;
          const mm = String(month + 1).padStart(2, "0");
          const dd = String(day).padStart(2, "0");
          const dateStr = `${year}-${mm}-${dd}`;
          const dayHolidays = holidayMap[dateStr];
          const isToday = dateStr === TODAY;
          const isPast = dateStr < TODAY;

          if (dayHolidays) {
            return (
              <button
                key={day}
                className={`${styles.calDay} ${styles.calDayHoliday} ${isPast ? styles.calDayPast : ""}`}
                onClick={() => onHolidayClick(dayHolidays[0])}
                title={dayHolidays.map((h) => h.name).join(" · ")}
                aria-label={dayHolidays.map((h) => h.name).join(", ")}
              >
                {day}
              </button>
            );
          }
          return (
            <span
              key={day}
              className={`${styles.calDay} ${isToday ? styles.calDayToday : ""} ${isPast ? styles.calDayPast : ""}`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── Calendar view ─────────────────────────────────────────────
function CalendarView({ holidays, onHolidayClick }) {
  const holidayMap = useMemo(() => {
    const map = {};
    for (const h of holidays) {
      if (!map[h.date]) map[h.date] = [];
      map[h.date].push(h);
    }
    return map;
  }, [holidays]);

  const [startYear, startMonth] = useMemo(() => {
    const d = new Date();
    return [d.getFullYear(), d.getMonth()];
  }, []);

  const months = useMemo(() => {
    const result = [];
    for (let i = 0; i < 12; i++) {
      const m = (startMonth + i) % 12;
      const y = startYear + Math.floor((startMonth + i) / 12);
      result.push({ year: y, month: m });
    }
    return result;
  }, [startYear, startMonth]);

  return (
    <div className={styles.calendarGrid}>
      {months.map(({ year, month }) => (
        <MonthBlock
          key={`${year}-${month}`}
          year={year}
          month={month}
          holidayMap={holidayMap}
          onHolidayClick={onHolidayClick}
        />
      ))}
    </div>
  );
}

// ── View toggle ───────────────────────────────────────────────
function ViewToggle({ view, onChange }) {
  return (
    <div className={styles.viewToggle} role="group" aria-label="Modo de visualização">
      <button
        className={`${styles.viewBtn} ${view === "calendar" ? styles.viewBtnActive : ""}`}
        onClick={() => onChange("calendar")}
        aria-pressed={view === "calendar"}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        Calendário
      </button>
      <button
        className={`${styles.viewBtn} ${view === "list" ? styles.viewBtnActive : ""}`}
        onClick={() => onChange("list")}
        aria-pressed={view === "list"}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
          <circle cx="3" cy="6" r="1" fill="currentColor"/><circle cx="3" cy="12" r="1" fill="currentColor"/><circle cx="3" cy="18" r="1" fill="currentColor"/>
        </svg>
        Lista
      </button>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function HolidayList() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [autoDetected, setAutoDetected] = useState(false);
  const [view, setView] = useState("calendar");

  const holidays = useMemo(() => getHolidays(selectedCity), [selectedCity]);

  // Auto-detect city from IP geolocation on first load
  useEffect(() => {
    const alreadySet = sessionStorage.getItem("listScroll");
    // Only auto-detect if user hasn't navigated back with a city already set
    if (alreadySet) return;
    const controller = new AbortController();
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (!data.city || !data.region_code) return;
        const cityName = normalize(data.city);
        const regionCode = data.region_code.toUpperCase();
        const match = brazilCities.find(
          (c) => c.state === regionCode && normalize(c.name).includes(cityName)
        ) ?? brazilCities.find(
          (c) => c.state === regionCode && cityName.includes(normalize(c.name))
        );
        if (match) {
          setSelectedCity(match);
          setAutoDetected(true);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  // Save and restore scroll position across navigation
  useEffect(() => {
    const saved = sessionStorage.getItem("listScroll");
    if (saved) {
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
      sessionStorage.removeItem("listScroll");
    }
    return () => {
      sessionStorage.setItem("listScroll", String(window.scrollY));
    };
  }, []);

  function handleHolidayClick(holiday) {
    navigate(`/feriado/${holiday.id}`, { state: { holiday } });
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img src={logoImg} alt="Buser" className={styles.logo} />
          <h1 className={styles.title}>Feriados de 2026</h1>
          <ViewToggle view={view} onChange={setView} />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.filterWrapper}>
          <RevealItem>
            <div className={styles.filterArea}>
              <CitySearch
                selected={selectedCity}
                onSelect={(city) => { setSelectedCity(city); setAutoDetected(false); }}
                onClear={() => { setSelectedCity(null); setAutoDetected(false); }}
              />
              {selectedCity && autoDetected && (
                <p className={styles.filterHint}>
                  <span className={styles.detectedBadge}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
                    Detectado automaticamente
                  </span>
                  {" · "}Feriados nacionais, estaduais de {selectedCity.state} e municipais de {selectedCity.name}
                </p>
              )}
              {selectedCity && !autoDetected && (
                <p className={styles.filterHint}>
                  Feriados nacionais, estaduais de {selectedCity.state} e municipais de {selectedCity.name}
                </p>
              )}
              {!selectedCity && (
                <p className={styles.filterHint}>
                  Mostrando feriados nacionais · Busque uma cidade para ver feriados estaduais e municipais
                </p>
              )}
            </div>
          </RevealItem>
        </div>

        {view === "calendar" ? (
          <RevealItem>
            <CalendarView holidays={holidays} onHolidayClick={handleHolidayClick} />
          </RevealItem>
        ) : (
          selectedCity ? (
            <ul className={styles.list}>
              {holidays.map((h, i) => (
                <li key={h.id}>
                  <RevealItem delay={Math.min(i * 40, 200)}>
                    <HolidayCard holiday={h} onClick={handleHolidayClick} />
                  </RevealItem>
                </li>
              ))}
            </ul>
          ) : (
            <RevealItem>
              <div className={styles.emptyState}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <p>Busque sua cidade para ver os feriados disponíveis</p>
              </div>
            </RevealItem>
          )
        )}
      </main>
    </div>
  );
}
