window.addEventListener('scroll', ()=>{
    const header= document.querySelector('nav');
    const logo= document.querySelector('nav .logo')

    if(window.pageYOffset > 50){
        logo.style.fontSize= "5rem";
        header.style.background= "#fff";
    }else{
        logo.style.fontSize="9rem";
        header.style.background= "#dbdbdb";


    }

})



    
