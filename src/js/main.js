"use strict";


const btnSave = document.querySelector(".btn--save");
const btnLoad = document.querySelector(".btn--load");
const btnDelete = document.querySelector(".btn--delete");
const btnRefresh = document.querySelector(".btn--refresh");
const textarea = document.querySelector(".textarea");

btnSave.addEventListener("click", () => {
  localStorage.setItem("textareaValue", textarea.value);
});

btnLoad.addEventListener("click", () => {
  const textareaValue = localStorage.getItem("textareaValue");
  textarea.value = textareaValue;
});

btnDelete.addEventListener("click", () => {
  localStorage.removeItem("textareaValue");
});

btnRefresh.addEventListener("click", () => {
  document.location.reload();
});