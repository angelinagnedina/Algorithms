'use strict';

let deque = [];
let graph = {};
graph['you'] = ['Katya', 'Ksysha', 'Julia'];
graph['Katya'] = ['Nikitos'];
graph['Ksysha'] = ['Inna'];
graph['Julia'] = {};
graph['Julia']['friends'] = ['Denis'];
graph['Julia']['isSeller'] = true;
let person;
let checked = [];
function mangoSeller(name) {
    if (graph[person]['isSeller']) {
        return true;
    } else {
        return false;
    }
};

function search(name) {
    console.log(graph);
    deque += graph.name;
    console.log(deque);
    while (deque) {
        person = deque.shift();
        if (checked.indexOf(person) !== -1) {
            if (mangoSeller(person)) {
                console.log(person + 'is a mango seller');
            } else {
                deque += graph.peson;
                checked.append(person);
            }
        };
    };
};

// search('you');