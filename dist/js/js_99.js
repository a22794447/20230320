// let main = document.querySelector('#main');
// console.log(main);
// // main.innerHTML = 'Super man!';

// let lis = document.querySelectorAll('#menu li');
// console.log(lis);

// let lis2 = document.querySelector('#menu li');
// console.log(lis2);

// let num1 = document.querySelector('#num-1');
// let showBtn = document.querySelector('#show-btn');

// showBtn.addEventListener('click', () => {
//     num1.value = 'ABC';
// })

const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    console.log(n1, n2);
    console.log(n1.value, n2.value)
}

let mark = document.querySelector('#mark');

mark.addEventListener('click', genTable);