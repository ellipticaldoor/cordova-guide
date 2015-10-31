var httpd = null;
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	httpd = ( cordova && cordova.plugins && cordova.plugins.CorHttpd ) ? cordova.plugins.CorHttpd : null;

	startServer("static");
}
function updateStatus() {
	//document.getElementById('location').innerHTML = "document.location.href: " + document.location.href;
	if( httpd ) {
		httpd.getURL(function(url){
			if(url.length > 0) {
				document.getElementById('txt').innerHTML += '<li>http server started at <a href="' + url + '">' + url + '</li>';
				document.getElementById('transmitter_link').href = url + '/transmitter.html';
			} else {
				document.getElementById('txt').innerHTML += '<li>server is down</li>';
			}
		});
		// httpd.getLocalPath(function(path){
		// 	document.getElementById('localpath').innerHTML = "<br/>localPath: " + path;
		// });
	} else {
		alert('CorHttpd plugin not available/ready.');
	}
}
function startServer( wwwroot ) {
	if ( httpd ) {
		httpd.getURL(function(url){
			if(url.length > 0) {
				document.getElementById('url').innerHTML = "server is up: <a href='" + url + "' target='_blank'>" + url + "</a>";
			} else {
				httpd.startServer({
					'www_root' : wwwroot,
					'port' : 8888
				}, function( url ){
					//document.getElementById('url').innerHTML = "server is started: <a href='" + url + "' target='_blank'>" + url + "</a>";
					updateStatus();
				}, function( error ){
					document.getElementById('url').innerHTML = 'failed to start server: ' + error;
				});
			}
			
		},function(){});
	} else {
		alert('CorHttpd plugin not available/ready.');
	}
}
function stopServer() {
	if ( httpd ) {
		httpd.stopServer(function(){
			//document.getElementById('url').innerHTML = 'server is stopped.';
			updateStatus();
		},function( error ){
			document.getElementById('url').innerHTML = 'failed to stop server' + error;
		});
	} else {
		alert('CorHttpd plugin not available/ready.');
	}
}
