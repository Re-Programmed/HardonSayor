var rot = 0;
var sca = 1;

class Info {
  RotateSpeed;
  ScaleSpeed;
  ScaleLimit;

  constructor(rSpeed, sSpeed, sLimit) {
    this.RotateSpeed = rSpeed;
    this.ScaleSpeed = sSpeed;
    this.ScaleLimit = sLimit;
  }
}

const audioOptions = ["LTW_less.mp3", "LTW.mp3"]

const myInfo = new Info(4, 0.08, 2);

window.onclick = function() {
  var audio = new Audio(audioOptions[Math.floor(Math.random() * audioOptions.length)]);
  audio.play();

  var sayerBig = document.createElement("img");
  sayerBig.setAttribute("style", "top: 50%;left: 50%; position: fixed;")
  sayerBig.setAttribute("id", "big")
  sayerBig.setAttribute("src", "sayre_1.jpg")
  document.getElementById("sparent").appendChild(sayerBig);
}

sayerBigSize = 0;

function OnLoad() {

  setInterval(SpinPhoto, 20, "phot_0");
}

window.addEventListener('load', OnLoad);

var currTop = 150, currLeft = 150;
var currTopInc = 8, currLeftInc = 8;

function SpinPhoto(photoClass) {
  if (document.getElementById("big") != null && document.getElementById("big") != undefined) {
    sayerBigSize += 0.15;
    document.getElementById("big").setAttribute("style", "top: 50%;left: 50%;transform: scale(" + sayerBigSize + ", " + sayerBigSize + ");");

    if (sayerBigSize > 8) {
      document.getElementById("big").remove();
      sayerBigSize = 0;
    }
  }

  sca += myInfo.ScaleSpeed;


  if (sca > myInfo.ScaleLimit || sca < -myInfo.ScaleLimit) {
    myInfo.ScaleSpeed = -myInfo.ScaleSpeed;
  }

  currTop += currTopInc;
  currLeft += currLeftInc;

  if (currTop > window.innerHeight - 150 || currTop < -200) {
    currTopInc = -currTopInc;
  }

  if (currLeft > window.innerWidth || currLeft < -125) {
    currLeftInc = -currLeftInc;

    currLeftInc += (Math.random() * 6) - 3;
    currTopInc += (Math.random() * 6) - 3;
  }

  rot += myInfo.RotateSpeed;
  document.getElementById(photoClass).setAttribute("style", "top: " + currTop + "px;left: " + currLeft + "px;");
  document.getElementById(photoClass).setAttribute("style", document.getElementById(photoClass).getAttribute("style") + "rotate: " + rot + "deg;");

  if (sca < 0) {
    document.getElementById(photoClass).setAttribute("style", document.getElementById(photoClass).getAttribute("style") + "transform: scale(" + (-sca) + ", " + sca + ");");
  } else {
    document.getElementById(photoClass).setAttribute("style", document.getElementById(photoClass).getAttribute("style") + "transform: scale(" + sca + ", " + sca + ");");
  }
}