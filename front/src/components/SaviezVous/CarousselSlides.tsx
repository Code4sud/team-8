import SaviezVous from "./SaviezVous";

const infoDatas = [
  {
    id: "1",
    title: "Oxydes d'azote (NOx)",
    description:
      " Les oxydes d'azote (NOₓ), principalement le NO et le NO₂, sont produits par la combustion dans les moteurs et les centrales. Ils contribuent au smog et à la formation d'ozone troposphérique, ainsi qu'aux pluies acides, affectant la qualité de l'air et la santé respiratoire.",
  },
  {
    id: "2",
    title: "Dioxydes de soufre (SO2)",
    description:
      "Le dioxyde de soufre (SO₂) est un gaz produit par la combustion de combustibles fossiles contenant du soufre, notamment le charbon et le pétrole. Il est responsable des pluies acides et peut causer des problèmes respiratoires chez les personnes sensibles, comme les asthmatiques.",
  },
  {
    id: "3",
    title: "Particules en suspension (PM10)",
    description:
      "Les particules en suspension (PM10) sont de petits morceaux de matière solide ou liquide en suspension dans l'air. Elles peuvent provenir de sources naturelles, comme les tempêtes de sable, ou de sources anthropiques, comme les émissions de véhicules et les activités industrielles.",
  },
  {
    id: "4",
    title: "Particules fines (PM2.5)",
    description:
      "Les particules fines (PM2.5) sont des poussières microscopiques provenant des véhicules, des industries et de la combustion. Elles pénètrent profondément dans les poumons, causant des problèmes de santé tels que l'asthme et les maladies cardiovasculaires, tout en réduisant la visibilité et dégradant les bâtiments.",
  },
];

const CarousselSlides = [
  infoDatas.map((data) => {
    return {
      id: data.id,
      content: <SaviezVous key={data.id} data={data} />,
    };
  }),
];

export default CarousselSlides;
