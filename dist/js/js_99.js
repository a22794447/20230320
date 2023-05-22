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

    let thead=[];
    thead.push(' ');

    let result = {};
    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        result[i] = [];
        for (let f = 1; f <=n2.value; f++) {
            result[i].push(i * f)
        }
    }

    let table =document.querySelector('#table');
    let theadTr = table.querySelector('thead tr');

    theadTr.innerHTML = '';
    thead.forEach((n, nindex) => {
        theadTr.innerHTML += `<th>${n}</th>`;
    });

    let tbody = table.querySelector('tbody');
    let tbodyTr = '';
    tbody.innerHTML = '';

    for (let row in result) {
        tbodyTr = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyTr += `<td>${value}</td>`;
        });

        tbodyTr += '</tr>';
        tbody.innerHTML += tbodyTr;
    }
}

let mark = document.querySelector('#mark');

mark.addEventListener('click', genTable);