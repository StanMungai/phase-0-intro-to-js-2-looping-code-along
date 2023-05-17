// Code your solutions in this file
function writeCards(array, name) {
    let msgArray = [];

    for (let i = 0; i < array.length; i++) {
        let msg = `Thank you, ${array[i]}, for the wonderful ${name} gift!`;
        msgArray.push(msg)
    }

    return msgArray
}


function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}
