'use strict';

function factorial(number) {
    if (number === 1) {
        return number;
    } else {
        // Применение рекурсии
        return number * factorial(number - 1);
    };
};

let answer = factorial(4);
console.log(answer);