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
}

function openModal() {
    if (todoForm)
        todoForm.style.display = 'block';
    dropshadow.style.display = 'block';
}

function close(event) {
    if (todoForm)
        todoForm.style.display = 'none';
    dropshadow.style.display = 'none';
    menu.style.display = 'none';
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

