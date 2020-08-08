import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <header className={"w-50 mx-auto"} style={headerStyle}>
        <h1>About</h1>
      </header>
      <p className={"w-50 mx-auto"} style={{ paddingTop: 20 }}>
        This is the todoList app v1.0.0., it is part of react training that am
        doing.
      </p>
    </React.Fragment>
  );
};

const headerStyle = {
  background: "#fff",
  color: "#333",
  textAlign: "center",
  padding: "10px",
};

export default About;
