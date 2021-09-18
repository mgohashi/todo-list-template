let menuButton = document.querySelector(".header-nav-menu");
let dropshadow = document.querySelector(".dropshadow");
let menu = document.querySelector(".menu");
let todoForm = document.querySelector(".todo-form");
let cancelButton = document.querySelector("#btn-cancel");
let saveButton = document.querySelector("#btn-save");
let actionsAddButton = document.querySelector("#actions-add");
let checkboxList = document.querySelectorAll(".item-checkbox");
let actionsSubmenuButton = document.querySelector("#actions-submenu");

function openMenu() {
    menu.style.display = 'block';
    dropshadow.style.display = 'block';
    setTimeout(() => {
        menu.classList.add('open');
        dropshadow.classList.add('open');
    }, 100);
}

function openModal() {
    dropshadow.style.display = 'block';
    todoForm.style.display = 'block';
    setTimeout(() => {
        dropshadow.classList.add('open');
        todoForm.classList.add('open');
    }, 100);
}

function close(event) {
    menu.classList.remove('open');
    if (todoForm)
        todoForm.classList.remove('open');
    dropshadow.classList.remove('open');
    setTimeout(() => {
        dropshadow.style.display = 'none';
        menu.style.display = 'none';
        if (todoForm)
            todoForm.style.display = 'none';
    }, 300);
}

if (dropshadow) {
    dropshadow.addEventListener("click", event => {
        close(event);
    });
}

if (menuButton) {
    menuButton.addEventListener("click", event => {
        openMenu();
    });
}

if (cancelButton) {
    cancelButton.addEventListener("click", event => {
        close(event);
    });
}

if (saveButton) {
    saveButton.addEventListener("click", event => {
        close(event);
    });
}

if (actionsAddButton) {
    actionsAddButton.addEventListener("click", event => {
        openModal();
    });
}

var selected = []

for (var i=0; i < checkboxList.length ; i++) {
    checkboxList[i].addEventListener("click", event => {
        let div = event.target.closest('.item');
        div.classList.toggle("selected");

        if (event.target.checked)
            selected.push(event.target);
        else
            selected.splice(selected.indexOf(event.target));

        if (selected.length > 0) {
            actionsSubmenuButton.style.display = 'block';
            actionsAddButton.style.display = 'none';
        } else {
            actionsAddButton.style.display = 'block';
            actionsSubmenuButton.style.display = 'none';
        }
    });
}

function login() {
    window.location.replace('/todo-list.html');
}