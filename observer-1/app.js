const section1 = document.querySelector("#section-1"); 

const callback = (entries, observer)=>{
    entries.forEach(entry => {
        console.log(entry.target);
    });
} 
const options = {
    //root is by def the  viewport, so don't change it
    root: null, 
    threshold: 0, // 0-1 where .5 fires the entry when it is 50% in the viewport
    rootMargin: "0px" //px or % string value, clockwise or shorthand
                  //rootMargin creates an imaginary viewport that is 
                  //------smaller than the actual viewport if margin is negative, 
                  //------larger than the actual viewport, if margin is positive.
};
const observer = new IntersectionObserver(callback, options);

observer.observe(section1); //section is now observed when intersection and not intersecting with the viewport