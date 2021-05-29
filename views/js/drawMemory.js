drawMemory = blocks => {
    const memoryElement = document.createElement('div');
    memoryElement.classList.add('memory-output');
    const blockElements = [];
    let totalSize = 0;
    for ( block of blocks ){
        totalSize += block.size;
    }
    for ( block of blocks ){
        if (totalSize <= 500){
            const blockElement = document.createElement('div');
            blockElement.classList.add('memory-block');
            blockElement.style = `height: ${block.size}px;`
            blockElement.textContent = block.name;
            blockElements.push(blockElement);
        }
        else{
            const blockElement = document.createElement('div');
            blockElement.classList.add('memory-block');
            blockElement.style = `height: ${block.size*500/totalSize}px;`
            blockElement.textContent = block.name;
            blockElements.push(blockElement);
        }
    }
    for ( blockElement of blockElements ){
        memoryElement.appendChild(blockElement);
    }
    document.querySelector('.result').appendChild(memoryElement);
}
