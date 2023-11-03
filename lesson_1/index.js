'use strict';

function isNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

function fractionOfNumbers(arr) {
    let negativeNums = 0;
    let positiveNums = 0;
    let zeroNums = 0;
    for (const arrElement of arr) {
        if (arrElement > 0) {
            positiveNums++;
        } else if (arrElement < 0) {
            negativeNums++;
        } else {
            zeroNums++;
        }
    }
    return `neg:${negativeNums * 100 / arr.length}, pos:${positiveNums * 100 / arr.length}, zero:${zeroNums * 100 / arr.length}`
}
function fractionOfNumbersDecl(arr) {
    let len = arr.length;
    let negativeNums = arr.filter((x) => x > 0).length;
    let positiveNums = arr.filter((x) => x < 0).length;
    let zeroNums = arr.filter((x) => x === 0).length;
    return `neg:${negativeNums / len}, pos:${positiveNums / len}, zero:${zeroNums / len}`
}

console.log(fractionOfNumbersDecl( [1, 2, 3, 4, -5, -7]));
