export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];

    }
    static max_health = 100;
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
