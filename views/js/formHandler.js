const memoryFormHandler = e => {
    e.preventDefault();
    memorySize = parseInt(document.querySelector('#memory_size').value);
    holesNumber = parseInt(document.querySelector('#holes_number').value);

    const p = document.querySelector('p');
    p.textContent = `Memory size = ${memorySize}, holes number = ${holesNumber}`;
    // ipcRenderer.send('memory_holes', holesNumber);
    
    // show add holes form
    const add_holes = document.querySelector('.add_holes');
    add_holes.style = "display:block";
};

const holesFormHandler = e => {
    e.preventDefault();
    const holeBase = parseInt(document.querySelector('#hole_base').value);
    const holeSize = parseInt(document.querySelector('#hole_size').value);
    
    const hole = {
        'base': holeBase,
        'size': holeSize
    };
    holes.push(hole);
    document.querySelector('#hole_base').value = '';
    document.querySelector('#hole_size').value = '';

    cnt++;
    document.querySelector('#hole_num').textContent = cnt + 1;

    // disable any ather submitions from add holes form
    if (cnt === holesNumber){
        document.querySelector('#holes_submit').disabled = true;
        document.querySelector('#holes_header').style = "display:none";
        console.log(holes);
}