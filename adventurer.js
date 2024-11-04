import { Character } from "./character.js";

//setup a game for multiple challengers 
export class Adventurer extends Character {
        
    static battle(challengers) {
      console.log (`Let the games begins !!!!!!`)  
    //more than one active players
    let activeChallengers = [...challengers];
    let round = 1;
    
    while (activeChallengers.length > 1) {
        console.log(`\n Round ${round} beginning!`);

       
    for (let i = 0; i < activeChallengers.length - 1; i += 2) {
        let player1 = activeChallengers[i];
        let player2 = activeChallengers[i + 1];

        console.log(`\n${player1.name} vs ${player2.name}`);
    //using health to determine who will go win the game      
    while (player1.health > 50 && player2.health > 50) {
            let roll1 = Math.floor(Math.random() * 20) + 1;
            let roll2 = Math.floor(Math.random() * 20) + 1;

            if (roll1 < roll2) {
                player1.health -= 2;
                console.log(`${player1.name} rolled ${roll1} and got injured! current health is: ${player1.health}`);
            } else {
                player2.health -= 2;
                console.log(`${player2.name} rolled ${roll2} and got injured! current health is: ${player2.health}`);
            }
        }
    if (player1.health <= 50) {
        activeChallengers = activeChallengers.filter(p => p !== player1);
            console.log(`${player2.name} wins the battle!`);
        } else {
            activeChallengers = activeChallengers.filter(p => p !== player2);
            console.log(`${player1.name} wins the battle!`);
        }
    }

    round++;
        
    }
    console.log(`\n Battle Winner: ${activeChallengers[0].name}! `);
    return activeChallengers[0];
    

}}
