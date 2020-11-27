console.log("KURWA");

var im = new Image();

im.onload = function name(params) {
  console.log("zaladowalem obraz" + document.images); 

  document.getElementById("te").src = im.src; 
}

function TEST(params) {
 
  console.log("TEST START")
  document.getElementById("te").src = "./img/Historia/1. Kazimierz Wielki.png";
  //im.src = "./img/Historia/1. Kazimierz Wielki.png";
  
}

var but = document.getElementById("bb");
but.addEventListener("click", function name(params) {
  
  console.log("TEST ")
  TEST()
})