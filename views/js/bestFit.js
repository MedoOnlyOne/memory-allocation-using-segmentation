const bestFit = (processes, holes) => {
    let processesWork = JSON.parse(JSON.stringify(processes));
    let holesWork = JSON.parse(JSON.stringify(holes));
    
    for( process of processesWork ){
        for(segment of process.segments){
            let best = '';
            for( hole of holesWork ){
                if (hole.size >= segment.size ){
                    if (best == ''){
                        best = hole.name;
                    } else {
                        for (h of holesWork){
                            if (h.name == best){
                                if (hole.size < h.size){
                                    best = hole.name;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            for(hole of holesWork){
                if (hole.name == best){
                    segment.base = hole.base;
                    hole.size -= segment.size;
                    hole.base +=  segment.size;
                    break;
                }
            }
        }
    }

    let memory = JSON.parse(JSON.stringify(holesWork));
    for(let process of processesWork){
        memory = memory.concat(process.segments);
    }
    memory.sort( (a, b) => {
        const x = a.base; const y = b.base;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return memory;
}