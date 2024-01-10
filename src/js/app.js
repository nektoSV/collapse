import Collapse from "./collapse";

const btn = document.querySelector('.btn-collapse');
const container = document.querySelector('.container');

const collapse = new Collapse(btn, container);

collapse.init();