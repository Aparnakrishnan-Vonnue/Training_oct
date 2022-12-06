let firstCard = 10
let secondCard = 11
let sum = firstCard+ secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    sumEl.textContent ="Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔"
    }
    else if (sum===21) {
        message="Wohoo!!You've got Blackjack 🤩"
        hasBlackJack=true
    }
    else  {
        message="You are out of the Gamepad 😭"
        isAlive=false
    }
    messageEl.textContent = message
}





// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🤔"
// }
// else if (sum===21) {
//     message="Wohoo!!You've got Blackjack 🤩"
//     hasBlackJack=true
// }
// else  {
//     message="You are out of the Gamepad 😭"
//     isAlive=false
// }
// Cash out!
// console.log(hasBlackJack)


// // let age=70
// // if (age < 100){
// //     console.log("Not eligible")
// // }
// // else if(age === 100){
// //     console.log("Here is your birthday card from the king!")
// // }
// // else{
// //     console.log("Not eligible, you have already gotten one")
// // }  
// let isAlive = true
// console.log(isAlive)

// console.log(4 === 3 ) //false
// console.log(5 > 2) //true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false

// console.log(message)


