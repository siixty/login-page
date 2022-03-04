// Initialize Variables
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("submit");
// Close Popup Event
closePopup.onclick = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function () {
    if (emailInput && passwordInput && emailInput.value && passwordInput.value) {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }
}