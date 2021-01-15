const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function absurdBubbleSort(){

}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, function (res) {
        if(response === 'yes'){
            callback(true)
        }
    })

    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
}