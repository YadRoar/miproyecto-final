
/*JS para bio*/
function toggleSection() {
    var masinfo= document.getElementById("masinfo");
    if (masinfo.style.display === "none") {
      masinfo.style.display= "block";
      document.getElementById("toggleBloque").textContent = "Leer Menos";
    } else {
      masinfo.style.display= "none";
      document.getElementById("toggleBloque").textContent = "Leer Mas";
    }
  }
/*Fin de bio*/
/*JS para Galeria*/
function showCategory(type) {
     var mascotasElement = document.getElementById("mascotas");
     var paseosElement = document.getElementById("paseos");
     var hobbiesElement = document.getElementById("hobbies");

     var mascotasBtnElement = document.getElementById("mascotas-btn");
     var paseosBtnElement = document.getElementById("paseos-btn");
     var hobbiesBtnElement = document.getElementById("hobbies-btn");
  switch (type) {
    case "mascotas":
      paseosElement.style.display = "none";
      hobbiesElement.style.display = "none";
      mascotasElement.style.display = "block";
      break;
    case "paseos":
      hobbiesElement.style.display = "none";
      mascotasElement.style.display = "none";
      paseosElement.style.display = "block";
      break;
   default:
      mascotasElement.style.display = "none";
      paseosElement.style.display = "none";
      hobbiesElement.style.display = "block";
    break;
  }
}   
/*Fin galeria*/