drawMemory = blocks => {
    const memoryElement = document.createElement('div');
    memoryElement.classList.add('memory-output');
    const blockElements = [];
    // let totalSize = 0;
    // for ( block of blocks ){
    //     totalSize += block.size;
    // }
    let totalSize = parseInt(document.querySelector('#memory_size').value);
    if (blocks.length > 0){
        const deallocate = document.createElement('h1');
        deallocate.classList.add('header');
        deallocate.classList.add('result');
        deallocate.textContent = "Double click to deAllocate";
        memoryElement.appendChild(deallocate);
    }
    for ( let i = 0; i < blocks.length; i++ ){
        const blockElement = document.createElement('div');
        blockElement.classList.add('memory-block');
        if (blocks[i].type === "process"){
            blockElement.classList.add('process');
        } else if (blocks[i].type === "hole"){
            blockElement.classList.add('hole');
        } else {
            blockElement.classList.add('old-process');
        }
        if (totalSize <= 500){
            blockElement.style = `height: ${blocks[i].size}px;`
        }
        else{
            blockElement.style = `height: ${blocks[i].size*500/totalSize}px;`
        }
        const blockContent = document.createElement('h2');
        blockContent.textContent = blocks[i].name;
        blockContent.classList.add('block-content');
        blockElement.appendChild(blockContent);
        blockElements.push(blockElement);
        if (i == 0){
            const top = document.createElement('span');
            top.textContent = 0;
            top.classList.add('memory-size-top');
            blockElement.appendChild(top);
            const bottom = document.createElement('span');
            bottom.textContent = `${blocks[0].size}`;
            bottom.classList.add('memory-size-bottom');
            blockElement.appendChild(bottom);
        } else {
            const bottom = document.createElement('span');
            let bottom_ans = blocks[i].base + blocks[i].size;
            bottom.textContent = `${bottom_ans}`;
            bottom.classList.add('memory-size-bottom');
            blockElement.appendChild(bottom);
        }
    }
    for ( blockElement of blockElements ){
        memoryElement.appendChild(blockElement);
    }
    document.querySelector('.result').appendChild(memoryElement);

    // craete warning section
    let test = document.querySelector('.memory-warning');
    if (donnotFit.length > 0 && test === null){
        const memoryWarning = document.createElement('div');
        memoryWarning.classList.add('memory-warning');
        for (let i = 0; i < donnotFit.length; i++){
            let warningName = donnotFit[i].name;
            let warningProcess = donnotFit[i].process;
            let warningSize = donnotFit[i].size;

            const warning = document.createElement('p');
            warning.classList.add('warning-p');
            warning.textContent = `Can't allocate ${warningProcess}, segment: ${warningName}, of size: ${warningSize}`;
            memoryWarning.appendChild(warning);
        }
        document.querySelector('.result').appendChild(memoryWarning);
    }
}
