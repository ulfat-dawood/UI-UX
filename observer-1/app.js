const section1 = document.querySelector("#section-2"); 

const callback = (entries, observer)=>{
    entries.forEach(entry => {
        console.log(entry.target.id, "is intersecting? ", entry.isIntersecting);
        if(entry.isIntersecting==true){
            section1.classList.add("inverse")
        }else if(entry.isIntersecting==false){
            section1.classList.remove("inverse")
        }
    });
} 
const options = {
    //root is by def the  viewport, so don't change it
    root: null, 
    threshold: .5, // 0-1 where 
                    //.25=> fires the entry ONLY when 25% of it is in the viewport
                    //  1=> fires the entry ONLY when 100% of it is in the viewport
    rootMargin: "0px" //px or % string value, clockwise or shorthand
                  //rootMargin creates an imaginary viewport that is 
                  //------smaller than the actual viewport if margin is negative, 
                  //------larger than the actual viewport, if margin is positive.
};
const observer = new IntersectionObserver(callback, options);

observer.observe(section1); //section is now observed when intersection and not intersecting with the viewport