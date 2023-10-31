function setup() {
  canvas = createCanvas(windowWidth, windowWidth * 9 / 16);
  video = createCapture(VIDEO);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    minConfidence: 0.5
  };

  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}
