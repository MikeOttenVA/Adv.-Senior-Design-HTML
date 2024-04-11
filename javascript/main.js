/*
*    Using Node.js with help from: https://www.youtube.com/watch?v=2V1UUhBJ62Y
*    Serial Communication help from: https://www.youtube.com/watch?v=__FSpGHx9Ow
*/
// serial function
// Import Dependencies

const { SerialPort, ReadlineParser } = require("serialport");
const ReadLine = require("@serialport/parser-readline");
const { read } = require("fs");
const readLine = require('readline');

// this function helps find ports on a system
/*SerialPort.list().then(ports => {
    ports.forEach(function(port) {
        console.log(port.path)
    })
})*/

// Define the serial port
const port = new SerialPort({
    path:"COM3",
    baudRate:115200,
    parser: readLine
  });

// The Serial port parser
const parser = new ReadlineParser()
port.pipe(parser)

// Write the data to the serial port
//port.write("ARDUINO CONNECTED");
port.on("open", () => {
    console.log('serial port open');
  });

// Read the data from the serial port
parser.on('data', data =>{    console.log('', data);});

function update_data() {
  testData = data;
  document.getElementById('testData').innerHTML = testData;
}