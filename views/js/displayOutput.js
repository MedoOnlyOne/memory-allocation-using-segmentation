let blocks = [];
let donnotFit = [];
const calculateMemoryBlocks = (processes, holes, memorySize) => {
    console.log("Holes before");
    console.log(holes);
    console.log("Processes before");
    console.log(processes);
    
    let memory;
    // get the selected algorithm
    const algorithm = parseInt(document.querySelector('#algorithm').value);
    if (algorithm === 1){
        memory = firstFit(processes, holes);
    } else if (algorithm === 2){
        memory = bestFit(processes, holes);
    } else if (algorithm === 3){
        memory = worstFit(processes, holes);
    }
    console.log("Holes after");
    console.log(holes);
    console.log("Processes after");
    console.log(processes);
    
    console.log("Memory");
    console.log(memory);
    // for (let i = 0; i < memory.length; i++){
    //     if (memory[i].base === undefined){
    //         donnotFit.push(memory[i]);
    //         memory.splice(i, 1);
    //         i--;
    //     }
    // }

    // remove don't fit process
    for (let i = 0; i < memory.length; i++){
        if (memory[i]['base'] === undefined){
            donnotFit.push(memory[i]);
            memory.splice(i, 1);
            i--;
            let p = donnotFit[donnotFit.length - 1]['process'];
            for (let j = 0; j < memory.length; j++){
                if (p == memory[j]['process']){
                    if (memory[j]['base'] === undefined){
                        memory.splice(j, 1);
                        j--;
                    } else {
                        for (let k = 0; k < holes.length; k++){
                            if (memory[j]['base'] >= holes[k]['base'] && memory[j]['base'] + memory[j]['size'] <= holes[k]['base'] + holes[k]['size']){
                                memory[j]['isHole'] = true;
                            }
                        }
                    }
                }
            }
        }
    }

    // get coorect hole name
    for(let i = 0; i < memory.length; i++){
        if(memory[i]['isHole']){
            for(let j = 0; j < holes.length; j++){
                if(memory[i]['base'] >= holes[j]['base'] && memory[i]['base'] + memory[i]['size'] <= holes[j]['base'] + holes[j]['size']){
                    memory[i]['name'] = `Hole${j}`;
                }
            }
        }
    }

    // Combine holes with the same name
    for (let i = 0; i < memory.length; i++){
        for (let j = i + 1; j < memory.length; j++){
            if (memory[j]['isHole'] && memory[i]['name'] === memory[j]['name']){
                memory[i].size += memory[j].size;
                memory.splice(j, 1);
                j--;
            } else {
                break;
            }
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
    console.log('Blocks');
    console.log(blocks);    
    return blocks;
};