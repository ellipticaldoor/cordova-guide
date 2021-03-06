$(document).ready(function() {
	var call = {};

	var getLocation = function(href) {
		var l = document.createElement("a");
		l.href = href;
		return l;
	};

	var l = getLocation(document.URL);

	peer = new Peer({host: l.hostname, port: 9999, path: '/'});

	peer.on('open', function(id) {
		$('#connection').text('Calling...');
		var conn = peer.connect('transmitter');
		conn.on('open', function(){ conn.send(id);});
	});

	// Receive A Call
	peer.on('call', function(call) {
		// Answer the call
		call.answer(null);

		// Got Data from call
		call.on('stream', handleStream);
	});

	handleStream = function(peer_stream) {
		$('#connection').text('Connected to the transmitter');
		$('#listen_msg').css('display', 'list-item');
		var peer_audio = $('#peer-audio');
		peer_audio.attr('src', URL.createObjectURL(peer_stream));
		peer_audio.get(0).play();
	}
})
