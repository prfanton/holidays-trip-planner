import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nationalHolidays, stateHolidays, brazilStates } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import logoImg from "../assets/logo.png";
import styles from "./HolidayList.module.css";

const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];

const formatDate = (dateStr) => {
  const [, m, d] = dateStr.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]}`;
};

const HolidayCard = ({ holiday, onClick }) => (
  <button className={styles.card} onClick={() => onClick(holiday)}>
    <div className={styles.cardInner}>
      <div className={styles.cardRow}>
        <span className={styles.name}>{holiday.name}</span>
        <span className={styles.typeTag}>{holiday.type}</span>
      </div>
      <span className={styles.meta}>
        {holiday.dayOfWeek} · {formatDate(holiday.date)}
        {holiday.endDate ? ` — ${formatDate(holiday.endDate)}` : ""}
        {" · "}<strong>{holiday.travelDays}</strong> {holiday.travelDays === 1 ? "dia" : "dias"}
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

export default function HolidayList() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("nacional");
  const [selectedState, setSelectedState] = useState("SP");

  const holidays = mode === "nacional"
    ? nationalHolidays
    : stateHolidays[selectedState]?.holidays ?? [];

  const handleSelect = (holiday) => {
    navigate(`/feriado/${holiday.id}`, { state: { holiday } });
  };

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
          <div className={styles.filters}>
            <select
              className={styles.select}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="nacional">Feriados Nacionais</option>
              <option value="estadual">Feriados Estaduais</option>
            </select>
            {mode === "estadual" && (
              <select
                className={styles.select}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {brazilStates.map((s) => (
                  <option key={s.code} value={s.code}>{s.name}</option>
                ))}
              </select>
            )}
          </div>
        </RevealItem>

        {holidays.length === 0 ? (
          <p className={styles.empty}>Nenhum feriado estadual cadastrado para este estado.</p>
        ) : (
          <div className={styles.list}>
            {holidays.map((h, i) => (
              <RevealItem key={h.id} delay={i * 45}>
                <HolidayCard holiday={h} onClick={handleSelect} />
              </RevealItem>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
