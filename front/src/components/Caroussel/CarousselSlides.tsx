import InfoImportantes from "../InfoImportantes/InfoImportantes";

const airQualityData = [
  {
    id: "1",
    pollutant: "Dioxyde d'Azote (NO₂)",
    objectifQualite: 40, // µg/m³
    valeurLimite: 200, // µg/m³
    seuilInformation: 200, // µg/m³
    seuilAlerte: 400, // µg/m³
  },
  {
    id: "2",
    pollutant: "Particules en Suspension (PM10)",
    objectifQualite: 30, // µg/m³
    valeurLimite: 50, // µg/m³
    seuilInformation: 50, // µg/m³
    seuilAlerte: 80, // µg/m³
  },
  {
    id: "3",
    pollutant: "Particules Fines (PM2.5)",
    objectifQualite: 10, // µg/m³
    valeurLimite: 25, // µg/m³
    seuilInformation: 25, // µg/m³
    seuilAlerte: 35, // µg/m³
  },
  {
    id: "4",
    pollutant: "Dioxyde de Soufre (SO₂)",
    objectifQualite: 50, // µg/m³
    valeurLimite: 350, // µg/m³
    seuilInformation: 500, // µg/m³
    seuilAlerte: 500, // µg/m³
  },
  {
    id: "5",
    pollutant: "Ozone (O₃)",
    objectifQualite: 180, // µg/m³
    valeurLimite: 240, // µg/m³
    seuilInformation: 180, // µg/m³
    seuilAlerte: 240, // µg/m³
  },
  {
    id: "6",
    pollutant: "Monoxyde de Carbone (CO)",
    objectifQualite: 10_000, // µg/m³
    valeurLimite: 10_000, // µg/m³
    seuilInformation: 10_000, // µg/m³
    seuilAlerte: 10_000, // µg/m³
  },
  {
    id: "7",
    pollutant: "Benzène (C₆H₆)",
    objectifQualite: 2, // µg/m³
    valeurLimite: 5, // µg/m³
    seuilInformation: 5, // µg/m³
    seuilAlerte: 5, // µg/m³
  },
  {
    id: "8",
    pollutant: "Métaux Lourds (Plomb, Arsenic, Cadmium, Nickel)",
    objectifQualite: 0.25, // µg/m³ pour Pb
    valeurLimite: 0.5, // µg/m³ pour Pb
    seuilInformation: 0.5, // µg/m³ pour Pb
    seuilAlerte: 0.5, // µg/m³ pour Pb
  },
  {
    id: "9",
    pollutant: "Benzo(a)pyrène (B[a]P)",
    objectifQualite: 1, // ng/m³
    valeurLimite: 1, // ng/m³
    seuilInformation: 1, // ng/m³
    seuilAlerte: 1, // ng/m³
  },
];

const CarousselSlides = [
  airQualityData.map((data) => {
    return {
      id: data.id,
      content: <InfoImportantes key={data.id} data={data} />,
    };
  }),
];
export default CarousselSlides;
