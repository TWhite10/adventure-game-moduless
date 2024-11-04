import { Adventurer } from "./adventurer.js";

export class AdventurerFactory {
    constructor(role,skill = `strength`, weakness = `overComfident` ) {
        this.role = role;
        this.adventurers = [];
        this.skill=skill;
        this.weakness=weakness;
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role,this.skill,this.weakness);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}
