function startTransmitter() {
	navigator.getUserMedia = ( navigator.getUserMedia ||
					   navigator.webkitGetUserMedia ||
					   navigator.mozGetUserMedia ||
					   navigator.msGetUserMedia);

	var stream = {};
	var call = {};

	navigator.getUserMedia(
		{audio: true},

		// successCallback
		function(_stream) {
			stream = _stream;

			// var getLocation = function(href) {
			// 	var l = document.createElement("a");
			// 	l.href = href;
			// 	return l;
			// };

			// var l = getLocation(document.URL);
			// peer = new Peer('transmitter', {host: l.hostname, port: 9999, path: '/'});

			local_ip = document.getElementById('network_ip').innerHTML;
			peer = new Peer('transmitter', {host: local_ip, port: 9999, path: '/'});
			peer.on('open', function(id) {
				document.getElementById('txt').innerHTML += '<li>Share the qrcode at the bottom or go to <a href="http://' + l.hostname  + ':8888">http://' + l.hostname + ':8888</a></li>';
				$('#qrcode').css('display', 'block');
			});

			peer.on('connection', function(conn) {
				conn.on('data', function(data){
					console.log(data);
					call = peer.call(data, stream);
				});
			});

			var audio = document.querySelector('audio');
			audio.src = window.URL.createObjectURL(stream);
		},

		function(err) {
			console.log("error: " + err);
		}
	);
}
