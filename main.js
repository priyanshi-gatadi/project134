
function setup(){
    canvas=createCanvas(450,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(450,350);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML=" STATUS : detecting objects ";
}

function draw(){
    image(video,0,0,450,350);
    if(status !=""){
        objectDetector.detect(video,got_results);
        for(i=0 ; i < objects.length;i++){
            document.getElementById("status").innerHTML="Status : objectes detected";
            document.getElementById("baby").innerHTML=" baby found ";
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            
            text(objects[i].label+"  "+percent+"%",objects[i].x  ,objects[i].y );
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y ,objects[i].width,objects[i].height);
        }
    }
}
function got_results(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects =results;
}


function modelLoaded(){
    console.log('modelLoaded!')
}
