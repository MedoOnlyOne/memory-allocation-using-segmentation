const deallocate = blocks =>{
    let memoryBlocks = document.querySelectorAll('.memory-block');
    for (let i = 0; i < memoryBlocks.length; i++){
        memoryBlocks[i].addEventListener('dblclick', ()=>{
            let target = memoryBlocks[i].querySelector('.block-content').textContent;
            let targetSize = memoryBlocks[i].querySelector('.memory-size-bottom').textContent;
            if (target == "Old Process" || target[target.length - 1] == ")"){
                // Convert to hole
                let process_Num;
                if (target[target.length - 1] == ")"){
                        for (let k = 0; k < target.length; k++){
                            if (target[k] == "("){
                                process_Num = target.slice(k);
                                break;
                            }
                        }
                }
                for (let j = 0; j < blocks.length; j++){
                    if (target == "Old Process" && blocks[j].base + blocks[j].size == targetSize){
                        blocks[j].type = "hole";
                        break;
                    } else if (target[target.length - 1] == ")" && blocks[j].type == "process"){
                        let blockName = blocks[j].name;
                        let tempNum;
                        for (let k = 0; k < blockName.length; k++){
                            if (blockName[k] == "("){
                                tempNum = blockName.slice(k);
                                break;
                            }
                        }
                        if (tempNum == process_Num){
                            blocks[j].type = "hole";
                        }
                    }
                }
                // Combine holes
                let holeCnt = 0;
                for (let j = 0; j < blocks.length; j++){
                    if (blocks[j].type == "hole"){
                        blocks[j].name = `Hole ${holeCnt}`;
                        holeCnt++;
                        for (let k = j + 1; k < blocks.length; k++){
                            if (blocks[k].type == 'hole'){
                                blocks[j].size += blocks[k].size;
                                blocks.splice(k, 1);
                                k--;
                            } else {
                                break;
                            }
                        }
                    }
                }
                document.querySelector('.memory-output').remove();
                drawMemory(blocks);
                deallocate(blocks);
            }
        });
    }
};
