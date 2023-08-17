"use strict";

let inputFields = document.querySelectorAll('.input-field input');
let marks = document.querySelectorAll('.input-field div')
let spans = document.querySelectorAll('.input-field span');
let mailformat = /\w+@\w+.\w+/;
let confirm = true;

function validate() {
    inputFields.forEach((ele, index) => {
        if (ele.value === '') {
            spans[index].textContent = `${ele.getAttribute('name')} cannot be empty`;
            ele.classList.add('input-invalid');
            marks[index].classList.replace('disabled-mark', 'mark');
            confirm = false;
        } else if (ele.getAttribute('name') === 'Email') {
            if (!ele.value.match(mailformat)) {
                marks[index].classList.replace('disabled-mark', 'mark');
                ele.classList.add('input-invalid');
                spans[index].textContent = `Looks like this is not an ${ele.getAttribute('name')}`;
                confirm = false;
            } else {
                ele.classList.remove('input-invalid');
                spans[index].textContent = '';
                confirm = true;
                marks[index].classList.replace('mark', 'disabled-mark');
            }
        } else if (ele.getAttribute('name') === 'Password') {
            if (ele.value.length < 8) {
                marks[index].classList.replace('disabled-mark', 'mark');
                ele.classList.add('input-invalid');
                spans[index].textContent = `The ${ele.getAttribute('name')} must be bigger than 8 chars`;
                confirm = false;
            } else {
                ele.classList.remove('input-invalid');
                spans[index].textContent = '';
                confirm = true;
                marks[index].classList.replace('mark', 'disabled-mark');
            }
        } else {
            ele.classList.remove('input-invalid');
            spans[index].textContent = '';
            confirm = true;
            marks[index].classList.replace('mark', 'disabled-mark');
        }
    });
    return confirm;
}
