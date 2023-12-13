const c1 = "mayo";
const t1 = "tomato";
const c2 = "butter";
const b = "white bread";
const m = "turkey";
const t2 = "lettuce";

function makeSandwich(bread, condiment1, condiment2, meat, topping1, topping2) {
  let sandwich = "no sandwhich";
  sandwich = `${bread} ${condiment1} ${condiment2} ${meat} ${topping1} ${topping2}`;
  return sandwich;
}


let finishedSandwich = makeSandwich(b,c1,c2,m,t1,t2);
console.log(finishedSandwich);
