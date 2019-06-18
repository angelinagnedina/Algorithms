'use strict';

function findSmallest(array) {
    let min = array[0];
    let index = 0;
    array.forEach(function(current, ind, arr) {
        if (current < min) {
            min = current;
            index = ind;
        } ;
    });
    return index;
};

function selectionSort(arr) {
    let newArray = [];
    let smallest = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        smallest = findSmallest(arr);
        newArray.push(arr.splice(smallest, 1)[0]);
    };
    console.log(newArray);
};

var list = [10, 9, 8, 7, 6, 5];
selectionSort(list);