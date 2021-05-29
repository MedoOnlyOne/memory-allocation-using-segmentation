const displayMemory = (processes, holes) => {
    const memeoryElement = document.createElement('div');
    const blocks = [];
    firstFit(processes, holes);
    const memory = [...processes];
    memory.appe
    for( block of memory ){
        blocks.push({
            base: block.base,
            limit: limit.base        
        })
    }
};