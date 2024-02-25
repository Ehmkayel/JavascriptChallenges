// given an array of integers, find the sum of its elements
// for example, if the array ar [1, 2, 3, 4] 1+2+3+4 = 10, , 30 return.

// solution
// initialize the function
// initialize the variable that will contain the result of our array
// Then loop through the array
// Then sum the result of the variable
// console.log the result

function sumOfArray(array){
    let value = 0;
    for(let i = 0; i < array.length; i++){
        value += array[i]

    }
    console.log(value)
}
sumOfArray([1, 2, 3, 4])