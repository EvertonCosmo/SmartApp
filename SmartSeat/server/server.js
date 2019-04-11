

// Require the serialport node module

const SerialPort = require('serialport');

const Readline = require('@serialport/parser-readline');

const port = new SerialPort('/dev/ttyUSB0', {baudRate: 9600,})

const parser = port.pipe(new Readline({ delimiter: '\n' }));

const io = require('socket.io')(server);

var express = require('express')

var app = express()

// const routes = express.Router();

var server  = app.listen(3000,()=>{
	console.log('on port 3000')
})




// const ads = "ads"
// app.get('/', (req, res) => res.send(data)) 

// app.listen(portEx)

// app.listen(portEx, () => {
//  console.log("Server listening on port " + portEx);
// });

// app.use(express.static('public')); //Send index.html page on GET /

// parser.on('data',callback);


parser.on('data',(data) =>{
	console.log('data: ',data);

	io.sockets.emit('data',data);
	// axios.post("localhost:3001/api/",{
	// 	data:data

	// })
	// routes.post('/',()=>{})
	 app.get('/', (req, res) => res.send(data)) 
})
// parser.on('data', data =>{


//   console.log('got word from arduino:', data);
//  app.get('/', (req, res) => {
//     res.json({ value:data})
// })
io.on('connection', (socket) => {
    console.log("Someone connected."); //show a log as a new client connects.
})





// port.on('readable', function () {
//   console.log('Data:', port.read())
// })

// Switches the port into "flowing mode"
// port.on('data', function (data) {
//   console.log('Data:', data)
// })

// Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())



