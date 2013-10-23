var stage;
var circle;
var CIRCLE_RADIUS = 10;
var circleXReset;
var bounds;

function init()
{
    if(!(!!document.createElement('canvas').getContext))
    {
	var wrapper = document.getElementById("canvasWrapper");
	wrapper.innerHTML = "Your browser does not appear to support " +
	    "the HTML5 Canvas element";
	return;
    }

    var canvas = document.getElementById("stageCanvas");
    bounds = new createjs.Rectangle();
    bounds.width = canvas.width;
    bounds.height = canvas.height;
    stage = new createjs.Stage(canvas);
    var g = new createjs.Graphics();
    g.setStrokeStyle(3);
    g.beginStroke(createjs.Graphics.getRGB(255,105,33,1));
    g.drawCircle(0,0, CIRCLE_RADIUS);
    circle = new createjs.Shape(g);
    circle.x = circleXReset = -CIRCLE_RADIUS;
    circle.y = canvas.height / 2;
    stage.addChild(circle);
    stage.update();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addListener(this);
}
 
function tick()
{
    if(circle.x > bounds.width)
    {
	circle.x = circleXReset;
    }
    circle.x += 2;
    stage.update();
}
