const preventTabbing = e =>{
    if (e.keyCode === 9)
        e.preventDefault(); 
}
inputs = document.querySelectorAll('input');
for( input of inputs ){
    input.addEventListener('keydown', preventTabbing);
}
