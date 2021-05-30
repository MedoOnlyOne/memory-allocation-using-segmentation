const blocks = [];
let donnotFit = [];
const calculateMemoryBlocks = (processes, holes, memorySize) => {
    // get the selected algorithm
    const algorithm = parseInt(document.querySelector('#algorithm').value);
    if (algorithm === 1){
        firstFit(processes, holes);
    } 
    else if (algorithm === 2){
        bestFit(processes, holes);
    }
    console.log(processes);
    // const blocks = [];
    let memory = [...holes];
    for(let process of processes){
        memory = memory.concat(process.segments);
    }
    memory.sort( (a, b) => {
        const x = a.base; const y = b.base;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log("Memory");
    console.log(memory);
    for (let i = 0; i < memory.length; i++){
        if (memory[i].base === undefined){
            donnotFit.push(memory[i]);
            memory.splice(i, 1);
            i--;
        }
    }
    let holeCount = 0;
    for(let i = 0; i < memory.length ; i++ ){
        if (i==0){
            if (memory[i].base != 0){
                blocks.push({
                    type:'unknown',
                    base: 0,
                    size: memory[i].base,
                    name: 'Old Process',
                });
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : `${memory[i].name} (${memory[i].process})`,
                });
            }
            else{
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: 0,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : `${memory[i].name} (${memory[i].process})`,
                });
            }
        }
        else{
            if (memory[i].base > ( memory[i-1].base + memory[i-1].size )){
                blocks.push({
                    type:'unknown',
                    base: memory[i-1].base + memory[i-1].size,
                    size: memory[i].base - ( memory[i-1].base + memory[i-1].size ),
                    name: 'Old Process',
                });
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : `${memory[i].name} (${memory[i].process})`,
                });
            }
            else{
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : `${memory[i].name} (${memory[i].process})`,
                });
            }
        }
        if (memory[i].isHole)
            holeCount++;
    }
    if (blocks[blocks.length - 1 ].base + blocks[blocks.length - 1 ].size < memorySize ){
        blocks.push({
            type: 'unknown',
            base: blocks[blocks.length - 1 ].base + blocks[blocks.length - 1 ].size,
            size: memorySize - blocks[blocks.length - 1 ].base - blocks[blocks.length - 1 ].size,
            name: 'Old Process',
        });
    }
    blocks.sort( (a, b) => {
        const x = a.base; const y = b.base;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log(blocks);    
    return blocks;
};