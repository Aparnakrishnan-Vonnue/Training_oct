let firstCard = 10
let secondCard = 8
let sum = firstCard+ secondCard

if (sum <  = 21) {
    console.log("Do you want to draw a new card? 🤔")
}
else if (sum===21) {
    console.log("Wohoo!!You've got Blackjack 🤩")
}
else (sum > 21) {
    console.log("You are out of the Gamepad 😭")
}