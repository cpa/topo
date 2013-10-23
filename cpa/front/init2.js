Pusher.log = function(message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('1577db1f01d113632f6a');
var channel = pusher.subscribe('test');
channel.bind('canvas', function(data) {
    console.log('reçu');
    project.importJSON(data);
});

window.state = {
    myTurn: false,
    canvas: null
}
