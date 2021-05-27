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
    };
    holes.push(hole);
    document.querySelector('#hole_base').value = '';
    document.querySelector('#hole_size').value = '';

    holes_cnt++;
    

    // show processes number form
    if (holes_cnt === holesNumber){
        memeory = [...holes];
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
    const processes = document.querySelector('.processes');
    
    processes.style = "transform: translateX(-100vw) ;";
    process_num.style = "transform: translateX(-200vw) ;";
};