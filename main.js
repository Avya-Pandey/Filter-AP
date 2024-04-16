noseX =0;
noseY =0;

function preload() {
    img = loadImage("m.png")
}

function setup() {
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posent is initialised');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0 ,0, 300, 300);
    image(img, noseX-15, noseY, 25,25);
}

function take_snapshot(){
    save('myFilterImage.png')
}