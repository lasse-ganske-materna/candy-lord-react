import React from "react";
import GameState from "../game_state/GameState";
import { Inventory } from "./Inventory";

interface Props {
  gameState: GameState;
}

export const Statusbar = ({ gameState }: Props) => {
  return (
    <>
      <ul>
        <li>Datum: {gameState.currentDate.toLocaleDateString("de-DE")}</li>
        <li>Location: {gameState.currentCity.name}</li>
        <li>Lebenspunkte: {gameState.healthPoints}</li>
        <li>CandyCoins: {gameState.candyCoins}</li>

        <Inventory gameState={gameState} />
      </ul>
    </>
  );
};
