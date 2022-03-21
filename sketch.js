let saturn; 
let jupiter;
let tempel; 
let plasma;
let light; 
let langmuir;
var slider;


var messagesaturn = false; 
var messagejupiter = false;
var messagetempel = false; 
var messageplasma = false;
var messagelight = false; 
var messagelangmuir = false;






function preload(){
  jupiter = loadSound('sounds/jupiter-lightning.mp3');
  saturn = loadSound('sounds/saturn-radio-emissions.mp3');
  tempel = loadSound('sounds/tempel-comet.mp3');
  plasma = loadSound('sounds/plasma.mp3');
  light = loadSound('sounds/light-curves.mp3');
  langmuir = loadSound('sounds/solar-langmuir-laves.mp3');
 }



	




function setup() { 
 
  var cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.style('display', 'block');
  
  
  let r = random(0, 100)
  noStroke();
  
  slider = createSlider(0, 100, r, 0.4);
  slider.addClass ('slider');
  slider.position(width/2-250,height/2);
  slider.input(discoverSound); 
  

  
   } 


function draw() {cursor(CROSS);}

function discoverSound() {
  
  

var backgroundIFrame = document.getElementById("backgroundIFrame");
var question = document.getElementById("question");

var messages = document.getElementById("message");
//saturn
    if ((slider.value()>10) && (slider.value()<15)) {
      saturn.loop(); 
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){ 
        
        if (messagesaturn==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(1)'>" + "Saturn Radio Emissions" + "</a></br>Recorded by Cassini spacecraft.</br>April 2002.</br>374 million kilometers from Earth.</div></br>";           
          messagesaturn=true;
        }
          
          changeBackgroundtoBlack();
        
      }
 
//jupiter      
    } 
  else if ((slider.value()>25) && (slider.value()<30)) {
      jupiter.loop();
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){ 
       
        if (messagejupiter==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(2)'>" + "Jupiter's Magnetic Field" + "</a></br>Recorded by Juno spacecraft.</br>June 2016.</br>582 million kilometers from Earth.</div></br>";           
          messagejupiter=true;
        }
          
           changeBackgroundtoBlack();
        
      }
    
  }

//tempel
    else if ((slider.value()>40) && (slider.value()<45)) {
      tempel.loop();
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){
        if (messagetempel==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(3)'>" + "Tempel 1 Comet Dust" + "</a></br>Recorded by Stardust spacecraft.</br>February 2011.</br>181 kilometers from earth.</div></br>";           
          messagetempel=true;
        }
        changeBackgroundtoBlack();
      }
  }
  
//plasma
    else if ((slider.value()>55) && (slider.value()<60)) {
      plasma.loop();
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){ 
          if (messageplasma==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(4)'>" + "Interstellar Plasma" + "</a></br>Recorded by Voyager 1.</br>April 2013.</br>19 billion kilometers from Earth.</div></br>";           
          messageplasma=true;
        }
        changeBackgroundtoBlack();
      }
  }
  
//light waves
    else if ((slider.value()>70) && (slider.value()<75)) {
      light.loop();
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){ 
        if (messagelight==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(5)'>" + "Star KIC12268220C Light Curve Waves" + "</a></br>Recorded by Kepler Space Telescope.</br>December 2014.</br>1470 light-years from Earth.</div></br>";           
          messagelight=true;
        }
        changeBackgroundtoBlack();
      }
  }
  
//langmuir  
    else if ((slider.value()>85) && (slider.value()<90)) {
      langmuir.loop();
      if (backgroundIFrame.src != "https://lrakovich.github.io/Space/"){ 
        if (messagelangmuir==false) {
        messages.innerHTML = messages.innerHTML + "<div class='message-white'><a  class='messagelink-white' href='javascript:playSound(6)'>" + "Solar Langmuir Waves" + "</a></br>Recorded by Parker Solar Probe.</br>August  2019.</br>148 million kilometers from Earth.</div></br>";           
          messagelangmuir=true;
        }
        changeBackgroundtoBlack();
      }
  }
  
  
    else {
      saturn.stop();
      jupiter.stop();
      tempel.stop();
      plasma.stop();
      light.stop();
      langmuir.stop();
      backgroundIFrame.src ="https://lrakovich.github.io/Cross-Cursor/";
      slider.removeClass ('slider-white');
      
      var x = document.getElementsByClassName("messagelink-white");
      while (x.length) {
      x[0].className = 'messagelink-black';
     }
      
      x = document.getElementsByClassName("message-white");
      while (x.length) {
        x[0].className = 'message-black'
      }
      
      slider.addClass ('slider');
      question.className = 'icons';
      
      
    }
  
    }



      
function playSound(soundindex){
  if (soundindex==1){
      jupiter.stop();
      tempel.stop();
      plasma.stop();
      light.stop();
      langmuir.stop();
    if (saturn.isPlaying()) {saturn.stop();} 
    else{
      saturn.loop();
    }
  }
  
  if (soundindex==2){
      saturn.stop();
      tempel.stop();
      plasma.stop();
      light.stop();
      langmuir.stop();
    if (jupiter.isPlaying()) {jupiter.stop();} 
    else{
      jupiter.loop();
    }
  }
  
 if (soundindex==3){
      jupiter.stop();
      saturn.stop();
      plasma.stop();
      light.stop();
      langmuir.stop();
    if (tempel.isPlaying()) {tempel.stop();} 
    else{
      tempel.loop();
    }
  }
  
  if (soundindex==4){
      jupiter.stop();
      tempel.stop();
      saturn.stop();
      light.stop();
      langmuir.stop();
    if (plasma.isPlaying()) {plasma.stop();} 
    else{
      plasma.loop();
    }
  }
  
  if (soundindex==5){
      jupiter.stop();
      tempel.stop();
      plasma.stop();
      saturn.stop();
      langmuir.stop();
    if (light.isPlaying()) {light.stop();} 
    else{
      light.loop();
    }
  }
  
  if (soundindex==6){
      jupiter.stop();
      tempel.stop();
      plasma.stop();
      light.stop();
      saturn.stop();
    if (langmuir.isPlaying()) {langmuir.stop();} 
    else{
      langmuir.loop();
    }
  }
}


       
function changeBackgroundtoBlack() {
  var backgroundIFrame = document.getElementById("backgroundIFrame");
  
  if (backgroundIFrame.src != "https://editor.p5js.org/lrakovich/present/Y82_1sksD"){ 
        backgroundIFrame.src = "https://editor.p5js.org/lrakovich/present/Y82_1sksD";
        slider.addClass ('slider-white');
    
    question.className = 'icons-white';
      
      var x = document.getElementsByClassName("messagelink-black");
     while (x.length) {
       
      x[0].className = 'messagelink-white';
     }
      
      x = document.getElementsByClassName("message-black");
      while (x.length) {
     
        x[0].className = 'message-white';
      }
  
    
 
}
}

    
var infoOpen=false;

function openInfo() {
  if (infoOpen==false) {
    document.getElementById("info").style.display="block";
    infoOpen=true;}
  
  else {document.getElementById("info").style.display="none";
        infoOpen=false;}
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



  








