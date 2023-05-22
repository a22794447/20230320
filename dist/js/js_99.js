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
    // 數字1 的 DOM
    let n1 = document.querySelector('#n1');
    // 數字2 的 DOM
    let n2 = document.querySelector('#n2');

    // 如果沒有數字1
    if(!n1){
        // BYE
        return;
    }

    // 如果數字1 小於等於 0
    if(n1.value <= 0){
        // BYE
        return;
    }

    // 如果沒有數字2
    if(!n2){
        // BYE
        return;
    }

    // 如果數字2 小於等於 0
    if(n2.value <= 0){
        // BYE
        return;
    }

    // 抓取 table 的 DOM
    let table =document.querySelector('#table');
    let thead = table.querySelector('thead ');
    let tbody = table.querySelector('tbody');
    
    // 初始化 thead UI
    thead.innerHTML = '';
    tbody.innerHTML = '';

    // HTML 內容初始化
    let theadHTML = '<tr><th></th>';

    // 將 n1 的值跑 for loop(迴圈知道上限的喔) 產生 thead
    // 填入 thead 資料
    for (let i = 1; i <= n1.value; i++) {
        theadHTML += `<th>${i}</th>`;
    }

    // 關閉 thead
    theadHTML += '</tr>'

    // 更新 thead 內容
    thead.innerHTML = theadHTML;

    // tbody UI 內容資料產生 
    let result = {};
    for (let i = 1; i <= n2.value; i++) {
        result[i] = [];
        for (let f = 1; f <=n1.value; f++) {
            result[i].push(i * f)
        }
    }

    // 產生 UI 
    let tbodyHTML = '';
    for (let row in result) {
        tbodyHTML = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyHTML += `<td>${value}</td>`;
        });

        tbodyHTML += '</tr>';
        tbody.innerHTML += tbodyHTML;
    }
}
let mark = document.querySelector('#mark');

mark.addEventListener('click', genTable);