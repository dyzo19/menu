// script.js
function togglePopup(popupId) {
    var popup = document.getElementById(popupId);

    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }

    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        if (popups[i].id !== popupId) {
            popups[i].style.display = "none";
        }
    }
}
