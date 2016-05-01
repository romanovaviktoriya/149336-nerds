	var enter = document.querySelector(".login");			/* Объявление переменных */
    var modal_window = document.querySelector(".modal-window");
    var close_window = document.querySelector(".modal-window-close");
    var form = modal_window.querySelector("form");
    var login = modal_window.querySelector("[name=login]");
    var e-mail = modal_window.querySelector("[name=e-mail]");
	var letter = modal_window.querySelector("[name=letter]");
	var storage = localStorage.getItem("login");
	var storage_addres = localStorage.getItem("letter");

	enter.addEventListener("click", function(event) {	/* Клик по ссылке Вход */
	event.preventDefault();
	modal_window.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		e-mail.focus();
		
		if (storage_addres) {
			e-mail.value = storage;
			letter.focus();
		} else {
			e-mail.focus();
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
	if (!(login.value && e-mail.value)) {
		event.preventDefault();
		modal_window.classList.remove("modal-error");
		modal_window.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
	});