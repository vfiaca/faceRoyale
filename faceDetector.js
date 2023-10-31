let faceapi;
let detections = [];

const faceOptions = {
  withLandmarks: true,
  withExpressions: true,
  withDescriptors: false,
  minConfidence: 0.5
};


function faceReady() {
  faceapi.detect(gotFaces);
}

function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result;
  console.log(detections);
  faceapi.detect(gotFaces);
}




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



