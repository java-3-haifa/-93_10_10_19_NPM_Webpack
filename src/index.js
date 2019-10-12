import avg from './my-module.js';
import {superSum as sum} from "./my-module";
import $ from 'jquery';

console.log(avg(1,2,3,4,5));
console.log(sum(1,2,3,4,5));

$('#title').html('Hello world');

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

async function loadTodos(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
    }catch(e){
        console.error(e);
    }
}

