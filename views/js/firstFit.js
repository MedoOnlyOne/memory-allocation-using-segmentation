const firstFit = (processes, holes) => {
    let processesWork = JSON.parse(JSON.stringify(processes));
    let holesWork = JSON.parse(JSON.stringify(holes));

    for( process of processesWork ){
        for( segment of process.segments ){
            for( hole of holesWork ){
                if ( hole.size >= segment.size ){
                    console.log(`Before: ${segment}`);
                    segment.base = hole.base;
                    hole.size -= segment.size;
                    hole.base +=  segment.size;
                    console.log(`After: ${segment}`);
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