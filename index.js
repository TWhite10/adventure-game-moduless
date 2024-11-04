import { Character } from "./character.js";
import { Adventurer } from "./adventurer.js";
import { Companion } from "./companion.js";
import { AdventurerFactory } from "./adventurerFactory.js";

//extend the Adventurer class to create a Healer class.
const healers = new AdventurerFactory("Healer","Healing");
const robin = healers.generate("Robin");
const chloe = new Companion(`Chloe`,`Cat`)
console.log(robin)
console.log(chloe)

//new sample of battle challengers 
const fighters =[
    new Adventurer("ken", "Ninja", "stealth", "darkness"),
    new Adventurer("Jason", "Fighter", "strength", "speed"),
    new Adventurer("Mila", "Hunter", "archery", "close combat"),
    new Adventurer("Jean", "Wizard", "magic", "physical combat"),

]


Adventurer.battle(fighters);