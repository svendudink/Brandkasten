const buttons = [
  {
    buttonName: "Documents",
    id: "documents",
  },
  { buttonName: "Data", id: "data" },
  { buttonName: "Money", id: "money" },
  { buttonName: "Jewelry", id: "jewelry" },
  {
    buttonName: "Guns",
    id: "guns",
    options: [
      { Title: "Max 1 gun", id: "max1Gun", number: 1 },
      { Title: "Max 5 guns", id: "max5Guns", number: 5 },
      { Title: "Max 10 guns", id: "max10Guns", number: 10 },
      { Title: "Max 20 guns", id: "max20Guns", number: 20 },
    ],
  },
  {
    buttonName: "Keys",
    id: "keys",
    options: [
      { Title: "Max 10 keys", id: "max10Keys", number: 10 },
      { Title: "Max 50 keys", id: "max50Keys", number: 50 },
      { Title: "Max 100 keys", id: "max100Keys", number: 100 },
      { Title: "Max 200 keys", id: "max200Keys", number: 200 },
      { Title: "Max 500 keys", id: "max500Keys", number: 500 },
    ],
  },
  { buttonName: "I do not know", id: "iDoNotKnow" },
];

export default buttons;
