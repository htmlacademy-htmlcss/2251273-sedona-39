let header_button = document.querySelector(".header-button");
let modal_container = document.querySelector(".modal-container");
let modal_button_close = document.querySelector(".modal-button-close");


header_button.onclick = () => modal_container.classList.toggle("modal-container-closed");
modal_button_close.onclick = () => modal_container.classList.toggle("modal-container-closed");
