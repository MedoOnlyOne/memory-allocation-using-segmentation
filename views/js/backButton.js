const backButtonEventHandler = () => {
    const forms = document.querySelector('.forms').children;
    position--;
    
    if (position <= 0){
        if (position === -1){
            position = 0;
        } 
        if (position === 0){
            holes_cnt = 0;
            holes = [];
            document.querySelector('#hole_num').textContent = holes_cnt;
            const back = document.querySelector('#back-button');
            back.classList.add('back-button-disabled');
            back.classList.remove('back-button');
            for (let i=0; i<forms.length;i++)
                forms[i].style='';
        }    
    } else {
        forms[0].style='transform: translateX(-100vw);'   
        for (let i=1; i<=position;i++){
            if (i===position)    
                forms[i].style='transform: translateX(-100vw);';
            else
                forms[i].style='transform: translateX(-200vw);';
        }
        for(let i = position + 1; i<forms.length; i++) 
            forms[i].style='';
        
        if (position === 1){
            processes_cnt = 0;
            document.querySelector('#process_cnt').textContent = processes_cnt;
        } else if (position === 2){
            segments_cnt = 0;
            processes_cnt = 0;
            processes = [];
            document.querySelector('#process_cnt').textContent = processes_cnt;
            document.querySelector('#segmenet_cnt').textContent = segments_cnt;
            document.querySelector('#segments_number').disabled = false;
            document.querySelector('#segments_number_submit').disabled = false;
            document.querySelector('.segments_info').style = "display: none";
        } else if (position === 3){
    
        } else if (position === 4) {
            blocks = [];
            let resultChildren = document.querySelector('.result');
            while (resultChildren.hasChildNodes()) {  
                resultChildren.removeChild(resultChildren.firstChild);
              }
        }
    }



    // if (position <= 1){
    //     holes = [];
    // }
    // if (position <= 3){
    //     processes=[];
    // }
    // document.querySelector('#segments_number').disabled = false;
    // document.querySelector('#segments_number_submit').disabled = false;
    // document.querySelector('.segments_info').style = "display: none";
    // document.querySelector('#process_cnt').textContent = processes_cnt + 1;
    // if (position === -1)
    //     position = 0;
    // if (position===0){
    //     const back = document.querySelector('#back-button');
    //     back.classList.add('back-button-disabled');
    //     back.classList.remove('back-button');
    //     for (let i=0; i<forms.length;i++)
    //         forms[i].style='';
    // }
    // else{
    //     forms[0].style='transform: translateX(-100vw);'   
    //     for (let i=1; i<=position;i++){
    //         if (i===position)    
    //             forms[i].style='transform: translateX(-100vw);';
    //         else
    //             forms[i].style='transform: translateX(-200vw);';
    //     }
    //     for(let i = position + 1; i<forms.length; i++) 
    //         forms[i].style='';
    // }
}

document.querySelector('#back-button').addEventListener('click', backButtonEventHandler);