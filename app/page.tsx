import Image from "next/image";
import Game from "./game/page";
import { loadCandies } from "./game/enums/Candy";
import { loadCities } from "./game/game_state/City";

export default function App() {
  const candies = loadCandies();
  const cities = loadCities(candies);

  return (
    <main className="">
      <Game candies={candies} cities={cities} /> <div className="p-10"></div>
    </main>
  );
}
