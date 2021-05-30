const memoryFormHandler = e => {
    e.preventDefault();
    memorySize = parseInt(document.querySelector('#memory_size').value);
    holesNumber = parseInt(document.querySelector('#holes_number').value);

    // ipcRenderer.send('memory_holes', holesNumber);
    
    // show add holes form
    const add_holes = document.querySelector('.holes');
    const memory = document.querySelector('.memory');
    
    add_holes.style = "transform: translateX(-100vw) ;";
    memory.style = "transform: translateX(-100vw) ;";
    position++;
};

const holeFormHandler = e => {
    e.preventDefault();
    const holeBase = parseInt(document.querySelector('#hole_base').value);
    const holeSize = parseInt(document.querySelector('#hole_size').value);
    
    const hole = {
        base: holeBase,
        size: holeSize,
        isHole: true,
        name: `Hole${holes_cnt}`,
    };
    holes.push(hole);
    document.querySelector('#hole_base').value = '';
    document.querySelector('#hole_size').value = '';
    document.querySelector('#holes_submit').disabled = true;

    holes_cnt++;
    

    // show processes number form
    if (holes_cnt === holesNumber){
        holes_cnt = 0;
        document.querySelector('#hole_num').textContent = holes_cnt + 1;
        memory = [...holes];
        document.querySelector('#holes_submit').disabled = true;
        
        const process_num = document.querySelector('.processes_num');
        const add_holes = document.querySelector('.holes');
        
        add_holes.style = "transform: translateX(-200vw) ;";
        process_num.style = "transform: translateX(-100vw) ;";
        position++;

    } else {
        document.querySelector('#hole_num').textContent = holes_cnt + 1;
    }
};

const processesNumberFormHandler = e => {
    e.preventDefault();
    processNumber = parseInt(document.querySelector('#processes_number').value);

    const process_num = document.querySelector('.processes_num');
    const processesArea = document.querySelector('.processes');
    
    processesArea.style = "transform: translateX(-100vw) ;";
    process_num.style = "transform: translateX(-200vw) ;";
    position++;
};

const segmentsNumberHandler = ()=>{
    segmentsNumber = parseInt(document.querySelector('#segments_number').value);
    const process = {
        segmentsNumber: segmentsNumber,
        isHole: false,
        segments: [],
        name: `P${processes_cnt}`,
    };
    processes.push(process);
    document.querySelector('#segments_number').disabled = true;
    document.querySelector('#segments_number_submit').disabled = true;
    document.querySelector('#segmenet_cnt').textContent = segments_cnt + 1;
    document.querySelector('.segments_info').style = "display: block";
};

const segmentFormHandler = e => {
    e.preventDefault();
    const segmentName = document.querySelector('#segment_name').value;
    const segmentSize = parseInt(document.querySelector('#segment_size').value);
    
    const segment = {
        isHole: false,
        name: segmentName,
        process: `P${processes_cnt}`,
        size: segmentSize,
    };
    processes[processes_cnt]['segments'].push(segment);

    document.querySelector('#segment_name').value = '';
    document.querySelector('#segment_size').value = '';
    document.querySelector('#segment_submit').disabled = true;
    segments_cnt++;
    

    // show processes number form
    if (segments_cnt === segmentsNumber){
        memory.push(processes[processes_cnt]);
        processes_cnt++;
        segments_cnt = 0;
        document.querySelector('#segmenet_cnt').textContent = segments_cnt + 1;
        document.querySelector('#segments_number').disabled = false;
        if (processes_cnt === processNumber){
            processes_cnt = 0;
            document.querySelector('#process_cnt').textContent = processes_cnt + 1;
            const processesArea = document.querySelector('.processes');
            const select = document.querySelector('.select_algo');

            select.style = "transform: translateX(-100vw) ;";
            processesArea.style = "transform: translateX(-200vw) ;";
            position++;
            
        }
        else {
            document.querySelector('.segments_info').style = "display:none";
            document.querySelector('#segments_number').value='';
            document.querySelector('#process_cnt').textContent = processes_cnt + 1;
        }
    }
    else {
        document.querySelector('#segmenet_cnt').textContent = segments_cnt + 1;
    }
};

const selectAlgoHandler = e => {
    e.preventDefault();
    const result = document.querySelector('.result');
    const select = document.querySelector('.select_algo');
    result.style = "transform: translateX(-100vw) ;";
    select.style = "transform: translateX(-200vw) ;";
    position++;
    drawMemory(calculateMemoryBlocks(processes, holes, memorySize));
    deallocate(blocks);
};

// Enable buttons
// memory button
const memoryInputs = document.querySelector('#main_form').querySelectorAll('input');
for (let i = 0; i < memoryInputs.length; i++){
    memoryInputs[i].addEventListener('input', ()=>{
        const submit = document.querySelector('#memory_submit');
        submit.disabled = (memoryInputs[0].value.length == 0) || (memoryInputs[1].value.length == 0);
    });
}

// holes button
const holesInputs = document.querySelector('#add_holes').querySelectorAll('input');
for (let i = 0; i < holesInputs.length; i++){
    holesInputs[i].addEventListener('input', ()=>{
        const submit = document.querySelector('#holes_submit');
        submit.disabled = (holesInputs[0].value.length == 0) || (holesInputs[1].value.length == 0);
    });
}

// processes number button
const processesNumberInput = document.querySelector('#processes_num').querySelectorAll('input');
for (let i = 0; i < processesNumberInput.length; i++){
    processesNumberInput[i].addEventListener('input', ()=>{
        const submit = document.querySelector('#processes_num_submit');
        submit.disabled = (processesNumberInput[0].value.length == 0);
    });
}

// processes info
const segments_Number_Input = document.querySelector('#segments_number');
segments_Number_Input.addEventListener('input', ()=>{
    const submit = document.querySelector('#segments_number_submit');
    submit.disabled = (segments_Number_Input.value.length == 0);
});
const segment_name_Input = document.querySelector('#segment_name');
const segment_size_Input = document.querySelector('#segment_size');
const segment_Input = [segment_name_Input, segment_size_Input];
for (let i = 0; i < segment_Input.length; i++){
    segment_Input[i].addEventListener('input', ()=>{
        const submit = document.querySelector('#segment_submit');
        submit.disabled = (segment_Input[0].value.length == 0) || (segment_Input[1].value.length == 0);
    });
}