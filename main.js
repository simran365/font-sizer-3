noseX=0;
noseY=0;
difference = 0;
textSizeX = 0;

function preload()
{

}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#800000');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

       textSizeX = results[0].pose.textSize.X;
        difference = floor(textSizeX);

        console.log("textSizeX = " + textSizeX + "difference = " + difference);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}