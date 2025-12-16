const image = document.getElementById("myImage");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

image.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
