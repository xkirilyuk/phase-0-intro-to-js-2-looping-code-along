
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
    let messageArray = [];
    for (let i = 0; i < names.length; i++) {
        let message =(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        messageArray.push(message);
    }
    return messageArray;
}

writeCards;


countDown()

"Expected countDown(4) to log 4 first"


function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--)
    }
}