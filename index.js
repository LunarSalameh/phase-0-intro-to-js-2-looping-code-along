// Code your solutions in this file

function writeCards(nameArray, msg) {
    let msgArray = [...nameArray];

    for (let i = 0; i < nameArray.length; i++) {
        msgArray[i] = `Thank you, ${nameArray[i]}, for the wonderful ${msg} gift!`;
        console.log(msgArray[i]);
    }

    return msgArray;
}

function countDown(value) {

    while (value != -1) {
        console.log(value);
        value--;
    }

}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
countDown(10);
countDown(4);

