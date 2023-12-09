// selecting our elements
var numberWrap = document.getElementsByClassName("number-Wrap")[0];
var numberText = document.getElementsByClassName("number-Text")[0];
var replayBtn = document.getElementsByClassName("replay-Btn")[0];
// functions
var activateCountDown = function () {
    replayBtn.style.display = "none";
    setTimeout(function () {
        numberText.textContent = "3";
        numberText.style.color = "white";
        numberWrap.classList.add("active");
    }, 900);
    setTimeout(function () {
        numberWrap.classList.remove("active");
        numberText.textContent = "";
    }, 1900);
    setTimeout(function () {
        numberText.textContent = "2";
        numberText.style.color = "yellow";
        numberWrap.classList.add("active");
    }, 2900);
    setTimeout(function () {
        numberWrap.classList.remove("active");
        numberText.textContent = "";
    }, 3900);
    setTimeout(function () {
        numberText.textContent = "1";
        numberText.style.color = "blue";
        numberWrap.classList.add("active");
    }, 4900);
    setTimeout(function () {
        numberWrap.classList.remove("active");
        numberText.textContent = "";
    }, 5900);
    setTimeout(function () {
        numberText.textContent = "GO";
        numberText.style.color = "green";
        numberWrap.classList.add("active");
    }, 6900);
    setTimeout(function () {
        numberText.textContent = "";
        numberText.style.color = "";
        numberWrap.classList.remove("active");
        replayBtn.style.display = "block";
    }, 7900);
};
// event lisnters
replayBtn.addEventListener("click", activateCountDown);
