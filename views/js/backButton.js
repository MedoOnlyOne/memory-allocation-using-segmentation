const backButtonEventHandler = () => {
    const forms = document.querySelector('.forms').children;
    position--;
    processes_cnt = 0;
    segments_cnt = 0;
    holes_cnt = 0;
    if (position <= 1){
        holes = [];
    }
    if (position <= 3){
        processes=[];
    }
    document.querySelector('#segments_number').disabled = false;
    document.querySelector('#segments_number_submit').disabled = false;
    document.querySelector('.segments_info').style = "display: none";
    document.querySelector('#process_cnt').textContent = processes_cnt + 1;
    if (position === -1)
        position = 0;
    if (position===0){
        for (let i=0; i<forms.length;i++)
            forms[i].style='';
    }
    else{
        forms[0].style='transform: translateX(-100vw);'   
        for (let i=1; i<=position;i++){
            if (i===position)    
                forms[i].style='transform: translateX(-100vw);';
            else
                forms[i].style='transform: translateX(-200vw);';
        }
        for(let i = position + 1; i<forms.length; i++) 
            forms[i].style='';
    }
}

document.querySelector('.back-button').addEventListener('click', backButtonEventHandler);