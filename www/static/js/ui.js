document.addEventListener('DOMContentLoaded', function() {
	setUI();
});

function setUI() {
  // global variables
  current_content = "home";

  // link variables
  var home_link = document.getElementById('home_link');
  var stream_link = document.getElementById('stream_link');
  var hotspot_link = document.getElementById('hotspot_link');
  var help_link = document.getElementById('help_link');

  // content variables
  var home_content = document.getElementById('home_content');
  var stream_content = document.getElementById('stream_content');
  var hotspot_content = document.getElementById('hotspot_content');
  var help_content = document.getElementById('help_content');

	// other
	var title = document.getElementById('title');
	var get_started = document.getElementById('get_started');
	var start_streaming = document.getElementById('start_streaming');
	var streamingNow = false;
	var audio_control = document.getElementById('audio_control');

	start_streaming.addEventListener('click', function() {
		if (streamingNow == false) {
			startTransmitter();
			streamingNow = true;
			start_streaming.innerHTML = "Stop streaming";
			$( '#start_streaming' ).removeClass( 'mdl-button--accent' );
			$( '#start_streaming' ).addClass( 'mdl-button--colored' );
			audio_control.style.display = 'block';
			$('#id_streaming').text('Streaming audio');
		}
		else {
			streamingNow = false;
			start_streaming.innerHTML = "Start streaming";
			$( '#start_streaming' ).removeClass( 'mdl-button--colored' );
			$( '#start_streaming' ).addClass( 'mdl-button--accent' );
			audio_control.style.display = 'none';
			$('#id_streaming').text('Please, check first if the phone is connected to a wifi network or you started your own hotspot.');
		}
	});

	// Initiate UI
	stream_content.style.display = 'block';
	$( '.mdl-layout__drawer-button, .material-icons' ).addClass( 'noselect' );

  home_link.addEventListener('click', function() {
  	current_content = 'home_link';
  	hide_content();
    home_content.style.display = 'block';
		title.innerHTML = 'Home';
  });

  stream_link.addEventListener('click', function() {
  	current_content = 'stream_link';
  	hide_content();
    stream_content.style.display = 'block';
		title.innerHTML = 'Stream';
  });

	get_started.addEventListener('click', function() {
		current_content = 'stream_link';
		hide_content();
		stream_content.style.display = 'block';
		title.innerHTML = 'Stream';
	});

  hotspot_link.addEventListener('click', function() {
  	current_content = 'hotspot_link';
  	hide_content();
    hotspot_content.style.display = 'block';
		title.innerHTML = 'Wifi Hotspot';
  });

  help_link.addEventListener('click', function() {
  	current_content = 'help_link';
  	hide_content();
    help_content.style.display = 'block';
		title.innerHTML = 'Help';
  });

  function hide_content() {
    home_content.style.display = 'none';
    stream_content.style.display = 'none';
    hotspot_content.style.display = 'none';
    help_content.style.display = 'none';

		$( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
  }


  function set_content() {
  	console.log(current_content);
  }
}
