const li= document.querySelectorAll('li'); 
const underline= document.querySelector(".underline"); 
li.forEach(item=>{
    item.addEventListener('click', function(){
        const coords= item.getBoundingClientRect();
        const width= coords.width; 
        const left= coords.left; 
        const bottom= coords.bottom -3; 


        underline.style.width= `${width}px`; 
        underline.style.left= `${left}px`; 
        underline.style.top= `${bottom}px`; 
        console.log(bottom); 
        
    })
})