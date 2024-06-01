"use client";

import React from "react";
import NavigationBar from "./Navigation/NavigationBar";

const Game = () => {
  const [activeState, setActiveState] = React.useState("Straße");
  const states = ["Straße", "Reisen", "Bank", "ChaosCandyClub", "Krankenhaus"];

  function handleChangeState(newState: string) {
    console.log("handle");
    setActiveState(newState);
  }

  return (
    <div>
      <NavigationBar
        items={states}
        activeItem={activeState}
        handleChangeState={handleChangeState}
      />
    </div>
  );
};

export default Game;
