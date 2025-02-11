// Mensajes que se mostrarán en el botón "No"
var noClickCount = 0;
var noMessages = [
    "Vamos pastelito :(",
    "En serio, segura?",
    "De verdad, piénsalo bien...",
    "Última oportunidad 💔",
    "Me moriréee!",
    "Me morí x_x",
    "Noooooooo ;c"
];

function selectOption(option) {
    if (option === "yes") {
        flashRainbowColors(function () {
            document.getElementById("question").style.display = "none"; // Ocultar pregunta
            displayCatHeart(); // Mostrar imagen

            // Mostrar mensaje con la fuente Sacramento
            displayMessage("Sabía que dirías que sí");
        });
    } else if (option === "no") {
        if (noClickCount < noMessages.length) {
            document.getElementById("no-button").innerText = noMessages[noClickCount];
            noClickCount++;
        }

        var yesButton = document.getElementById("yes-button");
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue("font-size");
        var newSize = parseFloat(currentFontSize) * 1.5;
        yesButton.style.fontSize = newSize + "px";
    } else {
        alert("Opción inválida.");
    }
}

function flashRainbowColors(callback) {
    var colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = "";
        if (callback) callback();
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById("image-container");
    var catImage = new Image();
    catImage.src = "cat.gif";
    catImage.alt = "Cat";
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById("image-container").innerHTML = "";
    var imageContainer = document.getElementById("image-container");
    var catHeartImage = new Image();
    catHeartImage.src = "cat-heart.gif";
    catHeartImage.alt = "Cat Heart";
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById("options").style.display = "none";
    };
}

// Nueva función para mostrar el mensaje
function displayMessage(text) {
    var messageContainer = document.createElement("div");
    messageContainer.innerText = text;
    messageContainer.style.fontFamily = "'Sacramento', cursive";
    messageContainer.style.fontSize = "48px";
    messageContainer.style.color = "#ff1493";
    messageContainer.style.textAlign = "center";
    messageContainer.style.marginTop = "20px";

    document.body.appendChild(messageContainer);
}

// Asegurar que la función selectOption está disponible en el HTML
window.selectOption = selectOption;

displayCat();
