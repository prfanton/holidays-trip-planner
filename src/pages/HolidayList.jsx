import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { nationalHolidays, stateHolidays, cityHolidays, brazilCities } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import logoImg from "../assets/logo.png";
import styles from "./HolidayList.module.css";

const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MAX_SUGGESTIONS = 8;

function formatDate(dateStr) {
  const [, m, d] = dateStr.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]}`;
}

function getHolidays(city) {
  const national = nationalHolidays;
  const state = city ? (stateHolidays[city.state] ?? []) : [];
  const municipal = city ? (cityHolidays[city.id] ?? []) : [];
  const all = [...national, ...state, ...municipal];
  return all.sort((a, b) => a.date.localeCompare(b.date));
}

function normalize(str) {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// ── City search ──────────────────────────────────────────────
function CitySearch({ selected, onSelect, onClear }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
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
  }

  function handleClear() {
    onClear();
    setQuery("");
    setOpen(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <div className={styles.searchWrapper} ref={wrapperRef}>
      <div className={`${styles.searchField} ${open && suggestions.length ? styles.searchFieldOpen : ""}`}>
        <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            autoComplete="off"
            spellCheck={false}
          />
        )}
        {selected && (
          <button className={styles.clearBtn} onClick={handleClear} aria-label="Limpar cidade">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <ul className={styles.suggestions} role="listbox">
          {suggestions.map((city) => (
            <li key={city.id} role="option">
              <button className={styles.suggestion} onClick={() => handleSelect(city)}>
                <span className={styles.suggestionName}>{city.name}</span>
                <span className={styles.suggestionState}>{city.state}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Holiday card ─────────────────────────────────────────────
function HolidayCard({ holiday, onClick }) {
  return (
    <button className={styles.card} onClick={() => onClick(holiday)}>
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

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img src={logoImg} alt="Buser" className={styles.logo} />
          <h1 className={styles.title}>Feriados de 2026</h1>
        </div>
      </header>

      <main className={styles.main}>
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

        <div className={styles.list}>
          {holidays.map((h, i) => (
            <RevealItem key={h.id} delay={i * 40}>
              <HolidayCard holiday={h} onClick={(hol) =>
                navigate(`/feriado/${hol.id}`, { state: { holiday: hol } })
              } />
            </RevealItem>
          ))}
        </div>
      </main>
    </div>
  );
}
