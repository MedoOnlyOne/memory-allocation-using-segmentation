const bestFit = (processes, holes) => {
    for( process of processes ){
        for(segment of process.segments){
            let best = '';
            for( hole of holes ){
                if (hole.size >= segment.size ){
                    if (best == ''){
                        best = hole.name;
                    } else {
                        for (h of holes){
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
            for(hole of holes){
                if (hole.name == best){
                    segment.base = hole.base;
                    hole.size -= segment.size;
                    hole.base +=  segment.size;
                    break;
                }
            }
        }
    }
}