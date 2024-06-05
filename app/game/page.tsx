"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "./Navigation/NavigationBar";
import State from "./enums/State";
import UserInput from "./UserInput/UserInput";
import GameState, { initGameState } from "./game_state/GameState";
import City from "./game_state/City";
import Candy from "./enums/Candy";
import { Statusbar } from "./Status/Statusbar";

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

  function updateInventoryCandy(
    candy: Candy,
    newAmount: number,
    newCandyCoins: number
  ) {
    gameState.inventory.set(candy.name, newAmount);
    setGameState({
      ...gameState,
      candyCoins: newCandyCoins,
    });
  }

  function handleBuyCandy(candy: Candy, amount: number) {
    const currentAmount = gameState.inventory.get(candy.name);
    amount = parseInt(amount); // Warum auch immer JS hier ein string bekommt?!!
    const newAmount = currentAmount + amount;
    const newTotalAmount = gameState.getTotalAmountCandies();

    if (newTotalAmount > gameState.inventorySize) {
      // TODO handle Inventar zu klein
      return;
    }

    const price = gameState
      .getCurrentCandies()
      .filter((c) => c.name === candy.name)[0].price;

    const newCandyCoins = gameState.candyCoins - price * amount;

    if (newCandyCoins < 0) {
      // TODO handle zu wenig Geld
      return;
    }

    updateInventoryCandy(candy, newAmount, newCandyCoins);
  }

  function handleSellCandy(candy: Candy, amount: number) {
    const currentAmount = gameState.inventory.get(candy.name);
    amount = parseInt(amount); // Warum auch immer JS hier ein string bekommt?!!
    const newTotalAmount = currentAmount - amount;

    if (newTotalAmount < 0) {
      // TODO handle nicht genug Süßigkeiten
      return;
    }

    const price = gameState
      .getCurrentCandies()
      .filter((c) => c.name === candy.name)[0].price;

    const newCandyCoins = gameState.candyCoins + price * amount;

    updateInventoryCandy(candy, newTotalAmount, newCandyCoins);
  }

  return (
    <>
      <div>
        <NavigationBar
          gameState={gameState}
          handleChangeState={handleChangeState}
        />
      </div>
      <div className="flex">
        <div className="flex-1">
          <UserInput
            gameState={gameState}
            handleBuyCandy={handleBuyCandy}
            handleSellCandy={handleSellCandy}
          />
        </div>
        <div className="flex-none">
          <Statusbar gameState={gameState} />
        </div>
      </div>
    </>
  );
}
