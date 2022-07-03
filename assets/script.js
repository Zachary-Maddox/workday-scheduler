var globalStorage = [];
const saveBtnElArray = document.querySelectorAll(".saveBtn");
const userInputEl = document.querySelectorAll(".userInput");
var datePlaceEl = document.getElementById("datePlace");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.getElementById("datePlace").innerHTML = today;

function interfaceDisplay() {
    var currentHour = moment().hour();
    console.log(userInputEl);
    userInputEl.forEach(function (textarea) {
        console.log(textarea);
        var dataHour = textarea.getAttribute("data-hour");
        var dataHourNumber = parseInt(dataHour);
        console.log(dataHourNumber);
        if (dataHourNumber === currentHour) {
            textarea.classList.remove("future");
            textarea.classList.remove("past");
            textarea.classList.add("present");
        } else if (dataHourNumber < currentHour) {
            textarea.classList.remove("future");
            textarea.classList.remove("present");
            textarea.classList.add("past");
        } else {
            textarea.classList.remove("past");
            textarea.classList.remove("present");
            textarea.classList.add("future");
        }
    });
}
function saveEvent() {
    saveBtnElArray.forEach(function (button) {
        button.addEventListener("click", handleBtnClick);
    });
}
function handleBtnClick(e) {
    var currentTextArea = e.currentTarget.previousElementSibling;
    console.log(currentTextArea);
    var dataHour = currentTextArea.getAttribute("data-hour");
    localStorage.setItem(dataHour, currentTextArea.value);
}
function pullLocalStorage() {
    userInputEl.forEach(function (textarea) {
        console.log(textarea);
        var dataHour = textarea.getAttribute("data-hour");
        var localStoredText = localStorage.getItem(dataHour);
        textarea.value = localStoredText;
    });
}
pullLocalStorage();
saveEvent();
setInterval(interfaceDisplay, 300000);
interfaceDisplay();
