	var enter = document.querySelector(".login");			/* Объявление переменных */
    var modal_window = document.querySelector(".modal-window");
    var close_window = document.querySelector(".modal-window-close");
    var form = modal_window.querySelector("form");
    var login = modal_window.querySelector("[name=login]");
    var email = modal_window.querySelector("[name=email]");
	var letter = modal_window.querySelector("[name=letter]");
	var storage = localStorage.getItem("login");
	var storage_addres = localStorage.getItem("email");	

	enter.addEventListener("click", function(event) {	/* Клик по ссылке Вход */
	event.preventDefault();
	modal_window.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		email.focus();
		
		if (storage_addres) {
			email.value = storage;
			letter.focus();
		} else {
			email.focus();
		}
	
	} else {
		login.focus();
	}
	});

	close_window.addEventListener("click", function(event) {	/* Клик по закрывающему крестику */
	event.preventDefault();
	modal_window.classList.remove("modal-show");
	});

	form.addEventListener("submit", function(event) {			/* Авторизация */
	if (!(login.value && email.value)) {
		event.preventDefault();
		modal_window.classList.remove("modal-error");
		modal_window.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
	});
	
//---------------------------------------------------------------------------------------------------
	
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 59.9387, lng: 30.3228} 
  });

  var image = {
    url: 'img/marker_map.png',
    // This marker is 182 pixels wide by 190 pixels high.
    size: new google.maps.Size(182, 190),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (30, 180).
    anchor: new google.maps.Point(30, 180)
}
var marker = new google.maps.Marker({
      position: {lat: 59.9387977, lng: 30.3228048},
      map: map,
      icon: image
	  });
  }
