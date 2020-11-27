const animateCSS = ( element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.getElementById(element);
        node.classList.add(`${prefix}animated`, animationName);
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


const animateCSSbyClassName = ( element, animation, prefix = 'animate__') =>
    
   
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;
        node.classList.add(`${prefix}animated`, animationName);
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});




/**
 * @param  {string} pageID Page id must be whit "#""
 */
function NavigateToPageID(pageID){
    ///
        
        animateCSS(CURENT_PAGE[0].id, bounceOut).then((message) => {
         
           
            console.log(fuulScreenImage);
            CURENT_PAGE.removeClass(ACTIVE_PAGE);
            let newActivePage = $(pageID)
           
            newActivePage.addClass(ACTIVE_PAGE);
            
            
            animateCSS(newActivePage[0].id, fadeInRight)       
            CURENT_PAGE= newActivePage; 
          })
          
}

function CreateZoomImage(elementID){

    var el = document.getElementById(elementID);
    var zoom = new Zoom(el,{
        rotate: false,
        pan: true
    })
    console.log("IMAGE ZOOM CREATE")
    return zoom;

}