function ajax() {

	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.fail = 'Что-то пошло не так';

	let form = document.getElementsByClassName('main-form')[0],
		contactForm = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);
		statusMessage.style.color = '#fff';
		// AJAX
		let request = new XMLHttpRequest();
		request.open('POST', '../../server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// add content
				} else {
					statusMessage.innerHTML = message.fail;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			// clear input area 
			input[i].value = '';
		}
	});

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		// AJAX
		let request = new XMLHttpRequest();
		request.open('POST', '../../server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// add content
				} else {
					statusMessage.innerHTML = message.fail;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			// clear input area 
			input[i].value = '';
		}
	});

}

module.exports = ajax;