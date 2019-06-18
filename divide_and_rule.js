'use strict';

function sum(arr) {
    console.log(arr);
    if (arr.length == 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.splice(1, arr.length - 1));
    };
};

let random = Math.floor(Math.random() * (10 - 1) + 1);
let array = [];
for (let i = 0; i <= random; i++) {
    array.push(i);
};
console.log(sum(array));