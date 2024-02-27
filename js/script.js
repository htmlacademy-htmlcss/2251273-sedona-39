// я устал вручную добавлять класс, удалю перед сдачей
let page_header_button = document.querySelector(".page-header-button");
let modal_container = document.querySelector(".modal-container");
let modal_button_close = document.querySelector(".modal-button-close");

page_header_button.onclick = function() {
  console.log('Кнопка нажата!');
  modal_container.classList.toggle("modal-container-closed");
};

modal_button_close.onclick = function() {
  console.log('Кнопка нажата!');
  modal_container.classList.toggle("modal-container-closed");
};
