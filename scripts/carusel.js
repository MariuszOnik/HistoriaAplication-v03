/*
setInterval(() => {
    AnimateCarusel("carusel-image-1",MenuHistoria, rotateIn, zoomIn)
    
}, 6000);
setInterval(() => {
    AnimateCarusel("carusel-image-2",MenuHistoria1, rotateIn, zoomIn)
    
}, 6000);
setInterval(() => {
    AnimateCarusel("carusel-image-3",MenuHistoria2, rotateIn, zoomIn)
    
}, 6000);

*/
$(".contrast-button").on("click",function name(params) {
    console.log("CONTRAST")
    if(Seting.contrastEnable == false){
        EnableContrast();
        Seting.contrastEnable = true; 
        return; 
    }
    if(Seting.contrastEnable == true){
        DisableContrast(); 
        Seting.contrastEnable = false;
        return; 
    }
})

function EnableContrast(){


    $("p, h1,h2,h3,h4,h5,h6").css("color", "yellow"); 
    $(".first-column, .second-column").css("background-color", "black")
}
function DisableContrast(){
    $("p, h1,h2,h3,h4,h5,h6").css("color", Seting.mainColor); 
    $(".first-column, .second-column").css("background-color", Seting.columnTextColor); 
}


function SetHeight(){
    let width = parseFloat ($(".carusel").css("width"));
    let Height =parseInt( ( window.innerHeight/window.innerWidth)) *width;
    let ratio = window.innerWidth/window.innerHeight; 
    console.log("Width : " + width + " Height :"+ Height + " RAtio: "+ ratio) 
    $(".carusel").css("height", (Height+"px"))
}


function Animation(_animations, _duration) {
    let o = {}
    o.index = 0;
    o.animationURL = _animations
    o.intervalHandle = null
    o.duration = _duration ; 
    
    o.stop = function(){
        window.clearInterval(o.intervalHandle); 
    }
    o.run = function n(_id, _o, animationStart, animationEnd) {
        o.intervalHandle = window.setInterval(function name(params) {
            AnimateCarusel(_id, _o, animationStart, animationEnd)
        },_o.duration)
        Seting.intervals.push(o.intervalHandle);
    }
    return o; 
}

const MenuHistoria = new Animation( [
  
    "./img/Historia/menu/karta-historia-3.jpg",
    "./img/Historia/menu/karta-historia-1.jpg",
    "./img/Historia/menu/karta-historia-2.jpg",
] ,3000)




//MenuHistoria.run("carusel-image-1",MenuHistoria, rotateIn, zoomIn)

const MenuHistoria1 = new Animation( [
  
    "./img/Historia/menu/karta-historia-1.jpg",
    "./img/Historia/menu/karta-historia-2.jpg",
    
    "./img/Historia/menu/karta-historia-3.jpg",
])
const MenuHistoria2 = new Animation( [
  
    "./img/Historia/menu/karta-historia-2.jpg",
    "./img/Historia/menu/karta-historia-3.jpg",
    "./img/Historia/menu/karta-historia-1.jpg",
    "./img/aplikacja TŁO 2 kółko 1.png",
    "./img/aplikacja TŁO 2 kółko 2.png",
    "./img/aplikacja TŁO 2 kółko 3.png" ,

   
])

MenuHistoria.intervalHandle


function AnimateCarusel(_id, _aniObject, animationIn, animationOut ){

    var $image = $("#"+_id)
    _aniObject.index =  _aniObject.index +1;
    if(_aniObject.index > _aniObject.animationURL.length-1){
        _aniObject.index = 0
    }
    //console.log(_aniObject.index)
    animateCSS(_id, animationIn).then((mes)=>{
        
        
            $image[0].src = _aniObject.animationURL[_aniObject.index];
            animateCSS(_id, animationOut).then((mes)=>{
                $image[0].src = _aniObject.animationURL[_aniObject.index];
            })
        
    })
}

/*function AnimateCarusel(_id, _aniObject, animationIn, animationOut ){

    var $image = $("#"+_id)
    _aniObject.index =  (_aniObject.index +1)  % _aniObject.animationURL.length;
    console.log(_aniObject.index)
    animateCSS(_id, animationIn).then((mes)=>{
        
        animateCSS(_id, animationOut).then((mes)=>{
            $image[0].src = _aniObject.animationURL[_aniObject.index];
        })

    })
}*/
