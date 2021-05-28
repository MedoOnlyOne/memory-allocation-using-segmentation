const electron = require("electron");
const { ipcRenderer } = electron;

let memory, processNumber, holesNumber, memorySize, segmentsNumber;
let holes = []; // array of objects each object has a base and size
let processes = []; // array of objects each object has a sgmentsNumber, sgmentsNumber arrays of objects contains segmentName, segmentSize

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