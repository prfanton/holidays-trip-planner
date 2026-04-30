export const nationalHolidays = [
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
];

// Estadual: aplica a todas as cidades do estado
export const stateHolidays = {
  SP: [
    { id: "sp-revolucao", name: "Revolução Constitucionalista", date: "2026-07-09", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (10 jul) e aproveite 4 dias", days: ["2026-07-09","2026-07-10","2026-07-11","2026-07-12"] }, travelDays: 4 },
  ],
  BA: [
    { id: "ba-independencia", name: "Independência da Bahia", date: "2026-07-02", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (3 jul) e aproveite 4 dias", days: ["2026-07-02","2026-07-03","2026-07-04","2026-07-05"] }, travelDays: 4 },
  ],
  RS: [
    { id: "rs-farroupilha", name: "Revolução Farroupilha", date: "2026-09-20", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-09-19","2026-09-20"] }, travelDays: 2 },
  ],
  CE: [
    { id: "ce-abolicao", name: "Abolição da Escravatura no Ceará", date: "2026-03-25", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-03-25"] }, travelDays: 1 },
  ],
  AM: [
    { id: "am-elevacao", name: "Elevação do Amazonas", date: "2026-09-05", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-09-05","2026-09-06"] }, travelDays: 2 },
  ],
  MG: [
    { id: "mg-tiradentes-estado", name: "Data Magna de Minas Gerais", date: "2026-04-21", dayOfWeek: "Terça-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a segunda-feira (20 abr) e aproveite 4 dias", days: ["2026-04-18","2026-04-19","2026-04-20","2026-04-21"] }, travelDays: 4 },
  ],
  PE: [
    { id: "pe-revolucao", name: "Revolução Pernambucana de 1817", date: "2026-03-06", dayOfWeek: "Sexta-feira", type: "Estadual", bridge: { possible: false, tip: "Já é sexta — final de semana estendido de 3 dias", days: ["2026-03-06","2026-03-07","2026-03-08"] }, travelDays: 3 },
  ],
  RJ: [
    { id: "rj-jorge-estado", name: "São Jorge", date: "2026-04-23", dayOfWeek: "Quinta-feira", type: "Estadual", bridge: { possible: true, tip: "Emende a sexta-feira (24 abr) e aproveite 4 dias", days: ["2026-04-23","2026-04-24","2026-04-25","2026-04-26"] }, travelDays: 4 },
  ],
  SC: [
    { id: "sc-santa-catarina", name: "Dia de Santa Catarina de Alexandria", date: "2026-11-25", dayOfWeek: "Quarta-feira", type: "Estadual", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-11-25"] }, travelDays: 1 },
  ],
  GO: [
    { id: "go-pedrovii", name: "Aniversário de Goiás", date: "2026-07-26", dayOfWeek: "Domingo", type: "Estadual", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-07-26"] }, travelDays: 1 },
  ],
  PR: [
    { id: "pr-emancipacao", name: "Emancipação Política do Paraná", date: "2026-12-19", dayOfWeek: "Sábado", type: "Estadual", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-19","2026-12-20"] }, travelDays: 2 },
  ],
};

// Municipal: aplica apenas à cidade
export const cityHolidays = {
  "sao-paulo-sp": [
    { id: "sp-aniversario-cidade", name: "Aniversário de São Paulo", date: "2026-01-25", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-01-24","2026-01-25"] }, travelDays: 2 },
  ],
  "rio-de-janeiro-rj": [
    { id: "rj-sao-sebastiao", name: "São Sebastião", date: "2026-01-20", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (19 jan) e aproveite 4 dias", days: ["2026-01-17","2026-01-18","2026-01-19","2026-01-20"] }, travelDays: 4 },
  ],
  "belo-horizonte-mg": [
    { id: "bh-aniversario", name: "Aniversário de Belo Horizonte", date: "2026-12-12", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-12","2026-12-13"] }, travelDays: 2 },
  ],
  "ouro-preto-mg": [
    { id: "op-aniversario", name: "Aniversário de Ouro Preto", date: "2026-07-08", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-07-08"] }, travelDays: 1 },
  ],
  "salvador-ba": [
    { id: "ssa-aniversario", name: "Aniversário de Salvador", date: "2026-03-29", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-03-29"] }, travelDays: 1 },
  ],
  "recife-pe": [
    { id: "recife-aniversario", name: "Aniversário do Recife", date: "2026-03-12", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (13 mar) e aproveite 4 dias", days: ["2026-03-12","2026-03-13","2026-03-14","2026-03-15"] }, travelDays: 4 },
    { id: "recife-sao-joao", name: "São João do Recife", date: "2026-06-24", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-06-24"] }, travelDays: 1 },
  ],
  "fortaleza-ce": [
    { id: "fortaleza-aniversario", name: "Aniversário de Fortaleza", date: "2026-04-13", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-04-11","2026-04-12","2026-04-13"] }, travelDays: 3 },
  ],
  "manaus-am": [
    { id: "manaus-aniversario", name: "Aniversário de Manaus", date: "2026-10-24", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-10-24","2026-10-25"] }, travelDays: 2 },
  ],
  "porto-alegre-rs": [
    { id: "poa-aniversario", name: "Aniversário de Porto Alegre", date: "2026-03-26", dayOfWeek: "Quinta-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a sexta-feira (27 mar) e aproveite 4 dias", days: ["2026-03-26","2026-03-27","2026-03-28","2026-03-29"] }, travelDays: 4 },
  ],
  "curitiba-pr": [
    { id: "cwb-aniversario", name: "Aniversário de Curitiba", date: "2026-03-29", dayOfWeek: "Domingo", type: "Municipal", bridge: { possible: false, tip: "Cai no domingo", days: ["2026-03-29"] }, travelDays: 1 },
  ],
  "florianopolis-sc": [
    { id: "fln-aniversario", name: "Aniversário de Florianópolis", date: "2026-03-23", dayOfWeek: "Segunda-feira", type: "Municipal", bridge: { possible: false, tip: "Segunda-feira — final de semana estendido de 3 dias", days: ["2026-03-21","2026-03-22","2026-03-23"] }, travelDays: 3 },
    { id: "fln-nsa-ilha", name: "Nossa Senhora do Desterro", date: "2026-08-15", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-08-15","2026-08-16"] }, travelDays: 2 },
  ],
  "goiania-go": [
    { id: "gyn-aniversario", name: "Aniversário de Goiânia", date: "2026-10-24", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-10-24","2026-10-25"] }, travelDays: 2 },
  ],
  "campinas-sp": [
    { id: "cps-aniversario", name: "Aniversário de Campinas", date: "2026-07-14", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (13 jul) e aproveite 4 dias", days: ["2026-07-11","2026-07-12","2026-07-13","2026-07-14"] }, travelDays: 4 },
  ],
  "brasilia-df": [
    { id: "bsb-aniversario", name: "Aniversário de Brasília", date: "2026-04-21", dayOfWeek: "Terça-feira", type: "Municipal", bridge: { possible: true, tip: "Emende a segunda-feira (20 abr) e aproveite 4 dias", days: ["2026-04-18","2026-04-19","2026-04-20","2026-04-21"] }, travelDays: 4 },
  ],
  "natal-rn": [
    { id: "nat-aniversario", name: "Aniversário de Natal", date: "2026-12-25", dayOfWeek: "Sexta-feira", type: "Municipal", bridge: { possible: false, tip: "Já é sexta — final de semana estendido", days: ["2026-12-25","2026-12-26","2026-12-27"] }, travelDays: 3 },
  ],
  "maceio-al": [
    { id: "mcz-aniversario", name: "Aniversário de Maceió", date: "2026-12-05", dayOfWeek: "Sábado", type: "Municipal", bridge: { possible: false, tip: "Cai no sábado", days: ["2026-12-05","2026-12-06"] }, travelDays: 2 },
  ],
  "joao-pessoa-pb": [
    { id: "jpa-aniversario", name: "Aniversário de João Pessoa", date: "2026-08-05", dayOfWeek: "Quarta-feira", type: "Municipal", bridge: { possible: false, tip: "Quarta-feira — sem emenda prática", days: ["2026-08-05"] }, travelDays: 1 },
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
