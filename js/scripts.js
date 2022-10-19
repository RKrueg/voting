
window.onload = function () {
	const form = document.querySelector("form");
	form.onsubmit = function (event) {
		event.preventDefault();


		let olderThan18 = document.getElementById('older');
		olderThan18.setAttribute("class", "hidden");
		let youngerThan18 = document.getElementById('younger');
		youngerThan18.setAttribute("class", "hidden");

		const age = parseInt(document.querySelector("input#age").value);

		if (age > 18) {
			olderThan18.removeAttribute("class");
		}
		else if (age < 18) {
			youngerThan18.removeAttribute("class");
		}
	};
}

