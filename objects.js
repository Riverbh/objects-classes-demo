
const person = {
    first: "River",
    last: "Hansen",
    age: 21,
}

// dot notation
// console.log(person.first)

// bracket notation
// console.log(person['last'])

const meal = {
    appetizer: "chips and salsa",
    entree: "carne asada burrito",
    dessert: "tres leches",
    drink: "horchata",
}

const meal2 = {
    appetizer: "ceviche",
    entree: "loaded nachos",
    dessert: "fried icecream",
    drink: "cerveza",
}

// let {dessert} = meal
//above is the same as below 
// let dessert = meal.dessert

let {appetizer, dessert, entree, drink} = meal
// //above is the same as:
// let appetizer = meal.appetizer
// let entree = meal.entree
// let drink = meal.drink

console.log(entree  + " with " +  drink)

let newFav = "Dr. P"

meal.drink = newFav 

//rename and destructure
const {drink: drink2, appetizer: app2, dessert : des2, entree: delicious} = meal2

//loop over meal2 
//if the key is our dessert update the value to be churros and print to console else print the value 
for(let key in meal2){
    if(key === "dessert"){
         meal2[key] = 'churros'
        console.log(meal2[key])
    }else{ 
        console.log(key)
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

  teams.teamSix = ["Jared", "Kyle", "Bob", "Jordan"]

  
//deletes as team array from the class
  delete teams.teamFour;
  console.log(teams)