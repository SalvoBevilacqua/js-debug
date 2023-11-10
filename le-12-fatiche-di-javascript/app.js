/*
const input = document.querySelector('input');
const array = null;

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.add(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.text = input.value;
    document.querySelector('ul').push(li);

    let counter = '';
    let item    = array[0];
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte');
});

1. array dev'essere dichiarato come appunto un array
2. sostituire add con push
3. sostituire text con innerHTML
4. sostituire push con append
5. dichiarare count come valore numerico
6. sostituire const con let
7. aggiungere array.length
8. sostituire j++
9. aggiungere le graffe
10. sostituire querySelector
11.inserire punto per la classe
12.aggiungere backtic
*/

const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;

    document.querySelector('ul').append(li);

    let counter = 0;
    let item    = array[0];
    let max   = 1;
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                    max  = counter;
                    item = array[i];
                }                
            }
        }
        counter = 0;
    }

    const alert = document.querySelector('.alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);
});