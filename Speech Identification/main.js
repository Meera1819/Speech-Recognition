x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_ellipse = "";
draw_triangle = "";
draw_flower = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
      if(content =="circle" || content =="Circle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle "; 
        draw_circle = "set";
      }
      if(content =="rectangle" || content =="Rectangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle "; 
        draw_rect = "set";
      }

      if(content =="Square" || content =="square")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square "; 
        draw_square = "set";
      }

      if(content =="Ellipse" || content =="ellipse")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing ellipse "; 
        draw_ellipse = "set";
      }

      if(content =="Triangle" || content =="triangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing triangle "; 
        draw_triangle = "set";
      }

      if(content =="Flower" || content =="flower")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing flower "; 
        draw_flower = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_rect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle is drawn ";
    draw_rect = "";
  }

  if(draw_square == "set")
  {
    rect(x,y,70,70);
    document.getElementById("status").innerHTML = "Square is drawn ";
    draw_square = "";
  }

  if(draw_ellipse == "set")
  {
    ellipse(x,y,80,40);
    document.getElementById("status").innerHTML = "Ellipse is drawn ";
    draw_ellipse = "";
  }

  if(draw_triangle == "set")
  {
    triangle(x,y,320,100,310,80);
    document.getElementById("status").innerHTML = "Triangle is drawn ";
    draw_triangle = "";
  }

  if(draw_flower == "set")
  {
    translate(580,200);
    noStroke();
    for(let i=0;i<10;i++){
        ellipse(10,30,20,80);
        rotate(PI/5);
    }
    
    document.getElementById("status").innerHTML = "Flower is drawn ";
    draw_flower = "";
  }

}







