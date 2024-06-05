"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "./Navigation/NavigationBar";
import State from "./enums/State";
import UserInput from "./UserInput/UserInput";
import GameState, { initGameState } from "./game_state/GameState";
import City from "./game_state/City";
import Candy from "./enums/Candy";

interface Props {
  candies: Candy[];
  cities: City[];
}

export default function Game({ candies, cities }: Props) {
  const [currentCity, setCurrentCity] = useState(cities[0]);

  // initGameState nur übergeben, statt initGameState() aufzurufen => zwar wird das Objekt nicht neu initialisiert, aber die Funktion wird dennoch immer wieder aufgerufen
  // https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
  const tmpInitFunction = initGameState({ candies, cities, currentCity });
  const [gameState, setGameState] = React.useState<GameState>(tmpInitFunction);

  function handleChangeState(newState: State) {
    // Wenn das Object verändert wird, sollte dennoch ein neues Objekt erzeugt werden, damit React das mitbekommt
    setGameState({
      ...gameState,
      activeState: newState,
    });
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
          gameState={gameState}
          handleChangeState={handleChangeState}
        />
      </div>
      <div>
        <UserInput
          gameState={gameState}
          handleBuyCandy={handleBuyCandy}
          handleSellCandy={handleSellCandy}
        />
      </div>
    </>
  );
}
