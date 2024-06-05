"use client";

import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import State from "./enums/State";
import UserInput from "./UserInput/UserInput";
import path from "path";
import { promises } from "fs";



async function initCandies() {
  console.log("reading users.json...");
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "data/candies.json");
  // Read the json file
  const jsonData = await promises.readFile(filePath);
  // Parse data as json
  const users: User[] = JSON.parse(jsonData);

  return users;
}

const Game = () => {
  const [activeState, setActiveState] = React.useState(State.Straße);
  const [users, setUsers] = React.useState(initCandies());
  function handleChangeState(newState: State) {
    setActiveState(newState);
  }

  function handleBuyCandy(amount: number) {
    console.log("buying candy " + amount);
  }

  function handleSellCandy(amount: number) {
    console.log("selling candy " + amount);
  }

  return (
    <>
      <div>
        <NavigationBar
          activeState={activeState}
          handleChangeState={handleChangeState}
        />
      </div>
      <div>
        <UserInput
          activeState={activeState}
          handleBuyCandy={handleBuyCandy}
          handleSellCandy={handleSellCandy}
        />
      </div>
    </>
  );
};

export default Game;
