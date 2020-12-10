window.addEventListener('scroll', ()=>{
    const nav= document.querySelector('.default-nav');

    if(window.pageYOffset > 50){
        nav.classList.add('scroll-nav');

    }else{
        nav.classList.remove('scroll-nav');
    }
}); 



    
