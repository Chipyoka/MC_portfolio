// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

window.onload = function () {
	const notification = document.getElementById("notification");
	notification.classList.add("show");

	// code for hiding the notification after 5 seconds
	setTimeout(() => {
		notification.classList.remove("show");
	}, 8000);
};
