export const nationalHolidays = [
  // ── 2026 ─────────────────────────────────────────────────────────────────
  {
    id: "confraternizacao",
    name: "Confraternização Universal",
    date: "2026-01-01",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (2 jan) e aproveite 4 dias", days: ["2026-01-01","2026-01-02","2026-01-03","2026-01-04"] },
    travelDays: 4,
  },
  {
    id: "carnaval",
    name: "Carnaval",
    date: "2026-02-16",
    endDate: "2026-02-17",
    dayOfWeek: "Segunda e Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Sábado ao Carnaval: 4 dias de viagem", days: ["2026-02-14","2026-02-15","2026-02-16","2026-02-17"] },
    travelDays: 4,
  },
  {
    id: "sexta-santa",
    name: "Sexta-feira Santa",
    date: "2026-04-03",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-04-03","2026-04-04","2026-04-05"] },
    travelDays: 3,
  },
  {
    id: "tiradentes",
    name: "Tiradentes",
    date: "2026-04-21",
    dayOfWeek: "Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a segunda-feira (20 abr) e aproveite 4 dias", days: ["2026-04-18","2026-04-19","2026-04-20","2026-04-21"] },
    travelDays: 4,
  },
  {
    id: "trabalho",
    name: "Dia do Trabalho",
    date: "2026-05-01",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-05-01","2026-05-02","2026-05-03"] },
    travelDays: 3,
  },
  {
    id: "corpus-christi",
    name: "Corpus Christi",
    date: "2026-06-04",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (5 jun) e aproveite 4 dias", days: ["2026-06-04","2026-06-05","2026-06-06","2026-06-07"] },
    travelDays: 4,
  },
  {
    id: "independencia",
    name: "Independência do Brasil",
    date: "2026-09-07",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-09-05","2026-09-06","2026-09-07"] },
    travelDays: 3,
  },
  {
    id: "aparecida",
    name: "Nossa Senhora Aparecida",
    date: "2026-10-12",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-10-10","2026-10-11","2026-10-12"] },
    travelDays: 3,
  },
  {
    id: "finados",
    name: "Finados",
    date: "2026-11-02",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-10-31","2026-11-01","2026-11-02"] },
    travelDays: 3,
  },
  {
    id: "republica",
    name: "Proclamação da República",
    date: "2026-11-15",
    dayOfWeek: "Domingo",
    type: "Nacional",
    bridge: { possible: false, tip: "Cai no domingo — sem emenda possível", days: ["2026-11-14","2026-11-15"] },
    travelDays: 2,
  },
  {
    id: "consciencia-negra",
    name: "Consciência Negra",
    date: "2026-11-20",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-11-20","2026-11-21","2026-11-22"] },
    travelDays: 3,
  },
  {
    id: "natal",
    name: "Natal",
    date: "2026-12-25",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-12-25","2026-12-26","2026-12-27"] },
    travelDays: 3,
  },

  // ── 2027 ─────────────────────────────────────────────────────────────────
  {
    id: "confraternizacao-2027",
    name: "Confraternização Universal",
    date: "2027-01-01",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-01-01","2027-01-02","2027-01-03"] },
    travelDays: 3,
  },
  {
    id: "carnaval-2027",
    name: "Carnaval",
    date: "2027-02-08",
    endDate: "2027-02-09",
    dayOfWeek: "Segunda e Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Sábado ao Carnaval: 4 dias de viagem", days: ["2027-02-06","2027-02-07","2027-02-08","2027-02-09"] },
    travelDays: 4,
  },
  {
    id: "sexta-santa-2027",
    name: "Sexta-feira Santa",
    date: "2027-03-26",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-03-26","2027-03-27","2027-03-28"] },
    travelDays: 3,
  },
  {
    id: "tiradentes-2027",
    name: "Tiradentes",
    date: "2027-04-21",
    dayOfWeek: "Quarta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-04-21"] },
    travelDays: 1,
  },
  {
    id: "trabalho-2027",
    name: "Dia do Trabalho",
    date: "2027-05-01",
    dayOfWeek: "Sábado",
    type: "Nacional",
    bridge: { possible: false, tip: "Cai no sábado", days: ["2027-05-01","2027-05-02"] },
    travelDays: 2,
  },
  {
    id: "corpus-christi-2027",
    name: "Corpus Christi",
    date: "2027-05-27",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (28 mai) e aproveite 4 dias", days: ["2027-05-27","2027-05-28","2027-05-29","2027-05-30"] },
    travelDays: 4,
  },
  {
    id: "independencia-2027",
    name: "Independência do Brasil",
    date: "2027-09-07",
    dayOfWeek: "Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a segunda-feira (6 set) e aproveite 4 dias", days: ["2027-09-04","2027-09-05","2027-09-06","2027-09-07"] },
    travelDays: 4,
  },
  {
    id: "aparecida-2027",
    name: "Nossa Senhora Aparecida",
    date: "2027-10-12",
    dayOfWeek: "Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a segunda-feira (11 out) e aproveite 4 dias", days: ["2027-10-09","2027-10-10","2027-10-11","2027-10-12"] },
    travelDays: 4,
  },
  {
    id: "finados-2027",
    name: "Finados",
    date: "2027-11-02",
    dayOfWeek: "Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a segunda-feira (1 nov) e aproveite 4 dias", days: ["2027-10-30","2027-10-31","2027-11-01","2027-11-02"] },
    travelDays: 4,
  },
  {
    id: "republica-2027",
    name: "Proclamação da República",
    date: "2027-11-15",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-11-13","2027-11-14","2027-11-15"] },
    travelDays: 3,
  },
  {
    id: "consciencia-negra-2027",
    name: "Consciência Negra",
    date: "2027-11-20",
    dayOfWeek: "Sábado",
    type: "Nacional",
    bridge: { possible: false, tip: "Cai no sábado", days: ["2027-11-20","2027-11-21"] },
    travelDays: 2,
  },
  {
    id: "natal-2027",
    name: "Natal",
    date: "2027-12-25",
    dayOfWeek: "Sábado",
    type: "Nacional",
    bridge: { possible: false, tip: "Cai no sábado", days: ["2027-12-25","2027-12-26"] },
    travelDays: 2,
  },

  // ── 2028 ─────────────────────────────────────────────────────────────────
  {
    id: "confraternizacao-2028",
    name: "Confraternização Universal",
    date: "2028-01-01",
    dayOfWeek: "Sábado",
    type: "Nacional",
    bridge: { possible: false, tip: "Cai no sábado", days: ["2028-01-01","2028-01-02"] },
    travelDays: 2,
  },
  {
    id: "carnaval-2028",
    name: "Carnaval",
    date: "2028-02-28",
    endDate: "2028-02-29",
    dayOfWeek: "Segunda e Terça-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Sábado ao Carnaval: 4 dias de viagem", days: ["2028-02-26","2028-02-27","2028-02-28","2028-02-29"] },
    travelDays: 4,
  },
  {
    id: "sexta-santa-2028",
    name: "Sexta-feira Santa",
    date: "2028-04-14",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-04-14","2028-04-15","2028-04-16"] },
    travelDays: 3,
  },
  {
    id: "tiradentes-2028",
    name: "Tiradentes",
    date: "2028-04-21",
    dayOfWeek: "Sexta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-04-21","2028-04-22","2028-04-23"] },
    travelDays: 3,
  },
  {
    id: "trabalho-2028",
    name: "Dia do Trabalho",
    date: "2028-05-01",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-04-29","2028-04-30","2028-05-01"] },
    travelDays: 3,
  },
  {
    id: "corpus-christi-2028",
    name: "Corpus Christi",
    date: "2028-06-15",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (16 jun) e aproveite 4 dias", days: ["2028-06-15","2028-06-16","2028-06-17","2028-06-18"] },
    travelDays: 4,
  },
  {
    id: "independencia-2028",
    name: "Independência do Brasil",
    date: "2028-09-07",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (8 set) e aproveite 4 dias", days: ["2028-09-07","2028-09-08","2028-09-09","2028-09-10"] },
    travelDays: 4,
  },
  {
    id: "aparecida-2028",
    name: "Nossa Senhora Aparecida",
    date: "2028-10-12",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (13 out) e aproveite 4 dias", days: ["2028-10-12","2028-10-13","2028-10-14","2028-10-15"] },
    travelDays: 4,
  },
  {
    id: "finados-2028",
    name: "Finados",
    date: "2028-11-02",
    dayOfWeek: "Quinta-feira",
    type: "Nacional",
    bridge: { possible: true, tip: "Emende a sexta-feira (3 nov) e aproveite 4 dias", days: ["2028-11-02","2028-11-03","2028-11-04","2028-11-05"] },
    travelDays: 4,
  },
  {
    id: "republica-2028",
    name: "Proclamação da República",
    date: "2028-11-15",
    dayOfWeek: "Quarta-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-11-15"] },
    travelDays: 1,
  },
  {
    id: "consciencia-negra-2028",
    name: "Consciência Negra",
    date: "2028-11-20",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-11-18","2028-11-19","2028-11-20"] },
    travelDays: 3,
  },
  {
    id: "natal-2028",
    name: "Natal",
    date: "2028-12-25",
    dayOfWeek: "Segunda-feira",
    type: "Nacional",
    bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-12-23","2028-12-24","2028-12-25"] },
    travelDays: 3,
  },
];

export const stateHolidays = {
  SP: [
    // 2026
    { id: "sp-revolucao", name: "Revolução Constitucionalista", date: "2026-07-09", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (10 jul) e aproveite 4 dias", days: ["2026-07-09","2026-07-10","2026-07-11","2026-07-12"] }, travelDays: 4 },
    // 2027
    { id: "sp-revolucao-2027", name: "Revolução Constitucionalista", date: "2027-07-09", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-07-09","2027-07-10","2027-07-11"] }, travelDays: 3 },
    // 2028
    { id: "sp-revolucao-2028", name: "Revolução Constitucionalista", date: "2028-07-09", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2028-07-08","2028-07-09"] }, travelDays: 2 },
  ],
  BA: [
    // 2026
    { id: "ba-independencia", name: "Independência da Bahia", date: "2026-07-02", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (3 jul) e aproveite 4 dias", days: ["2026-07-02","2026-07-03","2026-07-04","2026-07-05"] }, travelDays: 4 },
    // 2027
    { id: "ba-independencia-2027", name: "Independência da Bahia", date: "2027-07-02", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-07-02","2027-07-03","2027-07-04"] }, travelDays: 3 },
    // 2028
    { id: "ba-independencia-2028", name: "Independência da Bahia", date: "2028-07-02", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2028-07-01","2028-07-02"] }, travelDays: 2 },
  ],
  RS: [
    // 2026
    { id: "rs-farroupilha", name: "Revolução Farroupilha", date: "2026-09-20", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-09-19","2026-09-20"] }, travelDays: 2 },
    // 2027
    { id: "rs-farroupilha-2027", name: "Revolução Farroupilha", date: "2027-09-20", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-09-18","2027-09-19","2027-09-20"] }, travelDays: 3 },
    // 2028
    { id: "rs-farroupilha-2028", name: "Revolução Farroupilha", date: "2028-09-20", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-09-20"] }, travelDays: 1 },
  ],
  CE: [
    // 2026
    { id: "ce-abolicao", name: "Abolição da Escravatura no Ceará", date: "2026-03-25", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-03-25"] }, travelDays: 1 },
    // 2027
    { id: "ce-abolicao-2027", name: "Abolição da Escravatura no Ceará", date: "2027-03-25", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (26 mar) e aproveite 4 dias", days: ["2027-03-25","2027-03-26","2027-03-27","2027-03-28"] }, travelDays: 4 },
    // 2028
    { id: "ce-abolicao-2028", name: "Abolição da Escravatura no Ceará", date: "2028-03-25", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-03-25","2028-03-26"] }, travelDays: 2 },
  ],
  AM: [
    // 2026
    { id: "am-elevacao", name: "Elevação do Amazonas", date: "2026-09-05", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-09-05","2026-09-06"] }, travelDays: 2 },
    // 2027
    { id: "am-elevacao-2027", name: "Elevação do Amazonas", date: "2027-09-05", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-09-04","2027-09-05"] }, travelDays: 2 },
    // 2028
    { id: "am-elevacao-2028", name: "Elevação do Amazonas", date: "2028-09-05", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (4 set) e aproveite 4 dias", days: ["2028-09-02","2028-09-03","2028-09-04","2028-09-05"] }, travelDays: 4 },
  ],
  MG: [
    // 2026
    { id: "mg-tiradentes-estado", name: "Data Magna de Minas Gerais", date: "2026-04-21", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (20 abr) e aproveite 4 dias", days: ["2026-04-18","2026-04-19","2026-04-20","2026-04-21"] }, travelDays: 4 },
    // 2027
    { id: "mg-tiradentes-estado-2027", name: "Data Magna de Minas Gerais", date: "2027-04-21", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-04-21"] }, travelDays: 1 },
    // 2028
    { id: "mg-tiradentes-estado-2028", name: "Data Magna de Minas Gerais", date: "2028-04-21", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-04-21","2028-04-22","2028-04-23"] }, travelDays: 3 },
  ],
  PE: [
    // 2026
    { id: "pe-revolucao", name: "Revolução Pernambucana de 1817", date: "2026-03-06", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-03-06","2026-03-07","2026-03-08"] }, travelDays: 3 },
    // 2027
    { id: "pe-revolucao-2027", name: "Revolução Pernambucana de 1817", date: "2027-03-06", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2027-03-06","2027-03-07"] }, travelDays: 2 },
    // 2028
    { id: "pe-revolucao-2028", name: "Revolução Pernambucana de 1817", date: "2028-03-06", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-03-04","2028-03-05","2028-03-06"] }, travelDays: 3 },
  ],
  RJ: [
    // 2026
    { id: "rj-jorge-estado", name: "São Jorge", date: "2026-04-23", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (24 abr) e aproveite 4 dias", days: ["2026-04-23","2026-04-24","2026-04-25","2026-04-26"] }, travelDays: 4 },
    // 2027
    { id: "rj-jorge-estado-2027", name: "São Jorge", date: "2027-04-23", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-04-23","2027-04-24","2027-04-25"] }, travelDays: 3 },
    // 2028
    { id: "rj-jorge-estado-2028", name: "São Jorge", date: "2028-04-23", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2028-04-22","2028-04-23"] }, travelDays: 2 },
  ],
  SC: [
    // 2026
    { id: "sc-santa-catarina", name: "Dia de Santa Catarina de Alexandria", date: "2026-11-25", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-11-25"] }, travelDays: 1 },
    // 2027
    { id: "sc-santa-catarina-2027", name: "Dia de Santa Catarina de Alexandria", date: "2027-11-25", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (26 nov) e aproveite 4 dias", days: ["2027-11-25","2027-11-26","2027-11-27","2027-11-28"] }, travelDays: 4 },
    // 2028
    { id: "sc-santa-catarina-2028", name: "Dia de Santa Catarina de Alexandria", date: "2028-11-25", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-11-25","2028-11-26"] }, travelDays: 2 },
  ],
  GO: [
    // 2026
    { id: "go-pedrovii", name: "Aniversário de Goiás", date: "2026-07-26", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-07-25","2026-07-26"] }, travelDays: 2 },
    // 2027
    { id: "go-pedrovii-2027", name: "Aniversário de Goiás", date: "2027-07-26", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-07-24","2027-07-25","2027-07-26"] }, travelDays: 3 },
    // 2028
    { id: "go-pedrovii-2028", name: "Aniversário de Goiás", date: "2028-07-26", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-07-26"] }, travelDays: 1 },
  ],
  PR: [
    // 2026
    { id: "pr-emancipacao", name: "Emancipação Política do Paraná", date: "2026-12-19", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-19","2026-12-20"] }, travelDays: 2 },
    // 2027
    { id: "pr-emancipacao-2027", name: "Emancipação Política do Paraná", date: "2027-12-19", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-12-18","2027-12-19"] }, travelDays: 2 },
    // 2028
    { id: "pr-emancipacao-2028", name: "Emancipação Política do Paraná", date: "2028-12-19", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (18 dez) e aproveite 4 dias", days: ["2028-12-16","2028-12-17","2028-12-18","2028-12-19"] }, travelDays: 4 },
  ],
  SE: [
    // 2026
    { id: "se-emancipacao", name: "Emancipação Política de Sergipe", date: "2026-07-08", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-07-08"] }, travelDays: 1 },
    // 2027
    { id: "se-emancipacao-2027", name: "Emancipação Política de Sergipe", date: "2027-07-08", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (9 jul) e aproveite 4 dias", days: ["2027-07-08","2027-07-09","2027-07-10","2027-07-11"] }, travelDays: 4 },
    // 2028
    { id: "se-emancipacao-2028", name: "Emancipação Política de Sergipe", date: "2028-07-08", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-07-08","2028-07-09"] }, travelDays: 2 },
  ],
  PA: [
    // 2026
    { id: "pa-adesao", name: "Adesão do Grão-Pará à Independência do Brasil", date: "2026-08-15", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-08-15","2026-08-16"] }, travelDays: 2 },
    // 2027
    { id: "pa-adesao-2027", name: "Adesão do Grão-Pará à Independência do Brasil", date: "2027-08-15", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-08-14","2027-08-15"] }, travelDays: 2 },
    // 2028
    { id: "pa-adesao-2028", name: "Adesão do Grão-Pará à Independência do Brasil", date: "2028-08-15", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (14 ago) e aproveite 4 dias", days: ["2028-08-12","2028-08-13","2028-08-14","2028-08-15"] }, travelDays: 4 },
  ],
  AL: [
    // 2026
    { id: "al-emancipacao", name: "Emancipação Política de Alagoas", date: "2026-09-16", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-09-16"] }, travelDays: 1 },
    // 2027
    { id: "al-emancipacao-2027", name: "Emancipação Política de Alagoas", date: "2027-09-16", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (17 set) e aproveite 4 dias", days: ["2027-09-16","2027-09-17","2027-09-18","2027-09-19"] }, travelDays: 4 },
    // 2028
    { id: "al-emancipacao-2028", name: "Emancipação Política de Alagoas", date: "2028-09-16", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-09-16","2028-09-17"] }, travelDays: 2 },
  ],
  AP: [
    // 2026
    { id: "ap-criacao", name: "Criação do Estado do Amapá", date: "2026-09-13", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-09-12","2026-09-13"] }, travelDays: 2 },
    // 2027
    { id: "ap-criacao-2027", name: "Criação do Estado do Amapá", date: "2027-09-13", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-09-11","2027-09-12","2027-09-13"] }, travelDays: 3 },
    // 2028
    { id: "ap-criacao-2028", name: "Criação do Estado do Amapá", date: "2028-09-13", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-09-13"] }, travelDays: 1 },
  ],
  RN: [
    // 2026
    { id: "rn-martires", name: "Mártires de Cunhaú e Uruaçu", date: "2026-10-03", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-10-03","2026-10-04"] }, travelDays: 2 },
    // 2027
    { id: "rn-martires-2027", name: "Mártires de Cunhaú e Uruaçu", date: "2027-10-03", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-10-02","2027-10-03"] }, travelDays: 2 },
    // 2028
    { id: "rn-martires-2028", name: "Mártires de Cunhaú e Uruaçu", date: "2028-10-03", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (2 out) e aproveite 4 dias", days: ["2028-09-30","2028-10-01","2028-10-02","2028-10-03"] }, travelDays: 4 },
  ],
  TO: [
    // 2026
    { id: "to-criacao", name: "Criação do Estado do Tocantins", date: "2026-10-05", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-10-03","2026-10-04","2026-10-05"] }, travelDays: 3 },
    // 2027
    { id: "to-criacao-2027", name: "Criação do Estado do Tocantins", date: "2027-10-05", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (4 out) e aproveite 4 dias", days: ["2027-10-02","2027-10-03","2027-10-04","2027-10-05"] }, travelDays: 4 },
    // 2028
    { id: "to-criacao-2028", name: "Criação do Estado do Tocantins", date: "2028-10-05", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (6 out) e aproveite 4 dias", days: ["2028-10-05","2028-10-06","2028-10-07","2028-10-08"] }, travelDays: 4 },
  ],
  MA: [
    // 2026
    { id: "ma-adesao", name: "Adesão do Maranhão à Independência do Brasil", date: "2026-07-28", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (27 jul) e aproveite 4 dias", days: ["2026-07-25","2026-07-26","2026-07-27","2026-07-28"] }, travelDays: 4 },
    // 2027
    { id: "ma-adesao-2027", name: "Adesão do Maranhão à Independência do Brasil", date: "2027-07-28", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-07-28"] }, travelDays: 1 },
    // 2028
    { id: "ma-adesao-2028", name: "Adesão do Maranhão à Independência do Brasil", date: "2028-07-28", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-07-28","2028-07-29","2028-07-30"] }, travelDays: 3 },
  ],
  PI: [
    // 2026
    { id: "pi-dia", name: "Dia do Piauí", date: "2026-10-19", dayOfWeek: "Segunda-feira", type: "Estadual", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-10-17","2026-10-18","2026-10-19"] }, travelDays: 3 },
    // 2027
    { id: "pi-dia-2027", name: "Dia do Piauí", date: "2027-10-19", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (18 out) e aproveite 4 dias", days: ["2027-10-16","2027-10-17","2027-10-18","2027-10-19"] }, travelDays: 4 },
    // 2028
    { id: "pi-dia-2028", name: "Dia do Piauí", date: "2028-10-19", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (20 out) e aproveite 4 dias", days: ["2028-10-19","2028-10-20","2028-10-21","2028-10-22"] }, travelDays: 4 },
  ],
};

export const cityHolidays = {
  "sao-paulo-sp": [
    // 2026
    { id: "sp-aniversario-cidade", name: "Aniversário de São Paulo", date: "2026-01-25", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-01-24","2026-01-25"] }, travelDays: 2 },
    // 2027
    { id: "sp-aniversario-cidade-2027", name: "Aniversário de São Paulo", date: "2027-01-25", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-01-23","2027-01-24","2027-01-25"] }, travelDays: 3 },
    // 2028
    { id: "sp-aniversario-cidade-2028", name: "Aniversário de São Paulo", date: "2028-01-25", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (24 jan) e aproveite 4 dias", days: ["2028-01-22","2028-01-23","2028-01-24","2028-01-25"] }, travelDays: 4 },
  ],
  "rio-de-janeiro-rj": [
    // 2026
    { id: "rj-sao-sebastiao", name: "São Sebastião", date: "2026-01-20", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (19 jan) e aproveite 4 dias", days: ["2026-01-17","2026-01-18","2026-01-19","2026-01-20"] }, travelDays: 4 },
    // 2027
    { id: "rj-sao-sebastiao-2027", name: "São Sebastião", date: "2027-01-20", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-01-20"] }, travelDays: 1 },
    // 2028
    { id: "rj-sao-sebastiao-2028", name: "São Sebastião", date: "2028-01-20", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (21 jan) e aproveite 4 dias", days: ["2028-01-20","2028-01-21","2028-01-22","2028-01-23"] }, travelDays: 4 },
  ],
  "belo-horizonte-mg": [
    // 2026
    { id: "bh-aniversario", name: "Aniversário de Belo Horizonte", date: "2026-12-12", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-12","2026-12-13"] }, travelDays: 2 },
    // 2027
    { id: "bh-aniversario-2027", name: "Aniversário de Belo Horizonte", date: "2027-12-12", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-12-11","2027-12-12"] }, travelDays: 2 },
    // 2028
    { id: "bh-aniversario-2028", name: "Aniversário de Belo Horizonte", date: "2028-12-12", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (11 dez) e aproveite 4 dias", days: ["2028-12-09","2028-12-10","2028-12-11","2028-12-12"] }, travelDays: 4 },
  ],
  "ouro-preto-mg": [
    // 2026
    { id: "op-aniversario", name: "Aniversário de Ouro Preto", date: "2026-07-08", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-07-08"] }, travelDays: 1 },
    // 2027
    { id: "op-aniversario-2027", name: "Aniversário de Ouro Preto", date: "2027-07-08", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (9 jul) e aproveite 4 dias", days: ["2027-07-08","2027-07-09","2027-07-10","2027-07-11"] }, travelDays: 4 },
    // 2028
    { id: "op-aniversario-2028", name: "Aniversário de Ouro Preto", date: "2028-07-08", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-07-08","2028-07-09"] }, travelDays: 2 },
  ],
  "salvador-ba": [
    // 2026
    { id: "ssa-aniversario", name: "Aniversário de Salvador", date: "2026-03-29", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-03-28","2026-03-29"] }, travelDays: 2 },
    // 2027
    { id: "ssa-aniversario-2027", name: "Aniversário de Salvador", date: "2027-03-29", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-03-27","2027-03-28","2027-03-29"] }, travelDays: 3 },
    // 2028
    { id: "ssa-aniversario-2028", name: "Aniversário de Salvador", date: "2028-03-29", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-03-29"] }, travelDays: 1 },
  ],
  "recife-pe": [
    // 2026
    { id: "recife-aniversario", name: "Aniversário do Recife", date: "2026-03-12", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (13 mar) e aproveite 4 dias", days: ["2026-03-12","2026-03-13","2026-03-14","2026-03-15"] }, travelDays: 4 },
    { id: "recife-sao-joao", name: "São João do Recife", date: "2026-06-24", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-06-24"] }, travelDays: 1 },
    // 2027
    { id: "recife-aniversario-2027", name: "Aniversário do Recife", date: "2027-03-12", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-03-12","2027-03-13","2027-03-14"] }, travelDays: 3 },
    { id: "recife-sao-joao-2027", name: "São João do Recife", date: "2027-06-24", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (25 jun) e aproveite 4 dias", days: ["2027-06-24","2027-06-25","2027-06-26","2027-06-27"] }, travelDays: 4 },
    // 2028
    { id: "recife-aniversario-2028", name: "Aniversário do Recife", date: "2028-03-12", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2028-03-11","2028-03-12"] }, travelDays: 2 },
    { id: "recife-sao-joao-2028", name: "São João do Recife", date: "2028-06-24", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-06-24","2028-06-25"] }, travelDays: 2 },
  ],
  "fortaleza-ce": [
    // 2026
    { id: "fortaleza-aniversario", name: "Aniversário de Fortaleza", date: "2026-04-13", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-04-11","2026-04-12","2026-04-13"] }, travelDays: 3 },
    // 2027
    { id: "fortaleza-aniversario-2027", name: "Aniversário de Fortaleza", date: "2027-04-13", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (12 abr) e aproveite 4 dias", days: ["2027-04-10","2027-04-11","2027-04-12","2027-04-13"] }, travelDays: 4 },
    // 2028
    { id: "fortaleza-aniversario-2028", name: "Aniversário de Fortaleza", date: "2028-04-13", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (14 abr) e aproveite 4 dias", days: ["2028-04-13","2028-04-14","2028-04-15","2028-04-16"] }, travelDays: 4 },
  ],
  "manaus-am": [
    // 2026
    { id: "manaus-aniversario", name: "Aniversário de Manaus", date: "2026-10-24", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-10-24","2026-10-25"] }, travelDays: 2 },
    // 2027
    { id: "manaus-aniversario-2027", name: "Aniversário de Manaus", date: "2027-10-24", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-10-23","2027-10-24"] }, travelDays: 2 },
    // 2028
    { id: "manaus-aniversario-2028", name: "Aniversário de Manaus", date: "2028-10-24", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (23 out) e aproveite 4 dias", days: ["2028-10-21","2028-10-22","2028-10-23","2028-10-24"] }, travelDays: 4 },
  ],
  "porto-alegre-rs": [
    // 2026
    { id: "poa-aniversario", name: "Aniversário de Porto Alegre", date: "2026-03-26", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (27 mar) e aproveite 4 dias", days: ["2026-03-26","2026-03-27","2026-03-28","2026-03-29"] }, travelDays: 4 },
    // 2027
    { id: "poa-aniversario-2027", name: "Aniversário de Porto Alegre", date: "2027-03-26", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2027-03-26","2027-03-27","2027-03-28"] }, travelDays: 3 },
    // 2028
    { id: "poa-aniversario-2028", name: "Aniversário de Porto Alegre", date: "2028-03-26", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2028-03-25","2028-03-26"] }, travelDays: 2 },
  ],
  "curitiba-pr": [
    // 2026
    { id: "cwb-aniversario", name: "Aniversário de Curitiba", date: "2026-03-29", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-03-28","2026-03-29"] }, travelDays: 2 },
    // 2027
    { id: "cwb-aniversario-2027", name: "Aniversário de Curitiba", date: "2027-03-29", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-03-27","2027-03-28","2027-03-29"] }, travelDays: 3 },
    // 2028
    { id: "cwb-aniversario-2028", name: "Aniversário de Curitiba", date: "2028-03-29", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-03-29"] }, travelDays: 1 },
  ],
  "florianopolis-sc": [
    // 2026
    { id: "fln-aniversario", name: "Aniversário de Florianópolis", date: "2026-03-23", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-03-21","2026-03-22","2026-03-23"] }, travelDays: 3 },
    { id: "fln-nsa-ilha", name: "Nossa Senhora do Desterro", date: "2026-08-15", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-08-15","2026-08-16"] }, travelDays: 2 },
    // 2027
    { id: "fln-aniversario-2027", name: "Aniversário de Florianópolis", date: "2027-03-23", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (22 mar) e aproveite 4 dias", days: ["2027-03-20","2027-03-21","2027-03-22","2027-03-23"] }, travelDays: 4 },
    { id: "fln-nsa-ilha-2027", name: "Nossa Senhora do Desterro", date: "2027-08-15", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-08-14","2027-08-15"] }, travelDays: 2 },
    // 2028
    { id: "fln-aniversario-2028", name: "Aniversário de Florianópolis", date: "2028-03-23", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (24 mar) e aproveite 4 dias", days: ["2028-03-23","2028-03-24","2028-03-25","2028-03-26"] }, travelDays: 4 },
    { id: "fln-nsa-ilha-2028", name: "Nossa Senhora do Desterro", date: "2028-08-15", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (14 ago) e aproveite 4 dias", days: ["2028-08-12","2028-08-13","2028-08-14","2028-08-15"] }, travelDays: 4 },
  ],
  "goiania-go": [
    // 2026
    { id: "gyn-aniversario", name: "Aniversário de Goiânia", date: "2026-10-24", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-10-24","2026-10-25"] }, travelDays: 2 },
    // 2027
    { id: "gyn-aniversario-2027", name: "Aniversário de Goiânia", date: "2027-10-24", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-10-23","2027-10-24"] }, travelDays: 2 },
    // 2028
    { id: "gyn-aniversario-2028", name: "Aniversário de Goiânia", date: "2028-10-24", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (23 out) e aproveite 4 dias", days: ["2028-10-21","2028-10-22","2028-10-23","2028-10-24"] }, travelDays: 4 },
  ],
  "campinas-sp": [
    // 2026
    { id: "cps-aniversario", name: "Aniversário de Campinas", date: "2026-07-14", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (13 jul) e aproveite 4 dias", days: ["2026-07-11","2026-07-12","2026-07-13","2026-07-14"] }, travelDays: 4 },
    // 2027
    { id: "cps-aniversario-2027", name: "Aniversário de Campinas", date: "2027-07-14", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-07-14"] }, travelDays: 1 },
    // 2028
    { id: "cps-aniversario-2028", name: "Aniversário de Campinas", date: "2028-07-14", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-07-14","2028-07-15","2028-07-16"] }, travelDays: 3 },
  ],
  "brasilia-df": [
    // 2026
    { id: "bsb-aniversario", name: "Aniversário de Brasília", date: "2026-04-21", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (20 abr) e aproveite 4 dias", days: ["2026-04-18","2026-04-19","2026-04-20","2026-04-21"] }, travelDays: 4 },
    // 2027
    { id: "bsb-aniversario-2027", name: "Aniversário de Brasília", date: "2027-04-21", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-04-21"] }, travelDays: 1 },
    // 2028
    { id: "bsb-aniversario-2028", name: "Aniversário de Brasília", date: "2028-04-21", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-04-21","2028-04-22","2028-04-23"] }, travelDays: 3 },
  ],
  "natal-rn": [
    // 2026
    { id: "nat-aniversario", name: "Aniversário de Natal", date: "2026-12-25", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido", days: ["2026-12-25","2026-12-26","2026-12-27"] }, travelDays: 3 },
    // 2027
    { id: "nat-aniversario-2027", name: "Aniversário de Natal", date: "2027-12-25", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2027-12-25","2027-12-26"] }, travelDays: 2 },
    // 2028
    { id: "nat-aniversario-2028", name: "Aniversário de Natal", date: "2028-12-25", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-12-23","2028-12-24","2028-12-25"] }, travelDays: 3 },
  ],
  "maceio-al": [
    // 2026
    { id: "mcz-aniversario", name: "Aniversário de Maceió", date: "2026-12-05", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-05","2026-12-06"] }, travelDays: 2 },
    // 2027
    { id: "mcz-aniversario-2027", name: "Aniversário de Maceió", date: "2027-12-05", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2027-12-04","2027-12-05"] }, travelDays: 2 },
    // 2028
    { id: "mcz-aniversario-2028", name: "Aniversário de Maceió", date: "2028-12-05", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (4 dez) e aproveite 4 dias", days: ["2028-12-02","2028-12-03","2028-12-04","2028-12-05"] }, travelDays: 4 },
  ],
  "joao-pessoa-pb": [
    // 2026
    { id: "jpa-aniversario", name: "Aniversário de João Pessoa", date: "2026-08-05", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-08-05"] }, travelDays: 1 },
    // 2027
    { id: "jpa-aniversario-2027", name: "Aniversário de João Pessoa", date: "2027-08-05", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (6 ago) e aproveite 4 dias", days: ["2027-08-05","2027-08-06","2027-08-07","2027-08-08"] }, travelDays: 4 },
    // 2028
    { id: "jpa-aniversario-2028", name: "Aniversário de João Pessoa", date: "2028-08-05", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-08-05","2028-08-06"] }, travelDays: 2 },
  ],
  "aracaju-se": [
    // 2026
    { id: "aju-aniversario", name: "Aniversário de Aracaju", date: "2026-03-17", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (16 mar) e aproveite 4 dias", days: ["2026-03-14","2026-03-15","2026-03-16","2026-03-17"] }, travelDays: 4 },
    // 2027
    { id: "aju-aniversario-2027", name: "Aniversário de Aracaju", date: "2027-03-17", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-03-17"] }, travelDays: 1 },
    // 2028
    { id: "aju-aniversario-2028", name: "Aniversário de Aracaju", date: "2028-03-17", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-03-17","2028-03-18","2028-03-19"] }, travelDays: 3 },
  ],
  "belem-pa": [
    // 2026
    { id: "bel-aniversario", name: "Aniversário de Belém", date: "2026-01-12", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-01-10","2026-01-11","2026-01-12"] }, travelDays: 3 },
    // 2027
    { id: "bel-aniversario-2027", name: "Aniversário de Belém", date: "2027-01-12", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (11 jan) e aproveite 4 dias", days: ["2027-01-09","2027-01-10","2027-01-11","2027-01-12"] }, travelDays: 4 },
    // 2028
    { id: "bel-aniversario-2028", name: "Aniversário de Belém", date: "2028-01-12", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-01-12"] }, travelDays: 1 },
  ],
  "boa-vista-rr": [
    // 2026
    { id: "bvb-aniversario", name: "Aniversário de Boa Vista", date: "2026-08-09", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-08-08","2026-08-09"] }, travelDays: 2 },
    // 2027
    { id: "bvb-aniversario-2027", name: "Aniversário de Boa Vista", date: "2027-08-09", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-08-07","2027-08-08","2027-08-09"] }, travelDays: 3 },
    // 2028
    { id: "bvb-aniversario-2028", name: "Aniversário de Boa Vista", date: "2028-08-09", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-08-09"] }, travelDays: 1 },
  ],
  "campo-grande-ms": [
    // 2026
    { id: "cgs-aniversario", name: "Aniversário de Campo Grande", date: "2026-08-26", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-08-26"] }, travelDays: 1 },
    // 2027
    { id: "cgs-aniversario-2027", name: "Aniversário de Campo Grande", date: "2027-08-26", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (27 ago) e aproveite 4 dias", days: ["2027-08-26","2027-08-27","2027-08-28","2027-08-29"] }, travelDays: 4 },
    // 2028
    { id: "cgs-aniversario-2028", name: "Aniversário de Campo Grande", date: "2028-08-26", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-08-26","2028-08-27"] }, travelDays: 2 },
  ],
  "cuiaba-mt": [
    // 2026
    { id: "cgb-aniversario", name: "Aniversário de Cuiabá", date: "2026-04-08", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-04-08"] }, travelDays: 1 },
    // 2027
    { id: "cgb-aniversario-2027", name: "Aniversário de Cuiabá", date: "2027-04-08", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (9 abr) e aproveite 4 dias", days: ["2027-04-08","2027-04-09","2027-04-10","2027-04-11"] }, travelDays: 4 },
    // 2028
    { id: "cgb-aniversario-2028", name: "Aniversário de Cuiabá", date: "2028-04-08", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-04-08","2028-04-09"] }, travelDays: 2 },
  ],
  "sao-luis-ma": [
    // 2026
    { id: "slz-aniversario", name: "Aniversário de São Luís", date: "2026-09-08", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (7 set) e aproveite 4 dias", days: ["2026-09-05","2026-09-06","2026-09-07","2026-09-08"] }, travelDays: 4 },
    // 2027
    { id: "slz-aniversario-2027", name: "Aniversário de São Luís", date: "2027-09-08", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-09-08"] }, travelDays: 1 },
    // 2028
    { id: "slz-aniversario-2028", name: "Aniversário de São Luís", date: "2028-09-08", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-09-08","2028-09-09","2028-09-10"] }, travelDays: 3 },
  ],
  "vitoria-es": [
    // 2026
    { id: "vix-aniversario", name: "Aniversário de Vitória", date: "2026-09-08", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (7 set) e aproveite 4 dias", days: ["2026-09-05","2026-09-06","2026-09-07","2026-09-08"] }, travelDays: 4 },
    // 2027
    { id: "vix-aniversario-2027", name: "Aniversário de Vitória", date: "2027-09-08", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-09-08"] }, travelDays: 1 },
    // 2028
    { id: "vix-aniversario-2028", name: "Aniversário de Vitória", date: "2028-09-08", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-09-08","2028-09-09","2028-09-10"] }, travelDays: 3 },
  ],
  "londrina-pr": [
    // 2026
    { id: "lon-aniversario", name: "Aniversário de Londrina", date: "2026-03-10", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (9 mar) e aproveite 4 dias", days: ["2026-03-07","2026-03-08","2026-03-09","2026-03-10"] }, travelDays: 4 },
    // 2027
    { id: "lon-aniversario-2027", name: "Aniversário de Londrina", date: "2027-03-10", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2027-03-10"] }, travelDays: 1 },
    // 2028
    { id: "lon-aniversario-2028", name: "Aniversário de Londrina", date: "2028-03-10", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2028-03-10","2028-03-11","2028-03-12"] }, travelDays: 3 },
  ],
  "maringa-pr": [
    // 2026
    { id: "mgf-aniversario", name: "Aniversário de Maringá", date: "2026-05-10", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-05-09","2026-05-10"] }, travelDays: 2 },
    // 2027
    { id: "mgf-aniversario-2027", name: "Aniversário de Maringá", date: "2027-05-10", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-05-08","2027-05-09","2027-05-10"] }, travelDays: 3 },
    // 2028
    { id: "mgf-aniversario-2028", name: "Aniversário de Maringá", date: "2028-05-10", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-05-10"] }, travelDays: 1 },
  ],
  "teresina-pi": [
    // 2026
    { id: "the-aniversario", name: "Aniversário de Teresina", date: "2026-08-16", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-08-15","2026-08-16"] }, travelDays: 2 },
    // 2027
    { id: "the-aniversario-2027", name: "Aniversário de Teresina", date: "2027-08-16", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2027-08-14","2027-08-15","2027-08-16"] }, travelDays: 3 },
    // 2028
    { id: "the-aniversario-2028", name: "Aniversário de Teresina", date: "2028-08-16", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2028-08-16"] }, travelDays: 1 },
  ],
  "palmas-to": [
    // 2026
    { id: "pme-aniversario", name: "Aniversário de Palmas", date: "2026-05-20", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-05-20"] }, travelDays: 1 },
    // 2027
    { id: "pme-aniversario-2027", name: "Aniversário de Palmas", date: "2027-05-20", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (21 mai) e aproveite 4 dias", days: ["2027-05-20","2027-05-21","2027-05-22","2027-05-23"] }, travelDays: 4 },
    // 2028
    { id: "pme-aniversario-2028", name: "Aniversário de Palmas", date: "2028-05-20", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2028-05-20","2028-05-21"] }, travelDays: 2 },
  ],
  "porto-velho-ro": [
    // 2026
    { id: "pvh-aniversario", name: "Aniversário de Porto Velho", date: "2026-10-02", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-10-02","2026-10-03","2026-10-04"] }, travelDays: 3 },
    // 2027
    { id: "pvh-aniversario-2027", name: "Aniversário de Porto Velho", date: "2027-10-02", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2027-10-02","2027-10-03"] }, travelDays: 2 },
    // 2028
    { id: "pvh-aniversario-2028", name: "Aniversário de Porto Velho", date: "2028-10-02", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2028-09-30","2028-10-01","2028-10-02"] }, travelDays: 3 },
  ],
  "rio-branco-ac": [
    // 2026
    { id: "rbr-aniversario", name: "Aniversário de Rio Branco", date: "2026-12-28", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-12-26","2026-12-27","2026-12-28"] }, travelDays: 3 },
    // 2027
    { id: "rbr-aniversario-2027", name: "Aniversário de Rio Branco", date: "2027-12-28", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (27 dez) e aproveite 4 dias", days: ["2027-12-25","2027-12-26","2027-12-27","2027-12-28"] }, travelDays: 4 },
    // 2028
    { id: "rbr-aniversario-2028", name: "Aniversário de Rio Branco", date: "2028-12-28", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (29 dez) e aproveite 4 dias", days: ["2028-12-28","2028-12-29","2028-12-30","2028-12-31"] }, travelDays: 4 },
  ],
};

export const brazilCities = [
  { id: "aracaju-se",           name: "Aracaju",              state: "SE" },
  { id: "belem-pa",             name: "Belém",                state: "PA" },
  { id: "belo-horizonte-mg",    name: "Belo Horizonte",       state: "MG" },
  { id: "boa-vista-rr",         name: "Boa Vista",            state: "RR" },
  { id: "brasilia-df",          name: "Brasília",             state: "DF" },
  { id: "campo-grande-ms",      name: "Campo Grande",         state: "MS" },
  { id: "campinas-sp",          name: "Campinas",             state: "SP" },
  { id: "caruaru-pe",           name: "Caruaru",              state: "PE" },
  { id: "caxias-do-sul-rs",     name: "Caxias do Sul",        state: "RS" },
  { id: "contagem-mg",          name: "Contagem",             state: "MG" },
  { id: "cuiaba-mt",            name: "Cuiabá",               state: "MT" },
  { id: "curitiba-pr",          name: "Curitiba",             state: "PR" },
  { id: "duque-de-caxias-rj",   name: "Duque de Caxias",      state: "RJ" },
  { id: "feira-de-santana-ba",  name: "Feira de Santana",     state: "BA" },
  { id: "florianopolis-sc",     name: "Florianópolis",        state: "SC" },
  { id: "fortaleza-ce",         name: "Fortaleza",            state: "CE" },
  { id: "goiania-go",           name: "Goiânia",              state: "GO" },
  { id: "guarulhos-sp",         name: "Guarulhos",            state: "SP" },
  { id: "joao-pessoa-pb",       name: "João Pessoa",          state: "PB" },
  { id: "juiz-de-fora-mg",      name: "Juiz de Fora",         state: "MG" },
  { id: "juazeiro-do-norte-ce", name: "Juazeiro do Norte",    state: "CE" },
  { id: "londrina-pr",          name: "Londrina",             state: "PR" },
  { id: "maceio-al",            name: "Maceió",               state: "AL" },
  { id: "macapa-ap",            name: "Macapá",               state: "AP" },
  { id: "manaus-am",            name: "Manaus",               state: "AM" },
  { id: "maringa-pr",           name: "Maringá",              state: "PR" },
  { id: "natal-rn",             name: "Natal",                state: "RN" },
  { id: "niteroi-rj",           name: "Niterói",              state: "RJ" },
  { id: "nova-iguacu-rj",       name: "Nova Iguaçu",          state: "RJ" },
  { id: "olinda-pe",            name: "Olinda",               state: "PE" },
  { id: "osasco-sp",            name: "Osasco",               state: "SP" },
  { id: "ouro-preto-mg",        name: "Ouro Preto",           state: "MG" },
  { id: "palmas-to",            name: "Palmas",               state: "TO" },
  { id: "pelotas-rs",           name: "Pelotas",              state: "RS" },
  { id: "porto-alegre-rs",      name: "Porto Alegre",         state: "RS" },
  { id: "porto-velho-ro",       name: "Porto Velho",          state: "RO" },
  { id: "recife-pe",            name: "Recife",               state: "PE" },
  { id: "ribeirao-preto-sp",    name: "Ribeirão Preto",       state: "SP" },
  { id: "rio-de-janeiro-rj",    name: "Rio de Janeiro",       state: "RJ" },
  { id: "rio-branco-ac",        name: "Rio Branco",           state: "AC" },
  { id: "salvador-ba",          name: "Salvador",             state: "BA" },
  { id: "santarem-pa",          name: "Santarém",             state: "PA" },
  { id: "santos-sp",            name: "Santos",               state: "SP" },
  { id: "sao-bernardo-sp",      name: "São Bernardo do Campo", state: "SP" },
  { id: "sao-jose-dos-campos-sp", name: "São José dos Campos", state: "SP" },
  { id: "sao-luis-ma",          name: "São Luís",             state: "MA" },
  { id: "sao-paulo-sp",         name: "São Paulo",            state: "SP" },
  { id: "sorocaba-sp",          name: "Sorocaba",             state: "SP" },
  { id: "teresina-pi",          name: "Teresina",             state: "PI" },
  { id: "uberlandia-mg",        name: "Uberlândia",           state: "MG" },
  { id: "vitoria-es",           name: "Vitória",              state: "ES" },
];

export const destinations = [
  { id: "rio-de-janeiro-rj", name: "Rio de Janeiro", state: "RJ", slug: "rio-de-janeiro-rj", price: 89 },
  { id: "sao-paulo-sp",      name: "São Paulo",       state: "SP", slug: "sao-paulo-sp",      price: 59 },
  { id: "belo-horizonte-mg", name: "Belo Horizonte",  state: "MG", slug: "belo-horizonte-mg", price: 79 },
  { id: "salvador-ba",       name: "Salvador",        state: "BA", slug: "salvador-ba",       price: 149 },
  { id: "florianopolis-sc",  name: "Florianópolis",   state: "SC", slug: "florianopolis-sc",  price: 119 },
  { id: "curitiba-pr",       name: "Curitiba",        state: "PR", slug: "curitiba-pr",       price: 69 },
  { id: "fortaleza-ce",      name: "Fortaleza",       state: "CE", slug: "fortaleza-ce",      price: 189 },
  { id: "recife-pe",         name: "Recife",          state: "PE", slug: "recife-pe",         price: 169 },
  { id: "porto-alegre-rs",   name: "Porto Alegre",    state: "RS", slug: "porto-alegre-rs",   price: 109 },
  { id: "manaus-am",         name: "Manaus",          state: "AM", slug: "manaus-am",         price: 249 },
  { id: "goiania-go",        name: "Goiânia",         state: "GO", slug: "goiania-go",        price: 99 },
  { id: "campinas-sp",       name: "Campinas",        state: "SP", slug: "campinas-sp",       price: 45 },
  { id: "vitoria-es",        name: "Vitória",         state: "ES", slug: "vitoria-es",        price: 129 },
  { id: "natal-rn",          name: "Natal",           state: "RN", slug: "natal-rn",          price: 199 },
  { id: "maceio-al",         name: "Maceió",          state: "AL", slug: "maceio-al",         price: 179 },
  { id: "joao-pessoa-pb",    name: "João Pessoa",     state: "PB", slug: "joao-pessoa-pb",    price: 159 },
];

export const originOptions = [
  { id: "sao-paulo-sp",    name: "São Paulo, SP",      slug: "sao-paulo-sp" },
  { id: "rio-de-janeiro-rj", name: "Rio de Janeiro, RJ", slug: "rio-de-janeiro-rj" },
  { id: "belo-horizonte-mg", name: "Belo Horizonte, MG", slug: "belo-horizonte-mg" },
  { id: "curitiba-pr",     name: "Curitiba, PR",       slug: "curitiba-pr" },
  { id: "porto-alegre-rs", name: "Porto Alegre, RS",   slug: "porto-alegre-rs" },
  { id: "campinas-sp",     name: "Campinas, SP",       slug: "campinas-sp" },
  { id: "brasilia-df",     name: "Brasília, DF",       slug: "brasilia-df" },
];
