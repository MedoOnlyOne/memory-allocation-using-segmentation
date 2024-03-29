const electron = require("electron");
const { ipcRenderer } = electron;
const anime = require('animejs');
let memory, processNumber, holesNumber, memorySize, segmentsNumber;
let holes = []; // array of objects each object has a base and size
let processes = []; // array of objects each object has a sgmentsNumber, sgmentsNumber arrays of objects contains segmentName, segmentSize
let position = 0;
anime({
    targets: 'button',
    duration: 3000,
    backgroundColor: ['#388f3f','#1d7a66'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
});
// get the memory size and holes number
const mainForm = document.querySelector('#main_form');
mainForm.addEventListener('submit', memoryFormHandler);

// get the holes base and size
let holes_cnt = 0;
const holesForm = document.querySelector('#add_holes');
holesForm.addEventListener('submit', holeFormHandler);

// get processes number
let processes_cnt = 0, segments_cnt = 0;
const processesNumberForm = document.querySelector('#processes_num');
processesNumberForm.addEventListener('submit', processesNumberFormHandler);

// get processes info
const segmentsNumberInput = document.querySelector('#segments_number_submit');
segmentsNumberInput.addEventListener('click', segmentsNumberHandler);

// get processes info
const segments = document.querySelector('#processes');
segments.addEventListener('submit', segmentFormHandler);

// select algo
const algo = document.querySelector('#algo_select');
algo.addEventListener('submit', selectAlgoHandler);