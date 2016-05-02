	var enter = document.querySelector(".login");			/* Объявление переменных */
    var modal_window = document.querySelector(".modal-window");
    var close_window = document.querySelector(".modal-window-close");
    var form = modal_window.querySelector("form");	/*?*/
    var login = modal_window.querySelector("[name=login]");
    var email = modal_window.querySelector("[name=email]");
	var letter = modal_window.querySelector("[name=letter]");
	var storage = localStorage.getItem("login");
	var storage_addres = localStorage.getItem("email");	/*?*/

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