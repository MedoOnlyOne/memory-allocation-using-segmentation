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

    holes_cnt++;
    

    // show processes number form
    if (holes_cnt === holesNumber){
        memory = [...holes];
        document.querySelector('#holes_submit').disabled = true;
        
        const process_num = document.querySelector('.processes_num');
        const add_holes = document.querySelector('.holes');
        
        add_holes.style = "transform: translateX(-200vw) ;";
        process_num.style = "transform: translateX(-100vw) ;";

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
};

const segmentsNumberHandler = ()=>{
    segmentsNumber = parseInt(document.querySelector('#segments_number').value);
    segments_cnt = 0;
    const process = {
        segmentsNumber: segmentsNumber,
        isHole: false,
        segments: [],
        name: `P${processes_cnt}`,
    };
    processes.push(process);
    document.querySelector('.segments_info').style = "display:block";
};

const segmentFormHandler = e => {
    e.preventDefault();
    const segmentName = (document.querySelector('#segment_name').value);
    const segmentSize = parseInt(document.querySelector('#segment_size').value);
    
    const segment = {
        isHole: false,
        name: segmentName,
        size: segmentSize,
    };
    processes[processes_cnt]['segments'].push(segment);

    document.querySelector('#segment_name').value = '';
    document.querySelector('#segment_size').value = '';

    segments_cnt++;
    

    // show processes number form
    if (segments_cnt === segmentsNumber){
        memory.push(processes[processes_cnt]);
        processes_cnt++;
        document.querySelector('#segmenet_cnt').textContent = 1;
        if (processes_cnt === processNumber){
            const processesArea = document.querySelector('.processes');
            const result = document.querySelector('.results');

            result.style = "transform: translateX(-100vw) ;";
            processesArea.style = "transform: translateX(-200vw) ;";
            
        } else {
            document.querySelector('.segments_info').style = "display:none";
            document.querySelector('#segments_number').value='';
            document.querySelector('#process_cnt').textContent = processes_cnt + 1;
        }

    } else {
        document.querySelector('#segmenet_cnt').textContent = segments_cnt + 1;
    }
    
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
for (let i = 0; i < memoryInputs.length; i++){
    holesInputs[i].addEventListener('input', ()=>{
        const submit = document.querySelector('#holes_submit');
        submit.disabled = (holesInputs[0].value.length == 0) || (holesInputs[1].value.length == 0);
    });
}

