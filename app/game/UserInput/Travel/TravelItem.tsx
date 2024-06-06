import React, { useState } from "react";
import GameState from "../../game_state/GameState";
import City from "../../game_state/City";
import { getTravelCost } from "../../enums/TravelCosts";

interface Props {
  gameState: GameState;
  handleOnTravel: (targetCityName: string) => void;
}

const TravelItem = ({ gameState, handleOnTravel }: Props) => {
  let firstCity: string = "";
  const travelCities = gameState.initCities
    .filter((c) => gameState.currentCity.name !== c.name)
    .map((targetCity) => {
      if (firstCity === "") {
        firstCity = targetCity.name;
      }
      const travelCost = getTravelCost(gameState.currentCity, targetCity);

      return (
        <option key={targetCity.name} value={targetCity.name}>
          {targetCity.name} ({travelCost} CC)
        </option>
      );
    });

  const [selectedCityName, setSelectedCityName] = useState<string>(firstCity);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityName(event.target.value);
  };

  return (
    <>
      <label className="form-control w-full max-w-xs ">
        <div className="label">
          <span className="label-text">Wo möchtest du hin?</span>
        </div>
        <select
          className="select select-accent "
          value={selectedCityName}
          onChange={handleSelectChange}
        >
          {travelCities}
        </select>
      </label>
      <button
        className="btn btn-outline btn-accent"
        onClick={() => {
          handleOnTravel(selectedCityName);
        }}
      >
        {"Los!"}
      </button>
    </>
  );
};

export default TravelItem;
