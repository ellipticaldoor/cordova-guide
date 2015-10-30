$(document).ready(function() {
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
			var getLocation = function(href) {
				var l = document.createElement("a");
				l.href = href;
				return l;
			};

			var l = getLocation(document.URL);

			peer = new Peer('transmitter', {host: l.hostname, port: 9999, path: '/'});
			peer.on('open', function(id) {
				$('#id').text('you are connected');
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
})
