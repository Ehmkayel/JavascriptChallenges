// given an array of integers, find the sum of its elements
// for example, if the array ar [1, 2, 3, 4] 1+2+3+4 = 10, , 30 return.

// solution
// initialize the function
// initialize the variable that will contain the result of our array
// Then loop through each element of the array by using a "for" loop
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

// using the reduce method
// initialize the function
// use the reduce method to sum all the elements of the array
// console.log the result

function sumOfArray(array){
  const sum = array.reduce((totalValue, currentValue) => totalValue + currentValue, 0);
    console.log(sum)
}

sumOfArray([1, 2, 3, 4])
