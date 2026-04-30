import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { nationalHolidays, stateHolidays, destinations, originOptions } from "../data/holidays";
import RevealItem from "../components/RevealItem";
import logoImg from "../assets/logo.png";
import styles from "./HolidayDetail.module.css";

const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const DEST_INITIAL = 6;

const fmt = (dateStr) => {
  const [y, m, d] = dateStr.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
};

function findHoliday(id) {
  const nat = nationalHolidays.find((h) => h.id === id);
  if (nat) return nat;
  for (const holidays of Object.values(stateHolidays)) {
    const found = holidays.find((h) => h.id === id);
    if (found) return found;
  }
  return null;
}

export default function HolidayDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const holiday = location.state?.holiday ?? findHoliday(id);

  const [origin, setOrigin] = useState(originOptions[0]);
  const [changingOrigin, setChangingOrigin] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!holiday) return;
    document.title = `${holiday.name} — Buser`;
    return () => { document.title = "Feriados de 2026 — Buser"; };
  }, [holiday]);

  if (!holiday) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <button className={styles.backBtn} onClick={() => navigate("/")} aria-label="Voltar para lista de feriados">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
            <img src={logoImg} alt="Buser" className={styles.logo} />
            <div className={styles.headerSpacer} />
          </div>
        </header>
        <p className={styles.empty}>Feriado não encontrado.</p>
      </div>
    );
  }

  const days = holiday.bridge?.days ?? [holiday.date];
  const departure = days[0];
  const returnDate = days[days.length - 1];

  const filteredDests = destinations.filter((d) => d.slug !== origin.slug);
  const visibleDests = showAll ? filteredDests : filteredDests.slice(0, DEST_INITIAL);

  const handleSelect = (dest) => {
    const url = `https://www.buser.com.br/onibus/${origin.slug}/${dest.slug}?ida=${departure}&volta=${returnDate}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <button className={styles.backBtn} onClick={() => navigate(-1)} aria-label="Voltar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <img src={logoImg} alt="Buser" className={styles.logo} />
          <div className={styles.headerSpacer} />
        </div>
      </header>

      <main className={styles.main}>

        {/* ── Holiday meta ── */}
        <RevealItem>
          <div className={styles.meta}>
            <div className={styles.metaRow}>
              <h1 className={styles.holidayTitle}>{holiday.name}</h1>
              <span className={styles.typeTag}>{holiday.type}</span>
            </div>
            <p className={styles.metaDates}>
              {fmt(departure)}{departure !== returnDate ? ` — ${fmt(returnDate)}` : ""}
              {" · "}<strong>{holiday.travelDays}</strong> {holiday.travelDays === 1 ? "dia" : "dias"}
            </p>
            {holiday.bridge?.tip && (
              <p className={styles.bridgeTip}>{holiday.bridge.tip}</p>
            )}
          </div>
        </RevealItem>

        {/* ── Search card ── */}
        <RevealItem delay={80}>
          <div className={styles.searchCard}>
            <p className={styles.cardLabel}>Buscar passagem</p>

            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>Origem</span>
              {changingOrigin ? (
                <select
                  className={styles.fieldSelect}
                  value={origin.id}
                  autoFocus
                  onChange={(e) => {
                    const found = originOptions.find((o) => o.id === e.target.value);
                    if (found) setOrigin(found);
                    setChangingOrigin(false);
                  }}
                  onBlur={() => setChangingOrigin(false)}
                >
                  {originOptions.map((o) => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                  ))}
                </select>
              ) : (
                <div className={styles.fieldRow}>
                  <span className={styles.fieldValue}>{origin.name}</span>
                  <button className={styles.changeBtn} onClick={() => setChangingOrigin(true)}>
                    Alterar
                  </button>
                </div>
              )}
            </div>

            <div className={styles.divider} />

            <div className={styles.dateRow}>
              <div className={styles.fieldGroup}>
                <span className={styles.fieldLabel}>Ida</span>
                <span className={styles.fieldValue}>{fmt(departure)}</span>
              </div>
              <div className={styles.fieldGroup}>
                <span className={styles.fieldLabel}>Volta</span>
                <span className={styles.fieldValue}>{fmt(returnDate)}</span>
              </div>
            </div>
          </div>
        </RevealItem>

        {/* ── Destinations ── */}
        <RevealItem delay={160}>
          <div className={styles.destSection}>
            <p className={styles.cardLabel}>Destinos disponíveis</p>
            <p className={styles.destSubtitle}>Saindo de {origin.name}</p>

            <div className={styles.destList}>
              {visibleDests.map((dest, i) => (
                <RevealItem key={dest.id} delay={Math.min(i * 30, 120)}>
                  <button
                    className={styles.destRow}
                    onClick={() => handleSelect(dest)}
                    aria-label={`Ver passagens para ${dest.name}, ${dest.state}`}
                  >
                    <div className={styles.destLeft}>
                      <span className={styles.destName}>{dest.name}</span>
                      <span className={styles.destState}>{dest.state}</span>
                    </div>
                    <div className={styles.destRight}>
                      <span className={styles.destPrice}>R$ {dest.price}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow} aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </button>
                </RevealItem>
              ))}
            </div>

            {!showAll && filteredDests.length > DEST_INITIAL && (
              <button className={styles.seeMoreBtn} onClick={() => setShowAll(true)}>
                Ver mais destinos ({filteredDests.length - DEST_INITIAL})
              </button>
            )}
          </div>
        </RevealItem>

      </main>
    </div>
  );
}
