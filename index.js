// TASK 1
// Write your code here ↓↓↓↓ //

/* const printExponentialValues = (num, amount) => {
    if( isNaN(num) || isNaN(amount) ) return console.log('x or y is not a number');
    let result = new Array(amount).fill(num);
    result = result.map( (num,i) => Math.pow(num, i+1) );
    console.log( result.join(" ") + " " );
}  */


function printExponentialValues(num, amount) {
    if (isNaN(num) || isNaN(amount)) return console.log('x or y is not a number');
    let arr = [];
    for (let i = 1; i <= amount; i++) {
        arr.push(Math.pow(num, i));
    }
    console.log(arr.join(" ") + " ");
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printExponentialValues(3, 5);
printExponentialValues(2, 8);

// TASK 2
// Write your code here ↓↓↓↓ //
let fruit = "apple";
function printFavoriteFruit() {
    fruit = "pear";
    console.log(`"My favorite fruit is: ${fruit}`);
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printFavoriteFruit();



// TASK 3
// Write your code here ↓↓↓↓ //

/*  const exponent = (num,amount) => {
    let result = 1;
    let arr = new Array(amount).fill(num);
    arr = arr.map( num => result = result * num );
    arr.forEach(num => console.log(num) );            
}  */  


function exponent(num, amount) {
    let result = 1;
    for (let i = 0; i < amount; i++) {
        result = result * num;
        console.log(result);
    }
    
}


//Variable wurde innerhalb der Funktion deklariert, deswegen 'ReferenceError: result is not defined'
// console.log(result);

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //

exponent(2, 3);
exponent(3, 4);
exponent(4, 5);
