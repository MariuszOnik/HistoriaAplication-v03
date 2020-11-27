

var historiaId = "m-i-historia";
var rynekId = "m-i-rynek";
var planyId = "m-i-plany";

var triger = 0; 
var howManyCombination = 3

function AnimateMenuImage(){
    console.log(historiaId);
    animateCSS(historiaId, rotateIn);
    animateCSS(rynekId, rotateIn);
    animateCSS(planyId, rotateIn);

}




function Combination1(){
    setTimeout(() => {
        animateCSS(historiaId, rotateIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(rynekId, rotateIn);
    }, 2000);
    setTimeout(() => {
        animateCSS(planyId, rotateIn);
    }, 3000);
}

function Combination2(){
    setTimeout(() => {
        animateCSS(historiaId, bounceIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(rynekId, bounceIn);
    }, 1500);
    setTimeout(() => {
        animateCSS(planyId, bounceIn);
    }, 2000);
}

function Combination3(){
    setTimeout(() => {
        animateCSS(historiaId, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(rynekId, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(planyId, zoomIn);
    }, 1000);
}


var menuInterval = setInterval(() => {

    //console.log(triger); 
    switch (triger) {
        case 0:
            Combination1() 
            break;
        case 1:
            Combination2(); 
            break
        case 2:
            Combination3(); 
            break
        default:
            break;
    }

    triger = (triger + 1) % howManyCombination; 
  
   
}, 7000);