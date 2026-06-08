const btnInfo = document.getElementById("btnInfo");
const infoBox = document.getElementById("infoBox");

btnInfo.addEventListener("click", () => {

    if (infoBox.style.display === "block") {
        infoBox.style.display = "none";
    } else {
        infoBox.style.display = "block";
    }

});

const model = document.querySelector("#menu3d");

let angle = 0;

setInterval(() => {

    angle += 1;

    model.setAttribute(
        "rotation",
        `0 ${angle} 0`
    );

}, 30);