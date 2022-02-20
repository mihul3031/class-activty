noseX=0;
noseY=0;
diff=0;
leftW=0;
rightW=0;

function setup(){
    canvas=createCanvas(550,550);
        canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,550);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is Initialized!');
}

function draw(){
    background('#b0b0b0');
    fill('pink');
    stroke('black');
    square(noseX,noseY,diff);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose-x= "+noseX+"Nose-y= "+noseY);
        
        leftW=results[0].pose.leftWrist.x;
        rightW=results[0].pose.rightWrist.x;
        diff=floor(leftW-rightW);
        console.log("LeftWrist= "+leftW+"RightWrist= "+rightW+"Difference= "+diff);
    }
}



