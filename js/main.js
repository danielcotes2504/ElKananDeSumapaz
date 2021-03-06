/// JavaScript Document

//Declaro varaibles globales

var video = null;

var player = {
  currentTime: 0,
  videoPlaying: 1
};
// VARIABLES VIDEO 1
var btn1 = document.createElement("btn");
var t1 = document.createTextNode("Aceptar");
var btn12 = document.createElement("btn");
var t12 = document.createTextNode("Rechazar");

//VARIABLES VIDEO 1 ACEPTA
var btn11 = document.createElement("btn");
var t11 = document.createTextNode("Rechazar");

//VARIABLES VIDEO 1 RECHAZA
var btn13 = document.createElement("btn");
var t13 = document.createTextNode("Aceptar");
var btn14 = document.createElement("btn");
var t14 = document.createTextNode("Rechazar");

//VARIABLES VIDEO 2 ACEPTA
var btn15 = document.createElement("btn");
var t15 = document.createTextNode("Rechazar");

//VARIABLES VIDEO 2 RECHAZA
var btn16 = document.createElement("btn");
var t16 = document.createTextNode("Aceptar");
var btn17 = document.createElement("btn");
var t17 = document.createTextNode("Rechazar");

//VARIABLES VIDEO 2 ACEPTA
var btn18 = document.createElement("btn");
var t18 = document.createTextNode("Rechazar");

function initPlayer() {
  "use strict";

  console.log(localStorage.getItem("nombre"));

  video = document.querySelector("video");
  video.ontimeupdate = function () {
    // PRIMERA ESCENA CON BOTONES --------------------------------------------------

    player.currentTime = video.currentTime; //Obtengo tiempo actual de etiqueta video

    // PRIMER BOTON
    if (player.currentTime >= 20 && player.videoPlaying === 1) {
      //Posicion y estilo del botón
      btn1.setAttribute("style", "position: absolute;top: 320px;left:550px;");

      btn1.appendChild(t1);
      document.body.appendChild(btn1);

      btn12.setAttribute("style", "position: absolute;top: 320px;left:900px;");

      btn12.appendChild(t12);
      document.body.appendChild(btn12);
      btn12.appendChild(t12);
      document.body.appendChild(btn12);

      btn1.onclick = function () {
        btn12.appendChild(t12);
        document.body.appendChild(btn12);

        btn1.appendChild(t1);
        document.body.appendChild(btn1);

        //boton 1

        player.videoPlaying = 2;
        video.src = "video/video2.mp4";
        video.play();
        btn1.remove(btn1);
        btn12.remove(btn12);
        //   console.log(localStorage.getItem("nombre"));
      };

      btn12.style.top = 600;
      btn12.style.left = 800;
      btn12.onclick = function () {
        btn1.appendChild(t1);
        document.body.appendChild(btn1);

        //SEGUNDO BOTON

        player.videoPlaying = 2.1;
        video.src = "video/video2.mp4";
        video.play();
        btn12.remove(btn12);
        btn1.remove(btn1);
      };
    }

    if (player.currentTime < 22 && player.videoPlaying === 1) {
      btn1.remove(btn1);
      btn12.remove(btn12);
    }
  };
}
