/* Variáveis */
// Others
const pathOpenWindowImage = "images/img_janela_aberta.png";
const pathClosedWindowImage = "images/img_janela_fechada.png";
const pathBrokenWindowImage = "images/img_janela_quebrada.png";
const mainId = "main";
const windowId = "window";
const openWindowText = "Janela Aberta";
const closedWindowText = "Abra a janela";
const brokenWindowText = "Janela Quebrada";

// Elements screen
const mainElement = document.getElementById(mainId);

/* Main Functions */
function addEvents() {
    closeWindow();
}

function openWindow() {
    executeAction(pathOpenWindowImage, openWindowText)
}

function closeWindow() {
    executeAction(pathClosedWindowImage, closedWindowText)
}

function brokenWindow(event) {
    if (event.detail === 2) {
        executeAction(pathBrokenWindowImage, brokenWindowText)
    }
}

function executeAction(sourcePath, text) {
    document.getElementById(windowId).src = sourcePath;
    mainElement.innerHTML = text;
}

/* Init program */
addEvents();