let numbers = document.querySelectorAll('.rating div');
let value = document.querySelector('clicked-number');

numbers.forEach((element, index, arr) => {
    element.addEventListener('click', () => {
        arr.forEach((ele) => {
            ele.classList.replace('clicked-number', 'number');
        });
        element.classList.replace('number', 'clicked-number');
    })
})

function validate() {
    let value = document.querySelector('.clicked-number');
    if (value == null) {
        alert("please choose the rate");
        return false;
    }else{
        localStorage.setItem('myValue', value.textContent);
        return true;
    }
}


