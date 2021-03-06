/// JavaScript Document

//Declaro varaibles globales
let name;
var videoPlaying = 1;

var intentoVideo = 0;

//Opciones Escena 1.0
var btn1a = document.createElement("btn");
var btn1b = document.createElement("btn");
//Opciones Escena 2.0
var btn2a = document.createElement("btn");
var btn2b = document.createElement("btn");

// FUNCION CAPTURAR-------------------------------------------
function capturar() {
  let persona = {
    name: document.getElementById("idnombre").value,
    text: "Tú tambien puedes hacer la diferencia"
  };

  window.location = "index2.html";
  localStorage.setItem("persona", JSON.stringify(persona));
}
//FUNCION ON REFRESH --------------------------------------------
function OnRefresh() {
  window.location.assign(window.location.href);
}

//FUNCION CARGAR NOMBRE -----------------------------------------------
function cargarName() {
  let persona = JSON.parse(localStorage.getItem("persona"));

  console.log(persona);
  document.getElementById("nombretxt").value = "¡" + persona.name + "!";
  // $("#nombretxt").val(localStorage.getItem("nombre"));
}

//FUNCION DE VIDEO ------------------------------------------------
setInterval(function () {
  var myPlayer = videojs("Sumapaz");

  /*  if (myPlayer.currentTime() >= 5) {
    cargarName();
  }
  */

  console.log(myPlayer.currentTime());

  switch (videoPlaying) {
    case 1:
      //btn1a.setAttribute("style", "display:none;");
      // btn1b.setAttribute("style", "display:none;");

      if (myPlayer.currentTime() >= 41) {
        //myPlayer.currentTime(95);
        //Posicion y estilo del botón
        //cargarName().setAttribute("style", "left:5%; bottom:22rem");
        btn1a.setAttribute("style", "left: 5.5%; bottom:34rem;");
        document.querySelector(".contenedor").appendChild(btn1a);

        btn1b.setAttribute("style", "left: 29%; bottom:34rem;");
        document.querySelector(".contenedor").appendChild(btn1b);

        //MOMENTO EN EL QUE ENTRA AL LOOP
        if (myPlayer.currentTime() >= 52 && videoPlaying === 1) {
          console.log("Entro al loop");
          myPlayer.currentTime(41);
          //Al clickear el botón 1a
          btn1a.onclick = function () {
            videoPlaying = 1.1;

            myPlayer.src({ type: "video/webm", src: "video/E1a.webm" });
            myPlayer.play();

            //you would also have to add the source element etc but this gives
            //a good example of a shorter approach
            document.querySelector(".contenedor").removeChild(btn1a);
            document.querySelector(".contenedor").removeChild(btn1b);
          };

          btn1b.onclick = function () {
            videoPlaying = 2;

            myPlayer.src({ type: "video/webm", src: "video/E2.webm" });
            myPlayer.play();

            //you would also have to add the source element etc but this gives
            //a good example of a shorter approach
            document.querySelector(".contenedor").removeChild(btn1a);
            document.querySelector(".contenedor").removeChild(btn1b);
          };
        }
      }

      break;
    case 1.1:
      if (myPlayer.currentTime() >= 10) {
        //se espera que algo pase
      }
      break;
    case 2:
      //  btn2a.setAttribute("style", "display:none;");
      //   btn2b.setAttribute("style", "display:none;");
      switch (intentoVideo) {
        case 0:
          if (myPlayer.currentTime() >= 42) {
            //myPlayer.currentTime(57);
            //Posicion y estilo del botón
            btn2a.setAttribute("style", "left: 5.5%; bottom:34rem;");
            document.querySelector(".contenedor").appendChild(btn2a);

            btn2b.setAttribute("style", "left: 29%; bottom:34rem;");
            document.querySelector(".contenedor").appendChild(btn2b);

            //MOMENTO EN EL QUE ENTRA AL LOOP
            if (myPlayer.currentTime() >= 50 && videoPlaying === 2) {
              console.log("Entro al loop");
              myPlayer.currentTime(43);

              //Al clickear el botón 1a
              btn2a.onclick = function () {
                videoPlaying = 2.1;
                //intentoVideo = 1;
                myPlayer.src({ type: "video/webm", src: "video/E2a.webm" });
                myPlayer.play();

                //you would also have to add the source element etc but this gives
                //a good example of a shorter approach
                document.querySelector(".contenedor").removeChild(btn2a);
                document.querySelector(".contenedor").removeChild(btn2b);
              };

              btn2b.onclick = function () {
                videoPlaying = 3;

                myPlayer.src({ type: "video/webm", src: "video/E3.webm" });
                myPlayer.play();

                //you would also have to add the source element etc but this gives
                //a good example of a shorter approach

                document.querySelector(".contenedor").removeChild(btn2a);
                document.querySelector(".contenedor").removeChild(btn2b);
              };
            }
          }
          break;
        case 1:
          btn2b.setAttribute("style", "left: 29%; bottom:34rem;");
          document.querySelector(".contenedor").appendChild(btn2b);
          myPlayer.currentTime(42);
          // myPlayer.currentTime(40);
          //Posicion y estilo del botón

          //document.querySelector(".contenedor").appendChild(btn2b);
          // btn2b.onclick = function () {
          videoPlaying = 3;
          myPlayer.src({ type: "video/webm", src: "video/E3.webm" });
          document.querySelector(".contenedor").removeChild(btn2b);
          myPlayer.play();

          //you would also have to add the source element etc but this gives
          //a good example of a shorter approach
          //  }

          break;
        default:
      }
      break;

    case 2.1:
      if (myPlayer.currentTime() >= 71 && videoPlaying === 2.1) {
        videoPlaying = 3;

        myPlayer.src({ type: "video/webm", src: "video/E3.webm" });
        myPlayer.play();
      }
      break;
    case 3:
      if (myPlayer.currentTime() >= 126) {
        cargarName().setAttribute("style", "left:5%; bottom:22rem");
      }
      break;
    default:
  }
}, 400);

function toggleMenu() {
  var myPlayer = videojs("Sumapaz");
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");

  var NavActivado = $(".toggle").is(".active");

  if (NavActivado) {
    myPlayer.pause();
    console.log("pause");
    var style = document.createElement("style");
    style.innerHTML = `
    #target {
    color: blueviolet;
    }
    `;
    document.head.appendChild(style);
    document
      .querySelector(".video-js .vjs-tech")
      .setAttribute("style", "filter:opacity(0.5);");
  } else {
    myPlayer.play();
    console.log("play");
    document
      .querySelector(".video-js .vjs-tech")
      .setAttribute("style", "filter:none;");
  }
}

function Menu1() {
  var myPlayer = videojs("Sumapaz");
  videoPlaying = 1;
  myPlayer.src({ type: "video/webm", src: "video/E1.webm" });
  myPlayer.play();

  document.querySelector(".contenedor").removeChild(btn2a);
  document.querySelector(".contenedor").removeChild(btn2b);
}

function Menu2() {
  var myPlayer = videojs("Sumapaz");
  videoPlaying = 2;
  myPlayer.src({ type: "video/webm", src: "video/E2.webm" });
  myPlayer.play();

  document.querySelector(".contenedor").removeChild(btn2a);
  document.querySelector(".contenedor").removeChild(btn2b);
}

function Menu3() {
  var myPlayer = videojs("Sumapaz");
  videoPlaying = 3;
  myPlayer.src({ type: "video/webm", src: "video/E3.webm" });
  myPlayer.play();
  document.querySelector(".contenedor").removeChild(btn1a);
  document.querySelector(".contenedor").removeChild(btn1b);
  document.querySelector(".contenedor").removeChild(btn2a);
  document.querySelector(".contenedor").removeChild(btn2b);
}

var inputs = document.getElementsByClassName("inputForm");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}
