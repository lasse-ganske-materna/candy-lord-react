import React from "react";
import Candy from "../enums/Candy";
import GameState from "../game_state/GameState";

interface Props {
  gameState: GameState;
}

export const Inventory = ({ gameState }: Props) => {
    const ownedCandies = gameState.inventory;
  const candyList = Array.from(ownedCandies.keys())
    .filter((c) => ownedCandies.get(c) != 0)
    .map((candyName) => {
      return (
        <li key={candyName}>
          {candyName} : {ownedCandies.get(candyName)}
        </li>
      );
    });
  return (
    <>
      <li>Inventar: {gameState.getTotalAmountCandies()}/{gameState.inventorySize}</li>
      <li>Süßigkeiten:</li>
      {candyList}
    </>
  );
};
