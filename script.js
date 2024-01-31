var popup = document.getElementById("popup");
var openPopup = document.getElementById("openpopup");
var closePopup = document.getElementById("closepupop");



openPopup.addEventListener("click", function(){
    // popup.classList.add("open-popup");
    $(".popup").addClass("open-popup");
})


closePopup.addEventListener("click", function() {
    // popup.classList.remove("open-popup");
    $(".popup").removeClass("open-popup");
})
