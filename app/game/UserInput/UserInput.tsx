import React from "react";
import State from "../enums/State";

import StreetItem from "./Street/StreetItem";
import StreetDialog from "./Street/StreetDialog";
import GameState from "../game_state/GameState";
import Candy from "../enums/Candy";
import TravelItem from "./Travel/TravelItem";
import City from "../game_state/City";

interface Props {
  gameState: GameState;
  handleBuyCandy: (candy: Candy, amount: number) => void;
  handleSellCandy: (candy: Candy, amount: number) => void;
  handleOnTravel: (cityTargetName: string) => void;
}

const UserInput = ({
  gameState,
  handleBuyCandy,
  handleSellCandy,
  handleOnTravel,
}: Props) => {
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
      return (
        <div className="flex justify-center items-center ">
          <TravelItem gameState={gameState} handleOnTravel={handleOnTravel} />{" "}
        </div>
      );
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
