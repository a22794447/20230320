let uid = document.querySelector('#uid');
let doing = document.querySelector('#doing');

doing.addEventListener('click', () => {
    uid.style.color = 'green';
    uid.style.fontSize = '50px';
    uid.style.backgroundColor = 'black';
    uid.style.margin = '10px auto';
    uid.style.textAlign = 'center';
})

let addClass = document.querySelector('#add-class');

addClass.addEventListener('click', () => {
    uid.classList.add('active');
})

let removeClass = document.querySelector('#remove-class');

removeClass.addEventListener('click', () => {
    uid.classList.remove('active');
})

let mobileIcon = document.querySelector('#mobile-icon');


mobileIcon.addEventListener('click', () => {
    if (mobileIcon.classList.contains('active')) {
        mobileIcon.classList.remove('active');
    } else {
        mobileIcon.classList.add('active');
    }
});