var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		// Just for iOS devices.
		// if (window.device.platform === 'iOS') {
		// 	cordova.plugins.iosrtc.registerGlobals();
		// }
		app.receivedEvent('deviceready');
		app.jxcore();
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		// var listeningElement = parentElement.querySelector('.listening');
		// var receivedElement = parentElement.querySelector('.received');

		// listeningElement.setAttribute('style', 'display:none;');
		// receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},

	jxcore: function() {
		function log(x) {
			var txt = document.getElementById('txt');
			if (txt)
				txt.innerHTML += "<BR/>" + x;
		}

		// function logc(x) {console.log(x);}

		// silly but reliable on multiple environments.
		// it tries until the jxcore reference is ready.
		var inter = setInterval(function() {
			if (typeof jxcore == 'undefined') return;

			clearInterval(inter);

			var addIp = function(addr) {
				document.getElementById('ipaddrs').innerHTML += "<li>" + addr + "</li>";
			}

			// sign-up for jxcore.isReady event
			jxcore.isReady(function(){
				// register log method from UI to jxcore instance
				// so you can call it (app.js) cordova('log').cal(...)
				jxcore('log').register(log);
				jxcore('addIp').register(addIp);

				// set the main file and load.
				jxcore('app.js').loadMainFile(function(ret, err) {
					if (err) {
						alert(JSON.stringify(err));
					} else {
						log('Loaded');
						jxcore_ready();
					}
				});
			});
		}, 5);

		function jxcore_ready() {
				// calling a method from JXcore (app.js)
				jxcore('asyncPing').call('Hello', function(ret, err){
						// register getTime method from jxcore (app.js)
						var getBuffer = jxcore("getBuffer");

						getBuffer.call(function(bf, err){
								var arr = new Uint8Array(bf);
								log("Buffer size:" + arr.length + " - first item: " + arr[0]);
						});
				});
		}

		// startTransmitter();
		// startReceiver();
	}
};

app.initialize();