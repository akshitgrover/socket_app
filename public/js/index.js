var socket = io();
socket.on('connect', function(){
	console.log("Connected To Server.");

	socket.emit('createEmail',{
		to:"akshit@socket_app.com",
		text:"Thankyou."
	});

	socket.emit('createMessage',{
		to:"akshitgrover",
		text:"Hey"
	});
})

socket.on('newEmail', function(object){
	console.log(object);
});

socket.on('newMessage',function(object){
	console.log('Recieved A Message From: ' + object.from + ', Stating: ' + object.text);
});

socket.on('disconnect', function(){
	console.log("Disconnected From Server.");
});