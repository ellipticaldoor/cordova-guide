var fs = require('fs');
var clog = require('./utilities').log;


// Gets all device ip addresses
// var os = require('os');
// var net = os.networkInterfaces();

// for (var ifc in net) {
// 	var addrs = net[ifc];
// 	for (var a in addrs) {
// 		if (addrs[a].family == "IPv4") {
// 			Mobile('addIp').call(addrs[a].address);
// 		}
// 	}
// }


// Starts a peerjs server
var PeerServer = require('peer').PeerServer;
var server_1 = PeerServer({port: 9999, path: '/'});
clog('peerjs server started');


// Starts an http-server server
// var connect = require('connect'),
// directory = path.join(__dirname, "static");

// connect().use(connect.static(directory)).listen(8888);
// clog('http server listening on port 8888');
