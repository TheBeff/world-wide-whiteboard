window.whiteboard.on('draw', function(payload){
	console.log(payload);
});

var socket = io(window.location.origin);

socket.on('connect', function(){
	console.log('I have made a persistent two-way connection to the server!');
});