const dgram = require('dgram');

const HOST = '192.168.137.1';    // '127.0.0.1';
const PORT = 8125; // original port
// const PORT = 80;
const message = new Buffer('My KungFu is Good!');
const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});