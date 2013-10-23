paper.install(window);
window.onload = function() {
    window.state = {
	myTurn: true,
	canvas: null
    }
    
    
    paper.setup('canvas');
    window.n = 0;
    var c1 = new Path.Circle(new Point(120, 120), 45);
    var c2 = new Path.Circle(new Point(200, 120), 45);
    var c3 = new Path.Circle(new Point(200, 200), 45);
    var c4 = new Path.Circle(new Point(120, 200), 45);
    var paths = [c1, c2, c3, c4];

    var r1 = new Path.Rectangle(new Point(20, 20), new Point (300, 300));
    r1.strokeColor = 'black';

    var text = new PointText(new Point(200, 50));
    text.justification = 'center';
    text.fillColor = 'black';
    text.content = '';

    for (var i = 0; i < paths.length; i++) {
	paths[i].strokeColor = '#e5e5e5';
	paths[i].fillColor = 'white';
    }

    view.draw();

    var tool = new Tool();

    tool.onMouseDown = function(event) {
	if (event.item) {
	    var c = new Color(0,0,1);
	    var w = c.equals(event.item.fillColor);
	    if (w) {
		event.item.strokeColor = '#e5e5e5';
		event.item.fillColor = 'white';
		window.n--;
	    } else {
		event.item.fillColor = 'blue';
		event.item.strokeColor = 'blue';
		window.n++;
	    }

	    if (n === 3) {
		text.content = 'Valider!';
	    } else {
		text.content = '';
	    }
	}
	window.state.canvas = project.exportJSON();
	socket.emit('news', 'po');
    }
}
