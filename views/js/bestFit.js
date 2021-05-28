const bestFit = (processes, holes) => {
    for( process of processes ){
        let best = [];
        for(segment of process.segments){
            for( hole of holes ){
                if (hole.size >= segment.size ){
                    best.push(hole);
                }
            }
            best.sort( (a, b) => {
                const x = a.size; const y = b.size;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
            for(hole of holes){
                if (hole === best[0]){
                    segment.base = hole.base;
                    hole.size -= segment.size;
                    hole.base +=  segment.size;
                    break;
                }
            }
        }
    }
}