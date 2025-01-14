const menuHeader = [
  { id: 1, url: "#", text: "Home", isActive: false },
  { id: 2, url: "#", text: "Prodotti", isActive: true },
  { id: 3, url: "#", text: "Chi siamo", isActive: false },
  { id: 4, url: "#", text: "Contatti", isActive: false }
];

const menuFooter = {
  menuPastificio: [
    { id: 1, url: "#", text: "Il Pastificio", isActive: false },
    { id: 2, url: "#", text: "Grano", isActive: false },
    { id: 3, url: "#", text: "Filiera", isActive: false },
    { id: 4, url: "#", text: "100 anni di pasta", isActive: false },
    { id: 5, url: "#", text: "Sartoria della pasta", isActive: false }
  ],
  menuProdotti: [
    { id: 1, url: "#", text: "Le classiche", isActive: false },
    { id: 2, url: "#", text: "Le Integrali", isActive: false },
    { id: 3, url: "#", text: "Le Speciali", isActive: false },
    { id: 4, url: "#", text: "Le Biologiche", isActive: false },
    { id: 5, url: "#", text: "Le Gluten-free", isActive: false }
  ]
};

export {
  menuHeader,
  menuFooter
}