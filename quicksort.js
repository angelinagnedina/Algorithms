'use strict';
let random = [];
let smaller = [];
let bigger = [];
let array = [-12, -25, 10, 0, 1000];

function quicksort(arr) {
    if (arr.length < 2) {
        console.log(arr);
        return arr;
    } else {
        random = arr[0];
        smaller = arr.filter(number => number < random);
        bigger = arr.filter(number => number > random);
        return quicksort(smaller).concat(random).concat(quicksort(bigger));
    }
};

console.log(quicksort(array));