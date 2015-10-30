var app = {
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		app.jxcore();
	},

	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);

		console.log('Received Event: ' + id);
	},

	jxcore: function() {
		function log(x) {
			var txt = document.getElementById('txt');
			if (txt) txt.innerHTML += "<BR/>" + x;
		}

		var inter = setInterval(function() {
			if (typeof jxcore == 'undefined') return;

			clearInterval(inter);

			jxcore.isReady(function(){
				jxcore('log').register(log);

				jxcore('app.js').loadMainFile(function(ret, err) {
					if (err) {
						alert(JSON.stringify(err));
					} else {
						// log('Loaded');
					}
				});
			});
		}, 5);
	}
};

app.initialize();