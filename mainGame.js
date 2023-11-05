let video;
let canvas;
let countDownIN;
let countDownOUT;
let timeRemainingIN = 500;
let timeRemainingOUT = 20;
let numberOfLoops = 9;
let series1;
let series2;
let series3;
let series4;
let series5;
let series6;
let rectHeight;
let font;
let displayCountDown;

let startTime;
let countDownStarted = false;
let startButton;

let faceLogo;
let faceJP;
let prepText;
let next;
let exit;
let instruction;
let start;
let notinUse;
let redcross;
let congrat;
let noFace;

function preload() {
  video = createCapture(VIDEO);
  video.size(windowWidth, (windowWidth / 3) * 4);
  video.hide();

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

  font = loadFont("times new roman bold.ttf");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent('ParentID');
  // frameRate(30);
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
  startTime = millis();
  // canvas.touchStarted(startTime);

  startButton = createButton("START");
  startButton.position(windowWidth / 2 - 60, windowHeight / 1.5 - 30);
  startButton.size(120, 60);
  startButton.mousePressed(startCountDown);
  startButton.id("custom-button");
  noLoop();
}

function draw() {
  background(17, 17, 17);

  // if(touchNext) {
  //   ruleDisplay();
  // }
  //   let currentTimeOUT = int(millis() / 1000);
  //   countDownOUT = timeRemainingOUT - currentTimeOUT;

  //   if (countDownOUT < 1) {
  //     countDownOUT = 0;
  // }

  //   if (currentTimeOUT <= 5 && currentTimeOUT > 0) {
  //     preparationStage();
  //   }

  // if (currentTimeOUT <= 5 && currentTimeOUT > 0) {
  //    ruleDisplay();
  // }

  if (countDownStarted) {
    let elapsedTime = int((millis() - startTime) / 1000);
    countDownIN = timeRemainingIN - elapsedTime;
  }

  background(17, 17, 17);

  if (countDownIN < 1) {
    countDownIN = 0;
  }

  if (countDownIN <= 500 && countDownIN > 495) {
    preparationStage();
    startButton.hide();
  }

  if (countDownIN <= 495 && countDownIN > 485) {
    ruleDisplay();
  }

  series1 = number1(485, numberOfLoops);
  series2 = number1(475, numberOfLoops);
  series3 = number1(465, numberOfLoops);

  if (countDownIN <= series1[0] && countDownIN > series2[0]) {
    cameraReveal();
  } else if (countDownIN <= series1[1] && countDownIN > series2[1]) {
    cameraReveal();
  } else if (countDownIN <= series1[2] && countDownIN > series2[2]) {
    cameraReveal();
  } else if (countDownIN <= series1[3] && countDownIN > series2[3]) {
    cameraReveal();
  } else if (countDownIN <= series1[4] && countDownIN > series2[4]) {
    cameraReveal();
  } else if (countDownIN <= series1[5] && countDownIN > series2[5]) {
    cameraReveal();
  } else if (countDownIN <= series1[6] && countDownIN > series2[6]) {
    cameraReveal();
  } else if (countDownIN <= series1[7] && countDownIN > series2[7]) {
    cameraReveal();
  } else if (countDownIN <= series1[8] && countDownIN > series2[8]) {
    cameraReveal();
  }

  // if (countDown <= series2[0] && countDown > series3[0]) {
  //   image(video, 0, 0);
  //   drawBoxes(detections);
  // }

  if (countDownIN <= series2[0] && countDownIN > series3[0]) {
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


  if (countDownIN <= series3[0] && countDownIN > series1[1]) {
    exitStage();
  }

  if (countDownIN <= series3[1] && countDownIN > series1[2]) {
    exitStage();
  }

  if (countDownIN <= series3[2] && countDownIN > series1[3]) {
    exitStage();
  }

  if (countDownIN <= series3[3] && countDownIN > series1[4]) {
    exitStage();
  }

  if (countDownIN <= series3[4] && countDownIN > series1[5]) {
    exitStage();
  }

  if (countDownIN <= series3[5] && countDownIN > series1[6]) {
    exitStage();
  }

  if (countDownIN <= series3[6] && countDownIN > series1[7]) {
    exitStage();
  }

  if (countDownIN <= series3[7] && countDownIN > series1[8]) {
    exitStage();
  }

  if (countDownIN <= series3[8] && countDownIN > series1[9]) {
    exitStage();
  }

}

// console.log(series1);

// textSize(24);
// textAlign(CENTER);
// fill(0);
// text("Countdown: " + countDown, windowWidth / 2, windowHeight / 3);

// function Instructions() {
//   fill(230, 0, 0);
//   textAlign(CENTER);
//   textSize(20);
//   noStroke();
//   text(
//     "Get your face in the frame or get eliminated!",
//     windowWidth / 2,
//     windowHeight / 2
//   );
// }

function cameraReveal() {
  imageMode(CORNER);
  video.size(windowWidth, (windowWidth / 3) * 4);
  image(video, 0, 0);
  video.play();

  // drawBoxes(detections);

  //   if (timingStarted) {
  //     startTime = millis();
  //     let elapsedTime = millis() - startTime;
  //     let rectY = map(elapsedTime, elapsedTime, elapsedTime + 5000, 0, windowWidth);
  //     fill(0, 150);
  //     rect(0, 0, rectY, 0);
  //   }
}

function number1(initialNumber, length) {
  let timeSlots = [initialNumber];
  for (let index = 1; index < length; index++) {
    timeSlots.push(timeSlots[index - 1] - 30);
  }
  return timeSlots;
}

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
  //   // rectMode(CENTER);
  //   // noStroke();
  //   // color(255);
  //   // rect(windowWidth / 2, (windowHeight / 16) * 13, 120, 60, 20);
  //   // imageMode(CENTER);
  //   // image(
  //   //   next,
  //   //   windowWidth / 2,
  //   //   (windowHeight / 16) * 13,
  //   //   windowWidth / 5,
  //   //   (windowWidth / 5 / 13) * 3
  //   // );

  //   // nextButton = createButton('NEXT');
  //   // nextButton.position(0, 0);
  //   // nextButton.size(60, 40);
  //   // nextButton.touchStarted(ruleDisplay);
}

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
  // rectMode(CENTER);
  // noStroke();
  // color(255, 255, 255);
  // rect(windowWidth / 2, (windowHeight / 32) * 29, 120, 60, 20);
  // imageMode(CENTER);
  // image(
  //   start,
  //   windowWidth / 2,
  //   (windowHeight / 32) * 29,
  //   windowWidth / 5,
  //   (windowWidth / 5 / 10) * 3
  // );
}

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

// function startGame() {
//   console.log("clieckeddddd");

//   if (
//     mouseX > windowWidth / 2 - 60 &&
//     mouseX < windowWidth / 2 + 60 &&
//     mouseY > (windowHeight / 32) * 29 - 30 &&
//     mouseY < (windowHeight / 32) * 29 + 30
//   ) {
//     // Toggle the 'start' variable
//     touchStart = !touchStart;
//   }
// }

function startCountDown() {
  if (!countDownStarted) {
    startTime = millis();
    countDownStarted = true;
    loop();
  }
}

function viewCountDown(startSecond) {
  map(displayCountDown, countDownIN, countDownIn - startSecond, startSecond, 1);

  displayCountDown = startSecond - elapsedTime;

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255, 0, 0);
  text("Countdown: " + displayCountDowm, windowWidth / 2, windowHeight / 1.1);
}
