import candies from "../../../data/candies.json";

export default interface Candy {
  name: string;
  price: number;
}

export function loadCandies() {
  return candies;
}
