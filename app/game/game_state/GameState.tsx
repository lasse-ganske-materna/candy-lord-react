import Candy from "../enums/Candy";
import State from "../enums/State";
import City from "./City";

export default interface GameState {
  activeState: State;
  initCandies: Candy[];
  initCities: City[];
  currentCity: City;
  getCurrentCandies(): Candy[];
}

interface Props {
  candies: Candy[];
  cities: City[];
  currentCity: City;
}

export function initGameState({
  candies,
  cities,
  currentCity,
}: Props): GameState {

  return {
    initCities: cities,
    initCandies: candies,
    activeState: State.Straße,
    currentCity: currentCity,
    getCurrentCandies() {
      const cityCandies = this.initCandies.map((candy) => {
        console.log(this.currentCity.name);
        let price = candy.price;
        if (this.currentCity.candyDecreased.name === candy.name) {
          price = Math.ceil(price * 0.75);
        } else if (this.currentCity.candyIncreased.name === candy.name) {
          price = Math.ceil(price * 1.25);
        }
        return { ...candy, price: price };
      });
      return cityCandies;
    },
  };
}
