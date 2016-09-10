var socket = io(window.location.origin);
var drawArray=[];

socket.on('connect', function(){
	console.log('I have made a persistent two-way connection to the server!');

	whiteboard.on('draw', function(start, end, strokeColor){
	  // drawArray.push({start, end, strokeColor, true});
	  // console.log(drawArray);	
	  socket.emit('draw', start, end, strokeColor);
	});

	socket.on('newDrawing', function(start, end, strokeColor){
		// console.log(start, end, strokeColor);
		whiteboard.draw(start, end, strokeColor, true);
	});

	socket.on('disconnect', function(){
	   //console.log("NOOOOOOO");
	   socket.emit('disconnect');
    });
});

