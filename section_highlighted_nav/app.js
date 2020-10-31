const sections= document.querySelectorAll('section');
const bubble= document.querySelector('.bubble');

const gradients= [
    'linear-gradient(to right, #dd5e89, #f7bb97)',
    'linear-gradient(to right, #d9a7c7, #fffcdc)',

    'linear-gradient(to right, #2bc0e4, #eaecc6)'

]; 

const options= {
    threshold: 0.7 //activate when the section is 70% in view
}

let observer= new IntersectionObserver(navcheck, options); 

function navcheck(entries){

    entries.forEach(entry => {
        //each section is an entry
        const className= entry.target.className; 
        //select the anchor with the matching data-page 
        const activeAchor= document.querySelector(`[data-page=${className}]`)

        //get the data-index attribute of each section
        const gradientIndex= entry.target.getAttribute('data-index');

        //get the coordinates of each active anchor: 
        const coords= activeAchor.getBoundingClientRect();
        const directions= {
            height : coords.height,
            width: coords.width, 
            top: coords.top,
            left: coords.left
        } 
        if(entry.isIntersecting){
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.background= gradients[gradientIndex]; 
            bubble.style.opacity= 1; 
        }

    })
}

sections.forEach(section =>{
    observer.observe(section); 
    //each section is an entry now!
})
