const forms = document.querySelector('.forms').children
const stopResponsiveTransition = () =>{
    let timer = null;
    window.addEventListener('resize', function () {
    if (timer){
        clearTimeout(timer);
        timer = null;
    }
    else {
        for( form of forms )
            form.classList.add('stop-transition');
    }
    timer = setTimeout(() => {
        for( form of forms )
            form.classList.remove('stop-transition');
        timer = null;
        }, 200);
    })
};
stopResponsiveTransition();