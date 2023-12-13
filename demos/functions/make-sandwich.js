const condiment1 = "mayo";
const topping1 = "tomato";
const condiment2 = "butter";
const bread = "white bread";
const meat = "turkey";
const topping2 = "lettuce";

function makeSandwich(bread, condiment1, condiment2, meat, topping1, topping2) {
  let sandwich = "no sandwhich";
  sandwich = `${bread} ${condiment1} ${condiment2} ${meat} ${topping1} ${topping2}`;
  return sandwich;
}


let finishedSandwich = makeSandwich(bread, condiment1, condiment2, meat, topping1, topping2);
console.log(finishedSandwich);
