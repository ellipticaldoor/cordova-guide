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
// var PeerServer = require('peer').PeerServer;
// var server_1 = PeerServer({port: 9999, path: '/'});
// // clog('peer server started at 9999');


// // Starts an http-server server
// var finalhandler = require('finalhandler')
// var http = require('http')
// var serveStatic = require('serve-static')
 
// // Serve up public/ftp folder 
// var serve = serveStatic('static', {'index': ['index.html', 'index.htm']})
 
// // Create server 
// var server = http.createServer(function(req, res){
//   var done = finalhandler(req, res)
//   serve(req, res, done)
// })
 
// // Listen 
// server.listen(7777)
