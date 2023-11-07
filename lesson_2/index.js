'use strict';

const arr =  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]
let res = 0;
for (let i = 0; i < arr.length; i++) {
    res += arr[i][i];
}

console.log(res);

console.log('==========')

function convertToBynary(num) {
    let res = [];
    while (num > 0) {
        res.push(num % 2);
        num = Math.floor(num / 2);
    }
    return res.reverse().join('');
}
const convertToBynaryDecl = (num) => num.toString(2);

console.log(convertToBynary(10));
console.log(convertToBynaryDecl(10));
