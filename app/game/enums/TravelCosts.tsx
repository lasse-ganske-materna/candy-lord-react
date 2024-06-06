import travelCosts  from "../../../data/travel_cost.json";
import City from "../game_state/City";

interface TravelCost{

}

export function loadTravelCosts() {
    return travelCosts;
  }
  
export function getTravelCost(start : City, target : City) : number {
    return travelCosts[start.name][target.name];
  
}