const electron = require("electron");
const { ipcRenderer } = electron;

let memory;
let processNumber;
let holesNumber, memorySize;
let holes = []; // array of objects each object has a base and size

// get the memory size and holes number
const mainForm = document.querySelector('#main_form');
mainForm.addEventListener('submit', memoryFormHandler);

// get the holes base and size
let holes_cnt = 0;
const holesForm = document.querySelector('#add_holes');
holesForm.addEventListener('submit', holeFormHandler);

// get processes number
let processes_cnt = 0
const processesNumberForm = document.querySelector('#processes_num');
processesNumberForm.addEventListener('submit', processesNumberFormHandler);

// get processes info