import React from "react";
import State from "../enums/State";

import StreetItem from "./Street/StreetItem";
import StreetDialog from "./Street/StreetDialog";
import GameState from "../game_state/GameState";


interface Props {
  gameState: GameState;
  handleBuyCandy: (amount: number) => void;
  handleSellCandy: (amount: number) => void;
}

const UserInput = ({ gameState, handleBuyCandy, handleSellCandy }: Props) => {
  switch (gameState.activeState) {
    case State.Straße:
      const streetItems = gameState.getCurrentCandies().map((candy) => {
        const dialogId = `dialog-${candy.name}`;
        return (
          <div key={candy.name}>
            <StreetItem candy={candy} dialogId={dialogId} />
            <StreetDialog
              candy={candy}
              dialogId={dialogId}
              handleBuyCandy={handleBuyCandy}
              handleSellCandy={handleSellCandy}
            />
          </div>
        );
      });
      return <div className="grid grid-cols-3 gap-3">{streetItems}</div>;
    case State.Reisen:
      return <div>Reisen</div>;
    case State.Bank:
      return <div>Bank</div>;
    case State.ChaosCandyClub:
      return <div>ChaosCandyClub</div>;
    case State.Krankenhaus:
      return <div>Krankenhaus</div>;
    default:
      return <div>UserInput</div>;
  }
};

export default UserInput;
