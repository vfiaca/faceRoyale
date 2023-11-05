//////reference : https://www.youtube.com/watch?v=3yqANLRWGLo - Kazuki Umeda


//// A. Declaring global variables

let faceapi; //variable to store face detection result
let detections = []; //variable to store individual faces that are detected


////B. Declaring a constant

//constant that includes various parameters that are used to describe the facial information detected

const faceOptions = {
  withLandmarks: true,
  withExpressions: true,
  withDescriptors: false,
  minConfidence: 0.5
};


//// D. Defining required functions

//function that detects all the faces that are recognized

function faceReady() {
  faceapi.detect(gotFaces);
}

//function that detects if a face is recognized or not

function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result;
  console.log(detections);
  faceapi.detect(gotFaces);
}

//function that draws a rectangle over the face detected to give a visual feedback (this functions is not called in the final code)

function drawBoxes(detections) {
  if (detections.length > 0) {
    for (f = 0; f < detections.length; f++) {
      let x = detections[f].alignedRect._box._x + detections[f].alignedRect._box._width / 2;
      let y = detections[f].alignedRect._box._y + detections[f].alignedRect._box._height / 2;
      let rectWidth = detections[f].alignedRect._box._width;
      let rectHeight = detections[f].alignedRect._box._height;

      ellipseMode(CENTER);
      stroke(44, 169, 225);
      strokeWeight(3);
      noFill();
      circle(x, y, rectWidth);
    }
  }
}



