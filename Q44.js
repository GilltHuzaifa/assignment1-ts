"use strict";
function buildSandwich(...items) {
    console.log("You're ordering a sandwich with:");
    for (const item of items) {
        console.log(`${item}`);
    }
    console.log("Enjoy your delicious sandwich!");
}
buildSandwich("ham", "cheese", "lettuce");
buildSandwich("roast beef", "horseradish");
buildSandwich("grilled cheese");
