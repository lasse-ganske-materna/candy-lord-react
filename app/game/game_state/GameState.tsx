import Candy from "../enums/Candy";
import State from "../enums/State";
import City from "./City";

export default interface GameState {
  activeState: State;
  initCandies: Candy[];
  initCities: City[];
  currentCity: City;
  getCurrentCandies(): Candy[];
  inventory: Map<string, number>;
  candyCoins: number;
  inventorySize: number;
  initHealthPoints: number;
  healthPoints: number;
  currentDate: Date;
  getTotalAmountCandies(): number;
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
  const inventory = new Map<string, number>();
  candies.forEach((candy) => {
    inventory.set(candy.name, 0);
  });

  return {
    initCities: cities,
    initCandies: candies,
    activeState: State.Straße,
    currentCity: currentCity,
    getCurrentCandies() {
      //TODO könnte man auslagern, damit es nicht immer neu berechnet werden muss
      const cityCandies = this.initCandies.map((candy) => {
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
    inventory: inventory,
    candyCoins: 300,
    inventorySize: 10, //TODO in .json auslagern.
    currentDate: new Date(),
    initHealthPoints: 100,
    healthPoints: 100,
    getTotalAmountCandies()  {
     return Array.from(inventory.values()).reduce(
        (sum, value) => sum + value,
        0
      );
    }
  };
}
