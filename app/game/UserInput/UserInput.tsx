import React from "react";
import State from "../enums/State";
import { StreetInput } from "./Street/StreetInput";
import { Candy } from "../enums/Candy";
import StreetItem from "./Street/StreetItem";
import StreetDialog from "./Street/StreetDialog";

interface Props {
  activeState: State;
  handleBuyCandy: (amount: number) => void;
  handleSellCandy: (amount: number) => void;
}

const UserInput = ({ activeState, handleBuyCandy, handleSellCandy }: Props) => {
  switch (activeState) {
    case State.Straße:
      const streetItems = Object.values(Candy).map((candy) => {
        const dialogId = `dialog-${candy}`;
        return (
          <div key={candy}>
            <StreetItem candy={candy} price={60} dialogId={dialogId} />
            <StreetDialog
              candy={candy}
              dialogId={dialogId}
              handleBuyCandy={handleBuyCandy}
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
