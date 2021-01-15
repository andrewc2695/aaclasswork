const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function absurdBubbleSort(){

}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, function (res) {
        if(res === 'yes'){
            callback(true);
            reader.close();

        } else {
            callback(false);
            reader.close();
        }
    })

    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
}

// askIfGreaterThan(7, 5, function (res) {
//     console.log(res)
// })

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (madeAnySwaps === undefined) {
        madeAnySwaps = false;
    }
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
            if (isGreaterThan) {
                let holder = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = holder;
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        })
    }


}