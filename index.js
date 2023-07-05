const coffeeMenu = require("./coffee_data");

//Print an array of all drinks on the menu
console.log(coffeeMenu.map((items) => {return items.name}));
//print an array of drinks that cost 5 and under
console.log(coffeeMenu.filter((items) => {return items.price <= 5}));
//print an array of drinks that are priced at an even number
console.log(coffeeMenu.filter((items) => {return items.price % 2 === 0}));
//print the total if you were to order one of every drink
const getTotal = (total, items) => {
    return total += items.price;
};
console.log(coffeeMenu.reduce(getTotal, 0));
//print an array with all the drinks that are seasonal
console.log(coffeeMenu.filter((items) => {return items.seasonal === true}));
//print all the seasonal drinks with the words "with imported beans" after the item name
seasonalItems = coffeeMenu.filter((items) => {return items.seasonal === true});
seasons = seasonalItems.map((items) => {return `${items.name} with imported beans`});
console.log(seasons);
//example: "affogato with imported beans"