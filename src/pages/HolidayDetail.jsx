import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { nationalHolidays, stateHolidays, destinations, originOptions } from "../data/holidays";
import styles from "./HolidayDetail.module.css";

const formatDateBR = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${parseInt(day)} ${months[parseInt(month) - 1]}`;
};

const formatDateInput = (dateStr) => dateStr;

function findHoliday(id) {
  const nat = nationalHolidays.find((h) => h.id === id);
  if (nat) return nat;
  for (const state of Object.values(stateHolidays)) {
    const found = state.holidays.find((h) => h.id === id);
    if (found) return found;
  }
  return null;
}

export default function HolidayDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const holiday = location.state?.holiday ?? findHoliday(id);

  const defaultOrigin = originOptions[0];
  const [origin, setOrigin] = useState(defaultOrigin);
  const [changingOrigin, setChangingOrigin] = useState(false);

  const departureDate = holiday?.bridge?.days?.[0] ?? holiday?.date;
  const returnDate = holiday?.bridge?.days?.[holiday.bridge.days.length - 1] ?? holiday?.date;

  if (!holiday) {
    return (
      <div className={styles.page}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>Voltar</button>
        <p className={styles.empty}>Feriado nao encontrado.</p>
      </div>
    );
  }

  const handleDestinationSelect = (dest) => {
    const url = `https://www.buser.com.br/onibus/${origin.slug}/${dest.slug}?ida=${departureDate}&volta=${returnDate}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <div>
            <div className={styles.logo}>buser</div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.holidayMeta}>
          <div className={styles.metaLeft}>
            <h1 className={styles.holidayTitle}>{holiday.name}</h1>
            <p className={styles.metaDates}>
              {holiday.bridge?.days?.length > 0
                ? `${formatDateBR(holiday.bridge.days[0])} — ${formatDateBR(holiday.bridge.days[holiday.bridge.days.length - 1])}`
                : formatDateBR(holiday.date)}
              <span className={styles.metaSep}>·</span>
              <strong>{holiday.travelDays}</strong> {holiday.travelDays === 1 ? "dia" : "dias"}
            </p>
          </div>
          <span className={`${styles.typeTag} ${styles[`type${holiday.type}`]}`}>{holiday.type}</span>
        </div>

        {holiday.bridge?.tip && (
          <div className={styles.bridgeInfo}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
            {holiday.bridge.tip}
          </div>
        )}

        <section className={styles.searchBox}>
          <h2 className={styles.sectionTitle}>Buscar passagem</h2>

          <div className={styles.searchFields}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Origem</label>
              {changingOrigin ? (
                <select
                  className={styles.select}
                  value={origin.id}
                  onChange={(e) => {
                    const found = originOptions.find((o) => o.id === e.target.value);
                    if (found) setOrigin(found);
                    setChangingOrigin(false);
                  }}
                  autoFocus
                  onBlur={() => setChangingOrigin(false)}
                >
                  {originOptions.map((o) => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                  ))}
                </select>
              ) : (
                <div className={styles.originDisplay}>
                  <span className={styles.fieldValue}>{origin.name}</span>
                  <button className={styles.changeBtn} onClick={() => setChangingOrigin(true)}>
                    alterar
                  </button>
                </div>
              )}
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Ida</label>
                <span className={styles.fieldValue}>{formatDateBR(departureDate)}</span>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Volta</label>
                <span className={styles.fieldValue}>{formatDateBR(returnDate)}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.destSection}>
          <h2 className={styles.sectionTitle}>Destinos disponíveis</h2>
          <p className={styles.destSubtitle}>Saindo de {origin.name}</p>
          <div className={styles.destList}>
            {destinations
              .filter((d) => d.slug !== origin.slug)
              .map((dest) => (
                <button
                  key={dest.id}
                  className={styles.destCard}
                  onClick={() => handleDestinationSelect(dest)}
                >
                  <div className={styles.destInfo}>
                    <span className={styles.destName}>{dest.name}</span>
                    <span className={styles.destState}>{dest.state}</span>
                  </div>
                  <div className={styles.destRight}>
                    <span className={styles.destPrice}>a partir de R$ {dest.price}</span>
                    <div className={styles.destArrow}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
