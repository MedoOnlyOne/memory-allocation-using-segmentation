const backButtonEventHandler = () => {
    const forms = document.querySelector('.forms').children;
    position--;
    
    if (position <= 0){
        if (position === -1){
            position = 0;
        } 
        if (position === 0){
            const back = document.querySelector('#back-button');
            back.classList.add('back-button-disabled');
            back.classList.remove('back-button');
            for (let i=0; i<forms.length;i++)
                forms[i].style='';

            document.querySelector('#memory_size').value = '';
            document.querySelector('#holes_number').value = '';
            document.querySelector('#memory_submit').disabled = true;

            holes_cnt = 0;
            holes = [];
            document.querySelector('#hole_num').textContent = holes_cnt;
            document.querySelector('#hole_base').value = '';
            document.querySelector('#hole_size').value = '';
            document.querySelector('#holes_submit').disabled = true;
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
                holes_cnt = 0;
                holes = [];
                document.querySelector('#hole_num').textContent = holes_cnt;
                document.querySelector('#hole_base').value = '';
                document.querySelector('#hole_size').value = '';
                document.querySelector('#holes_submit').disabled = true;

                processes_cnt = 0;
                processes = [];
                document.querySelector('#processes_number').value = '';
                document.querySelector('#processes_num_submit').disabled = true;
            } else if (position === 2){
            segments_cnt = 0;
            processes_cnt = 0;
            processes = [];

            document.querySelector('#process_cnt').textContent = processes_cnt;
            document.querySelector('#processes_number').value = '';
            document.querySelector('#processes_num_submit').disabled = true;
            
            document.querySelector('#process_cnt').textContent = processes_cnt;
            document.querySelector('#segmenet_cnt').textContent = segments_cnt;
            document.querySelector('#segments_number').disabled = false;
            document.querySelector('#segments_number').value = '';
            document.querySelector('#segments_number_submit').disabled = true;
            document.querySelector('.segments_info').style = "display: none";
            document.querySelector('#segment_name').value = '';
            document.querySelector('#segment_size').value = '';
            document.querySelector('#segment_submit').disabled = true;
        } else if (position === 3){
            segments_cnt = 0;
            processes_cnt = 0;
            processes = [];
            document.querySelector('#process_cnt').textContent = processes_cnt;
            document.querySelector('#segmenet_cnt').textContent = segments_cnt;
            document.querySelector('#segments_number').disabled = false;
            document.querySelector('#segments_number').value = '';
            document.querySelector('#segments_number_submit').disabled = true;
            document.querySelector('.segments_info').style = "display: none";
            document.querySelector('#segment_name').value = '';
            document.querySelector('#segment_size').value = '';
            document.querySelector('#segment_submit').disabled = true;
        } else if (position === 4) {
            blocks = [];
            donnotFit = [];
            document.querySelector('.result').innerHTML = '';
        }
    }
}

document.querySelector('#back-button').addEventListener('click', backButtonEventHandler);