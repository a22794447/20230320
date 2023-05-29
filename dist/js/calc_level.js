const sayHi = () => {
    // let name = document.querySelector('#name')

    // if (!name) {
    //     alert('沒有輸入框');
    //     return;
    // }

    if (!name.value) {
        alert('請輸入名字');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hi!, ${name.value}`;
    name.value = '';
    name.focus();

}

let hi = document.querySelector('#hi');

hi.addEventListener('click', sayHi);

let name = document.querySelector('#name');

// name.addEventListener('change', () => {
//     // 觸發條件：輸入文字，離開輸入框，刪掉文字，離開輸入框
//     if (!name.value) {
//         alert('請輸入名字');
//         name.focus();
//     }

//     // console.log(name.value)
// })

// name.addEventListener('blur', () => {
//     console.log(`blur: ${name.value}`);
// })

// name.addEventListener('keypress', () => {
//         console.log(`keypress: ${name.value}`);
//     })

    name.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            sayHi();
        }
        // console.log(`keyup: ${name.value}`)
    })