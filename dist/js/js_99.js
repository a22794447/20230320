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

    if(!n1){
        return;
    }

    if(n1.value <= 0){
        return;
    }

    if(!n2){
        return;
    }

    if(n2.value <= 0){
        return;
    }

    console.log('I can!')
}

let mark = document.querySelector('#mark');

mark.addEventListener('click', genTable);