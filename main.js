function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kill=loadSound("kick.wav");
	mario_gameover=loadSound("gameover.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	cam=createCapture(VIDEO)
	cam.size(800,400)
	cam.parent("game_console")
	posenet=ml5.poseNet(cam,modelloaded)
  posenet.on("pose",gotResults)
}

function draw() {
	game()
}
function gotResults(results)
{
if(results.length>0){
  noseX=results[0].pose.nose.x
   noseY=results[0].pose.nose.y
  console.log(noseX,noseY)}
}


function modelloaded()
{
  console.log("success")
}





