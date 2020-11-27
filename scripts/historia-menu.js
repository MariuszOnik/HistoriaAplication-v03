let historiaMenuLicznikAnimacji = 1;

//const anEvent = new Event('endAnimation');
let historiaMenuImages1 = [ 
    "./img/Historia/menu/karta-historia-3.jpg",
    "./img/Historia/menu/karta-historia-1.jpg",
    "./img/Historia/menu/karta-historia-2.jpg",
];
let historiaMenuImages2 = [ 
    
    "./img/Historia/menu/karta-historia-1.jpg",
    "./img/Historia/menu/karta-historia-2.jpg",
    "./img/Historia/menu/karta-historia-3.jpg",
];
let historiaMenuImages3 = [ 
    
    "./img/Historia/menu/karta-historia-2.jpg",
    "./img/Historia/menu/karta-historia-3.jpg",
    "./img/Historia/menu/karta-historia-1.jpg",
];

let historia1MenuImageA = document.getElementById('h-m-historia-1-a');

let historia1MenuImageB = document.getElementById('h-m-historia-1-b');

let historia2MenuImageA = document.getElementById('h-m-historia-2-a');

let historia2MenuImageB = document.getElementById('h-m-historia-2-b');

let historia3MenuImageA = document.getElementById('h-m-historia-3-a');

let historia3MenuImageB = document.getElementById('h-m-historia-3-b');


historia1MenuImageA.src = "./img/Historia/menu/karta-historia-2.jpg";
historia2MenuImageA.src = "./img/Historia/menu/karta-historia-3.jpg",
historia3MenuImageA.src = "./img/Historia/menu/karta-historia-1.jpg";


/*
imgDiv.src = "./img/aplikacja TŁO 2 kółko 1.png";

var time ; 


imgDiv.addEventListener("click", function name(params) {
    animateCSS("xyz", flipOutX);
})


imgDiv.addEventListener('animationend', function name(params) {
   
    clearTimeout(time); 
    imgDiv.dispatchEvent(anEvent)
    console.log("animation end")
})



imgDiv.addEventListener("endAnimation", function name() {

    time = setTimeout(() => {
        animateCSS("xyz", rotateIn);
    }, 3000);
    
})*/


setInterval(() => {
    historia1MenuImageB.src = historiaMenuImages1[historiaMenuLicznikAnimacji];
    historia2MenuImageB.src = historiaMenuImages2[historiaMenuLicznikAnimacji];
    historia3MenuImageB.src = historiaMenuImages3[historiaMenuLicznikAnimacji];
    
    animateCSS("h-m-historia-1-b", rotateIn);
    animateCSS("h-m-historia-2-b", rotateIn);
    animateCSS("h-m-historia-3-b", rotateIn);
    historia1MenuImageB.classList.add('active');
    historia2MenuImageB.classList.add('active');
    historia3MenuImageB.classList.add('active');
    
    
    historiaMenuLicznikAnimacji++;
    if(historiaMenuLicznikAnimacji == historiaMenuImages1.length) historiaMenuLicznikAnimacji=0;
    if(historiaMenuLicznikAnimacji == historiaMenuImages2.length) historiaMenuLicznikAnimacji=0;
    if(historiaMenuLicznikAnimacji == historiaMenuImages3.length) historiaMenuLicznikAnimacji=0;
  
    setTimeout(function() {
        historia1MenuImageA.src = historia1MenuImageB.src;
        historia2MenuImageA.src = historia2MenuImageB.src;
        historia3MenuImageA.src = historia3MenuImageB.src;

        historia1MenuImageB.classList.remove('active');
        historia2MenuImageB.classList.remove('active');
        historia3MenuImageB.classList.remove('active');
      //imgSecond.classList.remove(`${prefix}animated`, flipOutX);
    }, 1500); // the same time as transition animation at css.
}, 6000);

