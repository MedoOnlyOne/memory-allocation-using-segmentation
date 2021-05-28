const firstFit = (processes, holes) => {
    for( process of processes ){
        for(segment of process.segments){
            for( hole of holes ){
                if (hole.size >= segment.size ){
                    segment.base = hole.base;
                    hole.size -= segment.size;
                    hole.base +=  segment.size;
                    break;
                }
            }
        }
    }
}