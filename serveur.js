var net = require('net');

var server = net.createServer((socket)=>{
    console.log('CONNECTED from ' + socket.remoteAddress + ' : ' + socket.remotePort);
    socket.on('data', function(data){
        msg = JSON.parse(data);
        console.log('DATA receive from ' + socket.remoteAdresse + ' : ' + data);

        switch(msg.action){
            case 'client-hello':
                socket.write(JSON.stringify({
                    "sender-ip ":socket.remoteAddress+' : '+ socket.remotePort,
                    "action":"server-hello",
                    "msg":"Hello"
                }));
            break;
        }
    });
}).listen(8080, '127.0.0.1');