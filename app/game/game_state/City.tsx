import Candy from "../enums/Candy";
import initCities from "../../../data/cities.json";

export default interface City {
  name: string;
  candyDecreased: Candy;
  candyIncreased: Candy;
}

export function loadCities(candies: Candy[]): City[] {
  return initCities.map((c) => {
    // Suche zwei zufällige Süßigkeiten heraus, die sich voneinander unterscheiden
    const candyIncreasedIndex = Math.floor(Math.random() * candies.length);
    let candyDecreasedIndex;
    do {
      candyDecreasedIndex = Math.floor(Math.random() * candies.length);
    } while (candyIncreasedIndex === candyDecreasedIndex);

    return {
      name: c.name,
      candyIncreased: candies[candyIncreasedIndex],
      candyDecreased: candies[candyDecreasedIndex],
    };
  });
}
