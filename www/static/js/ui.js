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
  var howto_link = document.getElementById('howto_link');

  // content variables
  var home_content = document.getElementById('home_content');
  var stream_content = document.getElementById('stream_content');
  var hotspot_content = document.getElementById('hotspot_content');
  var howto_content = document.getElementById('howto_content');

	// other
	var title = document.getElementById('title');

	// Initiate app
	home_content.style.display = 'block';

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

  hotspot_link.addEventListener('click', function() {
  	current_content = 'hotspot_link';
  	hide_content();
    hotspot_content.style.display = 'block';
		title.innerHTML = 'Wifi Hotspot';
  });

  howto_link.addEventListener('click', function() {
  	current_content = 'howto_link';
  	hide_content();
    howto_content.style.display = 'block';
		title.innerHTML = 'Howto';
  });

  function hide_content() {
    home_content.style.display = 'none';
    stream_content.style.display = 'none';
    hotspot_content.style.display = 'none';
    howto_content.style.display = 'none';

		$( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
  }


  function set_content() {
  	console.log(current_content);
  }
}
