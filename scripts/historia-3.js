let sliderHistoria3Licznik= 0;
let doneTransition3 = true; 

let sliderHistoria3Images = [ 
    "./img/Historia/3/OgólnywidokCzęstochowy.jpg",
    "./img/Historia/3/Herb Częstochowy.jpg"

];

let sliderHistoria3Titles = [
    "Ogólny widok Częstochowy od strony Złotej Góry, rys. Władysław Dmochowski, ilustracja z albumu Widoki Częstochowy i Jasnej Góry z opisem, Warszawa 1876W zbiorach Muzeum Częstochowskiego",
    "Herb Częstochowy według gotyckiej pieczęci odciśniętej na dokumencie z 1564 r."

]



let sliderHistoria3imageA = $("#slider-historia-3 > span.image-slider-a >img")[0];
let sliderHistoria3imageB = $("#slider-historia-3 > span.image-slider-b >img")[0];
let sliderHistoria3imageC = $("#slider-historia-3 > span.image-slider-c >img")[0];

let spanAA = $("#slider-historia-3 > span.image-slider-a")[0]
let spanBB = $("#slider-historia-3 > span.image-slider-b")[0]
let spanCC = $("#slider-historia-3 > span.image-slider-c")[0]


let imageSlider3Title= $(".image-slider-a-title-2")[0]; 

let sliderHistoria3Info = document.getElementById("slider-historia-3-info"); 
sliderHistoria3Info.textContent = (sliderHistoria3Licznik+1) + " / " + sliderHistoria3Images.length

function nextImage3(params) {

    doneTransition3 = false; 
    sliderHistoria3Licznik = sliderHistoria3Licznik + 1; 
    
    if(sliderHistoria3Licznik >= sliderHistoria3Images.length){
        sliderHistoria3Licznik = 0
    }
    
    sliderHistoria3imageB.src = sliderHistoria3Images[sliderHistoria3Licznik];
    sliderHistoria3Info.textContent = (sliderHistoria3Licznik+1) + " / " + sliderHistoria3Images.length

    spanBB.classList.add('active');
    imageSlider3Title.textContent = sliderHistoria3Titles[sliderHistoria3Licznik];


    setTimeout(() => {
        sliderHistoria3imageA.src = sliderHistoria3imageB.src;
        
        spanBB.classList.remove('active');
        doneTransition3 = true; 
    }, 1000);
    
}
function prevImage3(params) {

    doneTransition3 = false; 
    sliderHistoria3Licznik = sliderHistoria3Licznik - 1; 
    if(sliderHistoria3Licznik < 0){
        sliderHistoria3Licznik = sliderHistoria3Images.length-1
    }

    sliderHistoria3imageC.src = sliderHistoria3Images[sliderHistoria3Licznik];
    sliderHistoria3Info.textContent = (sliderHistoria3Licznik+1) + " / " + sliderHistoria3Images.length

    spanCC.classList.add('active');
    imageSlider3Title.textContent = sliderHistoria3Titles[sliderHistoria3Licznik];
    

    setTimeout(() => {
        sliderHistoria3imageA.src = sliderHistoria3imageC.src;
        //imageSliderTitle.textContent = sliderHistoria2Titles[sliderHistoria2Licznik];
        spanCC.classList.remove('active');
        doneTransition3 = true; 
    }, 1000);
    
}

$("#slider-historia-3 > span").on("click", function name(params) {

    if(doneTransition3 == true){
        $("#full-screen-panel").addClass("full-screen-panel-active")
        $("#fuul-screen-panel-image")[0].src = sliderHistoria3imageA.src
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