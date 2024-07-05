const courses = [
  {
    id: 1,
    name: "Zostań Developerem Front-end z opcją stażu w Sii",
    category: "Development",
    price: 3669,
    duration: 8,
    description:
      "Zadaniem kursu jest przygotowanie Cię do podjęcia pracy w zawodzie Front-end Developera.",
    rating: 4.8,
    logoUrl: "/logos/javascript.svg",
    active: true,
  },
  {
    id: 2,
    name: "Zostań Testerem Automatyzującym Selenium",
    category: "Testing",
    price: 2449,
    duration: 6,
    description:
      "Przygotowuje uczestnika kursu do pracy jako Tester Automatyzujący aplikacji webowych.",
    rating: 4.3,
    logoUrl: "/logos/selenium.svg",
    active: true,
  },
  {
    id: 3,
    name: "Become a Scrum Master",
    category: "Scrum",
    price: 2999,
    duration: 6,
    description:
      "Przygotowanie uczestnika kursu do pracy jako Tester Automatyzujący aplikacji webowych.",
    rating: 4.5,
    logoUrl: "/logos/scrum.png",
    active: true,
  },
  {
    id: 4,
    name: "Zostań Developerem C#",
    category: "Development",
    price: 4499,
    duration: 10,
    description:
      "Szkolenie umożliwia uczestnikom opanować język C#, środowisko .NET, tworzyć proste aplikacje konsolowe, okienkowe i webowe.",
    rating: 5,
    logoUrl: "/logos/csharp.svg",
    active: true,
  },
  {
    id: 5,
    name: "Zostań UX Designerem",
    category: "UX",
    price: 2999,
    duration: 6,
    description:
      "Zadaniem kursu jest przygotowanie Cię do podjęcia pracy w zawodzie UX Designera.",
    rating: 4,
    logoUrl: "/logos/figma.svg",
    active: true,
  },
  {
    id: 6,
    name: "Zostań Developerem Java z opcją stażu w Sii",
    category: "Development",
    price: 2999,
    duration: 6,
    description: "Przygotowuje do certyfikacji Java SE 11 Developer (1Z0-819).",
    rating: 4.8,
    logoUrl: "/logos/java.svg",
    active: true,
  },
];

const categories = ["Testing", "Development", "Scrum", "UX"];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  courses,
  categories,
};
