let countingDown = true;
timer = 10;
var video
let img
function setup() {
  createCanvas(windowWidth, windowHeight);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }  
     };
  video = createCapture(constraints);

  video.hide();
  
  
}

function draw() {
  background(220);
 
//      image(video,0,0);
//    fill(230,0,0);
//    textSize(10);
//    text("find something circular",windowWidth/10,windowHeight/10);
   image(video,0,0);
  
  if( countingDown == true)
    
    { 
           image(video,0,0);
      video.play();
   fill(230,0,0);
   textSize(10);
   text("find something circular",windowWidth/10,windowHeight/10);
      fill(230,0,0);
  textSize(100);
  text(timer,windowWidth/2,windowHeight/2);
      
      if(frameCount % 20==0)
    {    
timer--;
    }
    if(timer == 0)
    {countingDown = false;}
    }
  else{
        noFill();
    stroke(230,0,0);
    circle(windowWidth/2,windowHeight/2, 100);
    video.pause();

// img = createImage(video.width, video.height);
//       img.copy(video, 0, 0, video.width, video.height, 0, 0, windowWidth, windowHeight);
//    img.update();
    
  // redraw();
    if(frameCount % 20==0)
    {timer++;}
    if(timer == 10)
     {countingDown = true;}
}
  
  
 
 // if(frameCount % 40 ==0 && timer>0){
//    timer--;
//  }
  

  

  
}
// function capturePhoto() {
//   capturing = true;

//   // Capture the current frame from the live video
//   capturedImage.copy(videoCapture, 0, 0, 320, 240, 0, 0, 320, 240);
//   capturedImage.update();

//   // Pause the live video capture
//   videoCapture.pause();
// }

 function windowResized() {
 
  resizeCanvas(windowWidth, windowHeight);
}
