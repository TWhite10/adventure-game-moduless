import { Character } from "./character.js";

export class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.belongings = this.typeOfCompanion(type);

    }
    typeOfCompanion(type) {
        switch(type) {
            case "Flea":
                return ["small hat", "sunglasses"];
            case "Cat":
                return ["collar", "string toy"];
            case "Dog":
                return ["bone", "leash"];
            case "Racoon":
                    return ["little bag", "snacks"];  
            default:
                return [];
    }

}
}