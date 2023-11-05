////// EXPERIMENT 2, CREATION AND COMPUTATION, FALL 2023: "FACE ROYALE - base file"
////// Using p5js to create an interactive experience with multi-screens and multi-people
////// Submitted on multi-screen day! - November 03, 2023
////// A number of different files with varying number of loops were created, based off of this base file
////// Also refer to other files and images attached to this mainGame file


//// A. Declaring the global variables

let video; //variable to capture and store live video
let canvas; //variable to store the canvas
let countDownIN; //variable to store the countDown inside the loops
let timeRemainingIN = 500; //variable to store a global time count down track running in the background
let numberOfLoops = 9; //variable to adjust the number of loops that are successful
let series1; //variable to store the first list of numbers that act as time slots for loops to operate
let series2; //variable to store the second list of numbers that act as time slots for loops to operate
let series3; //variable to store the third list of numbers that act as time slots for loops to operate

let rectHeight; //
let font; //variable to store the Times New Roman font used in the game screens

let startTime; //variable to store time value
let countDownStarted = false; //boolean to switch on and off game count down on demand
let startButton; //variable to store a button that acts as a trigger to start the game

let faceLogo; //variable to store image
let faceJP; //variable to store image
let prepText; //variable to store image
let next; //variable to store image
let exit; //variable to store image
let instruction; //variable to store image
let start; //variable to store image
let notinUse; //variable to store image
let redcross; //variable to store image
let congrat; //variable to store image
let noFace; //variable to store image


//// B. Defining video and images to load early for faster processing

function preload() {
  //code snippet to enable live video capture and hide it
  video = createCapture(VIDEO);
  video.size(windowWidth, (windowWidth / 3) * 4); //size of the video is constrained in a 3:4 (portrait) format so to avoid skewing on different screens
  video.hide();

  //code snippet to load all the necessary images
  faceLogo = loadImage("faceRoyale-logo-tilt-08.png");
  faceJP = loadImage("faceRoyale-jp.png");
  prepText = loadImage("faceRoyale-instructions-09.png");
  next = loadImage("faceRoyale-next.png");
  exit = loadImage("faceRoyale-exitgame-14.png");
  instruction = loadImage("faceRoyale-howtoplay.png");
  start = loadImage("faceRoyale-start.png");
  redcross = loadImage("Redcross.png");
  notinUse = loadImage("faceRoyale-Cameraoutofuse.png");
  congrat = loadImage("faceRoyale-Youarein.png");
  noFace = loadImage("faceRoyale-Noface.png");

  //code snippet to load the necessary font, manipulated using css in the index.html file
  font = loadFont("times new roman bold.ttf");
}


//// C. Setting up the sketch by recording the start time, calling face detection, and creating a button to trigger count down

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //code snippet that calls the face detection function from the faceDetector.js file
  faceapi = ml5.faceApi(video, faceOptions, faceReady);

  //code snippet to store the value of time when the sketch loads
  startTime = millis();

  //code snippet to create a button that acts as a trigger to start the count down in the draw loop
  startButton = createButton("START");
  startButton.position(windowWidth / 2 - 60, windowHeight / 1.5 - 30);
  startButton.size(120, 60);
  startButton.mousePressed(startCountDown);
  startButton.id("custom-button");
  noLoop();
}


//// D. Defining the loops of screens and the count down that repeat as desired

function draw() {
  background(17, 17, 17);

  //using the true boolean to check if count down has started and start the count down   inside the loops
  
  //ref: https://editor.p5js.org/mbardin/sketches/f5IC9TBZ1 
  if (countDownStarted) {
    let elapsedTime = int((millis() - startTime) / 1000);
    countDownIN = timeRemainingIN - elapsedTime;
  }

  //avoiding the error of letting the count down of going to negative numbers by stopping it at 0
  if (countDownIN < 1) {
    countDownIN = 0;
  }

  //displaying the first screen and hiding the button for the first 5 seconds of the game
  if (countDownIN <= 500 && countDownIN > 495) {
    preparationStage();
    startButton.hide();
  }

  //displaying the second screen for a duration of 10 seconds
  if (countDownIN <= 495 && countDownIN > 485) {
    ruleDisplay();
  }

  //deploying the series variables by calling the function that fills them with an array of numbers used as time slots
  series1 = number1(485, numberOfLoops);
  series2 = number1(475, numberOfLoops);
  series3 = number1(465, numberOfLoops);

  //loop part 1: reveals the camera for a duration of 10 seconds
  if (countDownIN <= series1[0] && countDownIN > series2[0]) {
    //round 1
    cameraReveal();
  } else if (countDownIN <= series1[1] && countDownIN > series2[1]) {
    //round 2
    cameraReveal();
  } else if (countDownIN <= series1[2] && countDownIN > series2[2]) {
    //round 3
    cameraReveal();
  } else if (countDownIN <= series1[3] && countDownIN > series2[3]) {
    //round 4
    cameraReveal();
  } else if (countDownIN <= series1[4] && countDownIN > series2[4]) {
    //round 5
    cameraReveal();
  } else if (countDownIN <= series1[5] && countDownIN > series2[5]) {
    //round 6
    cameraReveal();
  } else if (countDownIN <= series1[6] && countDownIN > series2[6]) {
    //round 7
    cameraReveal();
  } else if (countDownIN <= series1[7] && countDownIN > series2[7]) {
    //round 8
    cameraReveal();
  } else if (countDownIN <= series1[8] && countDownIN > series2[8]) {
    //round 9
    cameraReveal();
  }

  //loop part 2: pauses the video and checks if the face was detected using the face detection api, for a duration of 10 seconds
  if (countDownIN <= series2[0] && countDownIN > series3[0]) {
    //round 1
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[1] && countDownIN > series3[1]) {
    //round 2
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[2] && countDownIN > series3[2]) {
    //round 3
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[3] && countDownIN > series3[0]) {
    //round 4
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[4] && countDownIN > series3[4]) {
    //round 5
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[5] && countDownIN > series3[5]) {
    //round 6
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[6] && countDownIN > series3[6]) {
    //round 7
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[7] && countDownIN > series3[7]) {
    //round 8
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  if (countDownIN <= series2[8] && countDownIN > series3[8]) {
    //round 9
    imageMode(CORNER);
    image(video, 0, 0);
    video.pause();
    if (detections.length > 0) {
      imageMode(CENTER);
      image(
        congrat,
        windowWidth / 2,
        (windowHeight / 16) * 15,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 10.5) * 1.5
      );
    } else {
      imageMode(CENTER);
      image(
        noFace,
        windowWidth / 2,
        (windowHeight / 16) * 14.5,
        (windowWidth / 4) * 3,
        (((windowWidth / 4) * 3) / 9.3) * 3
      );
    }
  }

  //loop part 3: displays the last screen where players not detected by the camera are instructed to leave the game
  if (countDownIN <= series3[0] && countDownIN > series1[1]) {
    //round 1
    exitStage();
  }

  if (countDownIN <= series3[1] && countDownIN > series1[2]) {
    //round 2
    exitStage();
  }

  if (countDownIN <= series3[2] && countDownIN > series1[3]) {
    //round 3
    exitStage();
  }

  if (countDownIN <= series3[3] && countDownIN > series1[4]) {
    //round 4
    exitStage();
  }

  if (countDownIN <= series3[4] && countDownIN > series1[5]) {
    //round 5
    exitStage();
  }

  if (countDownIN <= series3[5] && countDownIN > series1[6]) {
    //round 6
    exitStage();
  }

  if (countDownIN <= series3[6] && countDownIN > series1[7]) {
    //round 7
    exitStage();
  }

  if (countDownIN <= series3[7] && countDownIN > series1[8]) {
    //round 8
    exitStage();
  }

  if (countDownIN <= series3[8] && countDownIN > series1[9]) {
    //round 9
    exitStage();
  }
}


//// E. Defining required functions that are called previously - number array for time slots, loop screens and count down timer


//function that forms an array of numbers with a difference of 30 second to form a desired series of numbers that can be used as time slots in the loops. The initialNumber parameter is the maximum number in the array, and the length parameter corresponds to the number of loops in each file

//ref: ChatGPT-3.5:
//prompt: I have a series of numbers: 490, 470, 450, 430.... so every number is 20 less than the previous. I want to rewrite this series so that I just have one number to manage, which is the multiplier. The multiplier will decide how many times I want to subtract the number 20, so that I get the exact number I want from the series

//reply: To achieve this, you can use a formula to calculate the value based on the multiplier. The formula will involve multiplying the multiplier by 20 and then subtracting it from the initial number. Here's how you can do it:

// Let's say you have an initial number (e.g., 490) and a multiplier (e.g., 3). You want to calculate the value based on the multiplier. The formula would be:

// `result = initialNumber - (multiplier * 20)`

// In this formula:

// - `initialNumber` is the first number in your series (e.g., 490).
// - `multiplier` is the number of times you want to subtract 20 from the initial number (e.g., 3).
// - `result` will give you the number you want (e.g., 430) based on the initial number and multiplier.

// Here's how you can implement this in JavaScript:

// ```javascript
// function calculateNumber(initialNumber, multiplier) {
//   return initialNumber - (multiplier * 20);
// }

// // Example usage:
// let initialNumber = 490;
// let multiplier = 3;
// let result = calculateNumber(initialNumber, multiplier);
// console.log(result); // Output: 430
// ```

// You can use the `calculateNumber` function with different values of `multiplier` to get the exact numbers you want from the series without having to manage the entire series manually.

function number1(initialNumber, length) {
  let timeSlots = [initialNumber];
  for (let index = 1; index < length; index++) {
    timeSlots.push(timeSlots[index - 1] - 30);
  }
  return timeSlots;
}


//function that makes the screen to prepare the players before the game starts
function preparationStage() {
  //preparation stage
  background(17, 17, 17);
  imageMode(CORNER);
  image(
    faceJP,
    (windowWidth / 16) * 11,
    0,
    (windowWidth / 16) * 5,
    (((windowWidth / 16) * 5) / 13) * 28
  );
  imageMode(CORNER);
  image(faceLogo, -10, -30, (windowWidth / 4) * 3, (windowWidth / 4) * 3);
  imageMode(CENTER);
  image(
    prepText,
    windowWidth / 2,
    (windowHeight / 16) * 9.5,
    (windowWidth / 4) * 3,
    (((windowWidth / 4) * 3) / 29) * 13
  );
  fill(17, 17, 17);
  rectMode(CENTER);
  rect(
    windowWidth / 2,
    (windowHeight / 16) * 11,
    (windowWidth / 4) * 3,
    (((windowWidth / 4) * 3) / 29) * 7
  );
}

//function that makes the screen to display the rules of the game once again to reduce ambiguity
function ruleDisplay() {
  //rule display
  background(17, 17, 17);
  imageMode(CORNER);
  image(
    faceJP,
    (windowWidth / 5) * 3,
    0,
    windowWidth / 4,
    (windowWidth / 4 / 13) * 28
  );
  imageMode(CORNER);
  image(faceLogo, 40, -40, (windowWidth / 16) * 9, (windowWidth / 16) * 9);
  imageMode(CENTER);
  image(
    instruction,
    windowWidth / 2,
    (windowHeight / 16) * 9,
    (windowWidth / 6) * 5,
    (windowWidth / 6) * 5
  );
}

//function that starts the live camera capture in the selfie camera
function cameraReveal() {
  imageMode(CORNER);
  video.size(windowWidth, (windowWidth / 3) * 4);
  image(video, 0, 0);
  video.play();
}

//function that makes the screen to instruct eliminated players to leave the game
function exitStage() {
  imageMode(CORNER);
  image(
    faceJP,
    (windowWidth / 16) * 11,
    0,
    (windowWidth / 16) * 5,
    (((windowWidth / 16) * 5) / 13) * 28
  );
  imageMode(CORNER);
  image(faceLogo, -10, -30, (windowWidth / 4) * 3, (windowWidth / 4) * 3);
  imageMode(CENTER);
  image(
    exit,
    windowWidth / 2,
    (windowHeight / 16) * 11,
    (windowWidth / 4) * 3,
    (((windowWidth / 4) * 3) / 38) * 20
  );
}

//function that displays the screen where the loops are over and the camera becomes out of use
//different files with different loops are created leveraging this function. All files contain 9 rounds in total; but every file has a specific number of 'successful rounds' and the remaining rounds are replaced with this function in order to turn the camera out of use, eventually resulting in the elimination of the player
function outOfUse() {
  background(17, 17, 17);
  imageMode(CENTER);
  image(
    redcross,
    windowWidth / 2,
    (windowHeight / 5) * 2,
    (windowWidth / 4) * 3,
    (windowWidth / 4) * 3
  );
  image(
    notinUse,
    windowWidth / 2,
    (windowHeight / 16) * 12,
    (windowWidth / 4) * 3,
    (((windowWidth / 4) * 3) / 10) * 3.5
  );
}

//function that enables the count down on demand
function startCountDown() {
  if (!countDownStarted) {
    startTime = millis();
    countDownStarted = true;
    loop();
  }
}
