import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={"w-50 mx-auto"} style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
export default Header;
