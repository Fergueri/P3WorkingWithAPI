function ironClick() {
    var chartContainer = document.getElementById("chartContainer");
    var chartContainer2 = document.getElementById("chartContainer2");
    var chartContainer3 = document.getElementById("chartContainer3");
    var oldCanvas = document.getElementsByClassName("canvas1")[0];
    var oldCanvas2 = document.getElementsByClassName("canvas2")[0];
    var oldCanvas3 = document.getElementsByClassName("canvas3")[0];
    chartContainer.removeChild(oldCanvas);
    chartContainer2.removeChild(oldCanvas2);
    chartContainer3.removeChild(oldCanvas3);

    var newCanvas = document.createElement("canvas");
    var newCanvas2 = document.createElement("canvas");
    var newCanvas3 = document.createElement("canvas");
    newCanvas.id = "championPickR1";
    newCanvas2.id = "championWinR1";
    newCanvas3.id = "championBanR1";
    newCanvas.className = "canvas1";
    newCanvas2.className = "canvas2";
    newCanvas3.className = "canvas3";
    chartContainer.appendChild(newCanvas);
    chartContainer2.appendChild(newCanvas2);
    chartContainer3.appendChild(newCanvas3);
    var titleWords = document.getElementById("title");
    titleWords.innerHTML = "League of Legends Champion Stats in Iron";
    var chartColors = document.getElementsByClassName("backgroundChart");
    for (var i = 0; i < chartColors.length; i++) {
        chartColors[i].style.backgroundColor = "#4C443D";
    }
    ironGraphs();
}
function goldClick() {
    var chartContainer = document.getElementById("chartContainer");
    var chartContainer2 = document.getElementById("chartContainer2");
    var chartContainer3 = document.getElementById("chartContainer3");
    var oldCanvas = document.getElementsByClassName("canvas1")[0];
    var oldCanvas2 = document.getElementsByClassName("canvas2")[0];
    var oldCanvas3 = document.getElementsByClassName("canvas3")[0];
    chartContainer.removeChild(oldCanvas);
    chartContainer2.removeChild(oldCanvas2);
    chartContainer3.removeChild(oldCanvas3);

    var newCanvas = document.createElement("canvas");
    var newCanvas2 = document.createElement("canvas");
    var newCanvas3 = document.createElement("canvas");
    newCanvas.id = "championPickR2";
    newCanvas2.id = "championWinR2";
    newCanvas3.id = "championBanR2";
    newCanvas.className = "canvas1";
    newCanvas2.className = "canvas2";
    newCanvas3.className = "canvas3";
    chartContainer.appendChild(newCanvas);
    chartContainer2.appendChild(newCanvas2);
    chartContainer3.appendChild(newCanvas3);
    var titleWords = document.getElementById("title");
    titleWords.innerHTML = "League of Legends Champion Stats in Gold";
    var chartColors = document.getElementsByClassName("backgroundChart");
    for (var i = 0; i < chartColors.length; i++) {
        chartColors[i].style.backgroundColor = "#877666";
    }
    goldGraphs();
}
function masClick() {
    var chartContainer = document.getElementById("chartContainer");
    var chartContainer2 = document.getElementById("chartContainer2");
    var chartContainer3 = document.getElementById("chartContainer3");
    var oldCanvas = document.getElementsByClassName("canvas1")[0];
    var oldCanvas2 = document.getElementsByClassName("canvas2")[0];
    var oldCanvas3 = document.getElementsByClassName("canvas3")[0];
    chartContainer.removeChild(oldCanvas);
    chartContainer2.removeChild(oldCanvas2);
    chartContainer3.removeChild(oldCanvas3);

    var newCanvas = document.createElement("canvas");
    var newCanvas2 = document.createElement("canvas");
    var newCanvas3 = document.createElement("canvas");
    newCanvas.id = "championPickR3";
    newCanvas2.id = "championWinR3";
    newCanvas3.id = "championBanR3";
    newCanvas.className = "canvas1";
    newCanvas2.className = "canvas2";
    newCanvas3.className = "canvas3";
    chartContainer.appendChild(newCanvas);
    chartContainer2.appendChild(newCanvas2);
    chartContainer3.appendChild(newCanvas3);
    var titleWords = document.getElementById("title");
    titleWords.innerHTML = "League of Legends Champion Stats in Master";
    var chartColors = document.getElementsByClassName("backgroundChart");
    for (var i = 0; i < chartColors.length; i++) {
        chartColors[i].style.backgroundColor = "#6D4778";
    }
    masGraphs();
}
function avgClick() {
    var chartContainer = document.getElementById("chartContainer");
    var chartContainer2 = document.getElementById("chartContainer2");
    var chartContainer3 = document.getElementById("chartContainer3");
    var oldCanvas = document.getElementsByClassName("canvas1")[0];
    var oldCanvas2 = document.getElementsByClassName("canvas2")[0];
    var oldCanvas3 = document.getElementsByClassName("canvas3")[0];
    chartContainer.removeChild(oldCanvas);
    chartContainer2.removeChild(oldCanvas2);
    chartContainer3.removeChild(oldCanvas3);

    var newCanvas = document.createElement("canvas");
    var newCanvas2 = document.createElement("canvas");
    var newCanvas3 = document.createElement("canvas");
    newCanvas.id = "championPickR4";
    newCanvas2.id = "championWinR4";
    newCanvas3.id = "championBanR4";
    newCanvas.className = "canvas1";
    newCanvas2.className = "canvas2";
    newCanvas3.className = "canvas3";
    chartContainer.appendChild(newCanvas);
    chartContainer2.appendChild(newCanvas2);
    chartContainer3.appendChild(newCanvas3);
    var titleWords = document.getElementById("title");
    titleWords.innerHTML = "Averaged League of Legends Champion Stats";
    var chartColors = document.getElementsByClassName("backgroundChart");
    for (var i = 0; i < chartColors.length; i++) {
        chartColors[i].style.backgroundColor = "#464D77";
    }
    avgGraphs();
}