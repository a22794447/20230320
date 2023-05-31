// alert('todo');

const init = () => {
    let addBtn = document.querySelector('#add-btn');
    let itemName = document.querySelector('#item-name')

    addBtn.addEventListener('click', () => {
        let value = itemName.value;

        if (!value) {
            alert('請輸入項目名稱');
            itemName.focus();
            return;
        }

        console.log(itemName.value)
    });

    itemName.addEventListener('keyup', (e) => {
        if(e.key == 'Enter') {
            let value = itemName.value;

        if (!value) {
            alert('請輸入項目名稱');
            itemName.focus();
            return;
        }

        console.log(itemName.value)
        }
    })
}

init();