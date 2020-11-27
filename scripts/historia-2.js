let sliderHistoria2Licznik= 0;
let doneTransition = true; 

let sliderHistoria2Images = [ 
    "./img/Historia/2/DokumentWładysławaOpolczyka-minaitura.jpg",
    "./img/Historia/2/Opolczyk-miniatura.jpg",
    "./img/Historia/2/PieczęćMajestatycznaOpolczyka-miniatura.jpg",
    "./img/Historia/2/PieczęcKonnaOpolczyka-miniatura.jpg",

];

let sliderHistoria2Titles = [
    "Dokument księcia Władysława II Opolczyka z 3 maja 1377 r., w którym Częstochowę nazwano po raz pierwszy miastem. Archiwum Jasnogórskie.",
    "Władysław II Opolczyk, rys. Jan Matejko. Muzeum Narodowe w Krakowie.",
    "Pieczęć majestatyczna Władysława II Opolczyka. Biblioteka Kórnicka PAN.",
    "Pieczęć konna Władysława II Opolczyka. Biblioteka Kórnicka PAN.",

]

let imageSliderTitle= $(".image-slider-a-title")[0]; 

let sliderHistoria2imageA = $("#slider-historia-2 > span.image-slider-a >img")[0];
let sliderHistoria2imageB = $("#slider-historia-2 > span.image-slider-b >img")[0];
let sliderHistoria2imageC = $("#slider-historia-2 > span.image-slider-c >img")[0];

let spanA = $("#slider-historia-2 > span.image-slider-a")[0]
let spanB = $("#slider-historia-2 > span.image-slider-b")[0]
let spanC = $("#slider-historia-2 > span.image-slider-c")[0]


let sliderHistoria2Info = document.getElementById("slider-historia-2-info"); 
sliderHistoria2Info.textContent = (sliderHistoria2Licznik+1) + " / " + sliderHistoria2Images.length

function nextImage(params) {

    doneTransition = false; 
    sliderHistoria2Licznik = sliderHistoria2Licznik + 1; 
   
    
    
    if(sliderHistoria2Licznik >= sliderHistoria2Images.length){
        sliderHistoria2Licznik = 0
    }
    
    sliderHistoria2imageB.src = sliderHistoria2Images[sliderHistoria2Licznik];
    sliderHistoria2Info.textContent = (sliderHistoria2Licznik+1) + " / " + sliderHistoria2Images.length

    spanB.classList.add('active');
    imageSliderTitle.textContent = sliderHistoria2Titles[sliderHistoria2Licznik];


    setTimeout(() => {
        sliderHistoria2imageA.src = sliderHistoria2imageB.src;
        
        spanB.classList.remove('active');
        doneTransition = true; 
    }, 1000);
    
}
function prevImage(params) {

    doneTransition = false; 
    sliderHistoria2Licznik = sliderHistoria2Licznik - 1; 
    if(sliderHistoria2Licznik < 0){
        sliderHistoria2Licznik = sliderHistoria2Images.length-1
    }

    sliderHistoria2imageC.src = sliderHistoria2Images[sliderHistoria2Licznik];
    sliderHistoria2Info.textContent = (sliderHistoria2Licznik+1) + " / " + sliderHistoria2Images.length

    spanC.classList.add('active');
    imageSliderTitle.textContent = sliderHistoria2Titles[sliderHistoria2Licznik];
    

    setTimeout(() => {
        sliderHistoria2imageA.src = sliderHistoria2imageC.src;
        //imageSliderTitle.textContent = sliderHistoria2Titles[sliderHistoria2Licznik];
        spanC.classList.remove('active');
        doneTransition = true; 
    }, 1000);
    
}

$("#slider-historia-2 > span").on("click", function name(params) {

    if(doneTransition == true){
        $("#full-screen-panel").addClass("full-screen-panel-active")
        $("#fuul-screen-panel-image")[0].src = sliderHistoria2imageA.src
        Seting.curentZoom = $("#fuul-screen-panel-image")[0];
        Seting.zoom = new Zoom(Seting.curentZoom,{
          rotate: false
        })
      
        //Seting.zoom.activeZoom.A[1][1]=;
        //Seting.zoom.activeZoom.A[0][0] = 0.8;
      
        let imWidth = parseInt($("#fuul-screen-panel-image").css("width"))/2;
        let imHeight = parseInt($("#fuul-screen-panel-image").css("height"));
        let panelWidth = parseInt($("#full-screen-panel").css("width"))/2;
        let panelHeight = parseInt($("#full-screen-panel").css("height"));
        //console.log(panelWidth-imWidth)

        if(imHeight >= panelHeight){
            Seting.zoom.activeZoom.b = [(panelWidth-imWidth),0]
        }else{
            let roznica = (panelHeight - imHeight)/2;
            Seting.zoom.activeZoom.b = [(panelWidth-imWidth),roznica]
        }
        

        Seting.zoom.repaint()
        $(".zoom-exit").addClass("zoom-exit-active");
    }else{
        return;
    }
   
})


/*$("#lupa-kazimierz-dokument").on("click", function name(params) {
    $("#full-screen-panel").addClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = "./img/Historia/1/Dokument  Kaziemierza Wielkiego.jpg"
    Seting.curentZoom = $("#fuul-screen-panel-image")[0];
    Seting.zoom = new Zoom(Seting.curentZoom,{
      rotate: false
    })
  
    Seting.zoom.activeZoom.A[1][1]=0.25;
    Seting.zoom.activeZoom.A[0][0] = 0.25;
  
   
    Seting.zoom.activeZoom.b = [430,150]
    Seting.zoom.repaint()
    $(".zoom-exit").addClass("zoom-exit-active");
  })
  
  $(".zoom-exit").on("click", function name(params) {
    Seting.zoom.reset()
    $(".zoom-exit").removeClass("zoom-exit-active");
    $("#full-screen-panel").removeClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = ""
    
  })*/