const homeButtonEventHandler = ()=>{
    const forms = document.querySelector('.forms').children;
    position = 0;

    const back = document.querySelector('#back-button');
    back.classList.add('back-button-disabled');
    back.classList.remove('back-button');

    const home = document.querySelector('#home-button');
    home.classList.add('home-button-disabled');
    home.classList.remove('home-button');

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

    processes_cnt = 0;
    processes = [];
    document.querySelector('#processes_number').value = '';
    document.querySelector('#processes_num_submit').disabled = true;

    segments_cnt = 0;
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

    

    blocks = [];
    donnotFit = [];
    document.querySelector('.result').innerHTML = '';
};

document.querySelector('#home-button').addEventListener('click', homeButtonEventHandler);