const tableRadiologia = document.querySelector(".table-radiologia");
const tableTraumatologia = document.querySelector(".table-traumatologia");
const tableDental = document.querySelector(".table-dental");
const firstLastRadiologia = document.querySelector(".first-last-radiologia");
const firstLastTraumatologia = document.querySelector(
  ".first-last-traumatologia"
);
const firstLastDental = document.querySelector(".first-last-dental");
const radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

const traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

const dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

firstLastRadiologia.innerHTML = `Primera atención: ${
  radiologia[0].PACIENTE
} - ${radiologia[0].PREVISION} | Última atención: ${
  radiologia[radiologia.length - 1].PACIENTE
} - ${radiologia[radiologia.length - 1].PREVISION}`;
firstLastTraumatologia.innerHTML = `Primera atención: ${
  traumatologia[0].PACIENTE
} - ${traumatologia[0].PREVISION} | Última atención: ${
  traumatologia[traumatologia.length - 1].PACIENTE
} - ${traumatologia[traumatologia.length - 1].PREVISION}`;
firstLastDental.innerHTML = `Primera atención: ${dental[0].PACIENTE} - ${
  dental[0].PREVISION
} | Última atención: ${dental[dental.length - 1].PACIENTE} - ${
  dental[dental.length - 1].PREVISION
}`;

let totalRadiologia = () => {
  for (var i = 0, l = radiologia.length; i < l; ++i) {
    tableRadiologia.innerHTML += `
<th scope="row">${i}</th>
<td>${radiologia[i].HORA}</td>
<td>${radiologia[i].ESPECIALISTA}</td>
<td>${radiologia[i].PACIENTE}</td>
<td>${radiologia[i].RUT}</td>
<td>${radiologia[i].PREVISION}</td>
`;
  }
};
let totalTraumatologia = () => {
  for (var i = 0, l = traumatologia.length; i < l; ++i) {
    tableTraumatologia.innerHTML += `
<th scope="row">${i}</th>
<td>${traumatologia[i].HORA}</td>
<td>${traumatologia[i].ESPECIALISTA}</td>
<td>${traumatologia[i].PACIENTE}</td>
<td>${traumatologia[i].RUT}</td>
<td>${traumatologia[i].PREVISION}</td>
`;
  }
};
let totalDental = () => {
  for (var i = 0, l = dental.length; i < l; ++i) {
    tableDental.innerHTML += `
<th scope="row">${i}</th>
<td>${dental[i].HORA}</td>
<td>${dental[i].ESPECIALISTA}</td>
<td>${dental[i].PACIENTE}</td>
<td>${dental[i].RUT}</td>
<td>${dental[i].PREVISION}</td>
`;
  }
};

totalRadiologia();
totalTraumatologia();
totalDental();
