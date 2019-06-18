'use strict';

//Это бинарный поиск, детка

function binary_search (array, item) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high)/2);
        if (array[mid] == item) {
            return mid;
        } else if (array[mid] < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        };
    };
    return null;
};

let numbers = [1, 2, 3, 4, 5, 8];

console.log(binary_search(numbers, 1));