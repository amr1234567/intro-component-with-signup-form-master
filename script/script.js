"use strict";

let inputFields = document.querySelectorAll('.input-field input');
let containersOfInputFields = document.querySelectorAll('.input-field');
let marks = document.querySelectorAll('.input-field div')
let mailformat = /\w+@\w+.\w+/;
let confirm = true;

function validate() {
    let i = 0;
    inputFields.forEach((ele, index) => {
        if (ele.value === '') {
            if (!containersOfInputFields[index].children[2] && i < 4) {
                let spanEle = document.createElement('div');
                spanEle.className = 'div-invalid-text';
                let text = document.createTextNode(`${ele.getAttribute('name')} cannot be empty`)
                spanEle.appendChild(text);
                containersOfInputFields[index].appendChild(spanEle);
                i++;
            }
            ele.classList.add('input-invalid');
            marks[index].classList.replace('disabled-mark', 'mark');
            confirm = false;
        } else if (ele.getAttribute('name') === 'Email') {
            if (!ele.value.match(mailformat)) {
                let spanEle = document.createElement('div');
                spanEle.className = 'div-invalid-text';
                let text = document.createTextNode(`Looks like this is not an ${ele.getAttribute('name')}`)
                spanEle.appendChild(text);
                containersOfInputFields[index].appendChild(spanEle);
                marks[index].classList.replace('disabled-mark', 'mark');
                ele.classList.add('input-invalid');
                confirm = false;
            } else {
                ele.classList.remove('input-invalid');
                document.querySelectorAll('.div-invalid-text').forEach((ele) => ele.remove());
                marks.forEach((ele) => ele.classList.replace('mark', 'disabled-mark'));
                confirm = true;
            }
        } else if (ele.getAttribute('name') === 'Password') {
            if (ele.value.length < 8) {
                let spanEle = document.createElement('div');
                spanEle.className = 'div-invalid-text';
                let text = document.createTextNode(`The ${ele.getAttribute('name')} must be bigger than 8 chars`)
                spanEle.appendChild(text);
                containersOfInputFields[index].appendChild(spanEle);
                marks[index].classList.replace('disabled-mark', 'mark');
                ele.classList.add('input-invalid');
                confirm = false;
            } else {
                ele.classList.remove('input-invalid');
                document.querySelectorAll('.div-invalid-text').forEach((ele) => ele.remove());
                marks.forEach((ele) => ele.classList.replace('mark', 'disabled-mark'));
                confirm = true;
            }
        } else {
            ele.classList.remove('input-invalid');
            document.querySelectorAll('.div-invalid-text').forEach((ele) => ele.remove());
            marks.forEach((ele) => ele.classList.replace('mark', 'disabled-mark'));
            confirm = true;
        }
    });
    return confirm;
}




inputFields.forEach((ele, index) => {
    ele.onfocus = () => {
        marks[index].classList.replace('mark', 'disabled-mark');
    };
    ele.addEventListener('blur', () => {
        if (!ele.value) {
            marks[index].classList.replace('disabled-mark', 'mark');
        }
    })
});



/*

"use strict";

let inputFields = document.querySelectorAll('.input-field input');
let containersOfInputFields = document.querySelectorAll('.input-field');
let marks = document.querySelectorAll('.input-field div')
let mailformat = /\w+@\w+.\w+/;
let confirm = true;

function validate() {
    let i = 0;
    inputFields.forEach((ele, index) => {
        if (ele.value === '') {
            if (!containersOfInputFields[index].children[2] && i < 4) {
                let text = `${ele.getAttribute('name')} cannot be empty`;
                createSpan(text);
                i++;
            }
            invalidFun();
            confirm = false;
        } else if (ele.getAttribute('name') === 'Email') {
            if (!ele.value.match(mailformat)) {
                let text = `Looks like this is not an ${ele.getAttribute('name')}`;
                createSpan(text);
                invalidFun();
                confirm = false;
            } else {
                validInput();
                confirm = true;
            }
        } else if (ele.getAttribute('name') === 'Password') {
            if (ele.value.length < 8) {
                let text = `The ${ele.getAttribute('name')} must be bigger than 8 chars`;
                createSpan(text);
                invalidFun();
                confirm = false;
            } else {
                validInput();
                confirm = true;
            }
        } else {
            validInput();
            confirm = true;
        }
    });
    return confirm;
}



// functions for validation



let createSpan = function (message) {
    let spanEle = document.createElement('div');
    spanEle.className = 'div-invalid-text';
    let text = document.createTextNode(message)
    spanEle.appendChild(text);
    containersOfInputFields[index].appendChild(spanEle);
}

let invalidFun = function () {
    ele.classList.add('input-invalid');
    marks[index].classList.replace('disabled-mark', 'mark');
    confirm = false;
}

let validInput = () => {
    ele.classList.remove('input-invalid');
    document.querySelectorAll('.div-invalid-text').forEach((ele) => ele.remove());
    marks.forEach((ele) => ele.classList.replace('mark', 'disabled-mark'));
    
}


// listeners


inputFields.forEach((ele, index) => {
    ele.onfocus = () => {
        marks[index].classList.replace('mark', 'disabled-mark');
    };
    ele.addEventListener('blur', () => {
        if (!ele.value) {
            marks[index].classList.replace('disabled-mark', 'mark');
        }
    })
});



*/