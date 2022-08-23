//create a person object
let person = {
    firstName: 'Adam',
    lastName: 'Cox',
    age: 32
}

//console.log(person.firstName);
//console.log(person['lastName']);

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
 //console.log(`For my ${key}} I had ${meal[key]}.`);
}


//Adding,changing and deleting properties from objects
person.occupation = 'Student at DevMountain'; //adding
person.age = 33; //or person.age++ //changing
delete person.lastName; //deleting 

//console.log(person);



//Classes and extending classes
class Pet{
  constructor(name, age, breed, color){
    this.name = name,
    this.age = age,
    this.breed = breed,
    this.color = color
  }
}

let tuukka = new Pet('Tuukka', 6, 'Doberman', 'Red and Rust');
let rook = new Pet('Rook', 1, 'Belgian Malinois', 'Black and Tan');
let dekker = new Pet('Dekker', '8 months', 'Rottweiler', 'Black and Tan');

/*console.log(tuukka.name);
console.log(tuukka);
console.log(rook.name);
console.log(dekker);
console.log(dekker.age);*/
console.log(rook.breed);
console.log(tuukka.color);

class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age)
        this .breed = breed
    }
    bark(){
        console.log(`Bark, my name is ${this.name} and I am a ${this.breed}.`)
    }
}
let arrow = new Dog('Arrow', 5, 'Shepard/Husky mix');
console.log(arrow);
arrow.bark();

class Hyena extends Pet{
constructor(name, age, color){
    super(name,age)
    this.color = color,
    this.temperament = 'mean'
}
beNice(){
    this.temperament = 'nice'
    console.log(`${this.name} is now a nice hyena!`)
}

}
let kane = new Hyena('Kane', 3, 'spotted')

console.log(kane.temperament);
kane.beNice();