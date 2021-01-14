const section1 = document.querySelector("#section-1"); 
const section2 = document.querySelector("#section-2"); 
const section3 = document.querySelector("#section-3"); 
const section4 = document.querySelector("#section-4"); 

const callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting==true){

            console.log(entry.target.id, "is intersecting? ", entry.isIntersecting);
            entry.target.classList.add("inverse")
            observer.unobserve(entry.target); 
        }
    });
} 
const options = {
    //root is by default the viewport, so don't change it
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

//each section is being observed all the time, reporting whether or not it is intersection with the viewport threshold.
observer.observe(section1); 
observer.observe(section2); 
observer.observe(section3); 
observer.observe(section4); 