const calcLevel = () => {
    let number = document.querySelector('#number')

    if (!number) {
        alert('沒有輸入框');
        return;
    }

    if (!number.value) {
        alert('請輸入名字');
        return;
    }

    let response = document.querySelector('#response');
    // 修正為記算
    response.innerHTML = `Hi!, ${number.value}`;
    number.value = '';
    number.focus();

}

let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);

let number = document.querySelector('#number');

    number.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            calcLevel();
        }
        // console.log(`keyup: ${name.value}`)
    })