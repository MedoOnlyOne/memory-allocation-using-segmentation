const displayMemory = (processes, holes, memorySize) => {
    const memeoryElement = document.createElement('div');
    firstFit(processes, holes);
    const blocks = [];
    let memory = [...holes];
    for(let process of processes){
        memory = memory.concat(process.segments);
    }
    memory.sort( (a, b) => {
        const x = a.base; const y = b.base;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log(memory);
    let holeCount = 0;
    for(let i = 0; i < memory.length ; i++ ){
        if (i==0){
            if (memory[i].base != 0){
                blocks.push({
                    type:'unknown',
                    base: 0,
                    size: memory[i].base,
                    name: '',
                });
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : memory[i].name,
                })
            }
            else{
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: 0,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : memory[i].name,
                })
            }
        }
        else{
            if (memory[i].base > ( memory[i-1].base + memory[i-1].size )){
                blocks.push({
                    type:'unknown',
                    base: memory[i-1].base + memory[i-1].size,
                    size: memory[i].size,
                    name: '',
                });
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : memory[i].name,
                })
            }
            else{
                blocks.push({
                    type: memory[i].isHole ? 'hole' : 'process',
                    base: memory[i].base,
                    size: memory[i].size,
                    name: memory[i].isHole ? `Hole ${holeCount}` : memory[i].name,
                })
            }
        }
        if (memory[i].isHole)
            holeCount++;
    }
    if (blocks[blocks.length - 1 ].base + blocks[blocks.length - 1 ].size < memorySize ){
        blocks.push({
            type: 'unkown',
            base: blocks[blocks.length - 1 ].base + blocks[blocks.length - 1 ].size,
            size: memorySize - blocks[blocks.length - 1 ].base - blocks[blocks.length - 1 ].size,
            name: '',
        });
    }
    console.log(blocks);
};