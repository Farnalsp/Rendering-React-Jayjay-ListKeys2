import React from "react";
import "./App.css";

const MenuList = ({ list }) => {
  const listMenu = list.map((item) => (
    <li key={item.code}>
      <p>{item.name}</p>
    </li>
  ));

  return <ul>{listMenu}</ul>;
};
const listMenu = [
  { code: "home", name: "Home" },
  { code: "about", name: "About" },
  { code: "contact", name: "Contact" },
];
const App = () => {
  return (
    <div>
      <h1>Halo Semua</h1>
      <MenuList list={listMenu} />
    </div>
  );
};

export default App;
