import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nationalHolidays, stateHolidays, brazilStates } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import styles from "./HolidayList.module.css";

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${parseInt(day)} ${months[parseInt(month) - 1]}`;
};

const HolidayCard = ({ holiday, onClick }) => (
  <button className={styles.card} onClick={() => onClick(holiday)}>
    <div className={styles.cardHeader}>
      <div className={styles.cardDate}>
        <span className={styles.dateDay}>{holiday.date.split("-")[2].replace(/^0/, "")}</span>
        <span className={styles.dateMonth}>
          {["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"][parseInt(holiday.date.split("-")[1]) - 1]}
        </span>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardTop}>
          <span className={styles.holidayName}>{holiday.name}</span>
          <span className={`${styles.typeTag} ${styles[`type${holiday.type}`]}`}>{holiday.type}</span>
        </div>
        <span className={styles.dayOfWeek}>{holiday.dayOfWeek}</span>
        {holiday.bridge?.tip && (
          <p className={styles.bridgeTip}>{holiday.bridge.tip}</p>
        )}
      </div>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.travelDays}>
        <strong>{holiday.travelDays}</strong> {holiday.travelDays === 1 ? "dia de viagem" : "dias de viagem"}
      </span>
      {holiday.bridge?.possible && (
        <span className={styles.bridgeBadge}>Emenda possivel</span>
      )}
    </div>
  </button>
);

export default function HolidayList() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("nacional");
  const [selectedState, setSelectedState] = useState("SP");

  const holidays =
    mode === "nacional"
      ? nationalHolidays
      : stateHolidays[selectedState]?.holidays ?? [];

  const handleSelect = (holiday) => {
    navigate(`/feriado/${holiday.id}`, { state: { holiday } });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>buser</div>
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
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
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
              <RevealItem key={h.id} delay={i * 40}>
                <HolidayCard holiday={h} onClick={handleSelect} />
              </RevealItem>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
