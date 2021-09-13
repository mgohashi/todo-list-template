let menuButton = document.querySelector(".header-nav-menu");
let dropshadow = document.querySelector(".dropshadow");
let menu = document.querySelector(".menu");
let todoForm = document.querySelector(".todo-form");
let cancelButton = document.querySelector("#btn-cancel");
let saveButton = document.querySelector("#btn-save");
let actionsAddButton = document.querySelector("#actions-add");

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