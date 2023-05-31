// alert('todo');

const init = () => {
    let addBtn = document.querySelector('#add-btn');
    let itemName = document.querySelector('#item-name')

    
        // 新增項目收納
    const doAddItem = () => {
        let value = itemName.value;

        if (!value) {
            alert('請輸入項目名稱');
            itemName.focus();
            return;
        }
    
            console.log(value)   
        }
    addBtn.addEventListener('click', () => {
        doAddItem();
    })

    itemName.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            doAddItem();
        }
    })
}

init();