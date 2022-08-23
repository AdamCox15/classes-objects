//create a person object
let person = {
    firstName: 'Adam',
    lastName: 'Cox',
    age: 32
}

console.log(person.firstName);
console.log(person['lastName']);

//destructuring 
let meal = {
    appetizer: 'chips and salsa',
    entree: 'steak and bean burrito',
    dessert: 'fried ice cream',
    drink: 'coke'
}

//let dessert = meal.dessert
let {dessert,entree,appetizer,drink: bestSodaEver} = meal;

//let {entree, appetizer} = meal;

//let {drink: bestSodaEver} = meal;

//console.log(appetizer, entree, dessert);
//console.log(bestSodaEver);
//console.log(meal);


//For in loops!!
for(let key in meal){
 console.log(`For my ${key}} I had ${meal[key]}.`);
}


//Adding,changing and deleting properties from objects
person.occupation = 'Student at DevMountain'; //adding
person.age = 33; //or person.age++ //changing
delete person.lastName; //deleting 

console.log(person);







