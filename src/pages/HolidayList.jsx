import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { nationalHolidays, stateHolidays, cityHolidays, brazilCities } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import logoImg from "../assets/logo.png";
import styles from "./HolidayList.module.css";

const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MAX_SUGGESTIONS = 8;

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

function getHolidays(city) {
  const national = nationalHolidays;
  const state = city ? (stateHolidays[city.state] ?? []) : [];
  const municipal = city ? (cityHolidays[city.id] ?? []) : [];
  return [...national, ...state, ...municipal].sort((a, b) => a.date.localeCompare(b.date));
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

// ── Page ─────────────────────────────────────────────────────
export default function HolidayList() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const holidays = useMemo(() => getHolidays(selectedCity), [selectedCity]);

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

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img src={logoImg} alt="Buser" className={styles.logo} />
          <h1 className={styles.title}>Feriados de 2026</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.filterWrapper}>
          <RevealItem>
            <div className={styles.filterArea}>
              <CitySearch
                selected={selectedCity}
                onSelect={setSelectedCity}
                onClear={() => setSelectedCity(null)}
              />
              {selectedCity ? (
                <p className={styles.filterHint}>
                  Exibindo feriados nacionais, estaduais de {selectedCity.state} e municipais de {selectedCity.name}
                </p>
              ) : (
                <p className={styles.filterHint}>
                  Busque uma cidade para incluir os feriados estaduais e municipais
                </p>
              )}
            </div>
          </RevealItem>
        </div>

        <ul className={styles.list}>
          {holidays.map((h, i) => (
            <li key={h.id}>
              <RevealItem delay={Math.min(i * 40, 200)}>
                <HolidayCard holiday={h} onClick={(hol) =>
                  navigate(`/feriado/${hol.id}`, { state: { holiday: hol } })
                } />
              </RevealItem>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
