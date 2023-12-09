// selecting our elements
const numberWrap: any = document.getElementsByClassName("number-Wrap")[0];
const numberText: any = document.getElementsByClassName("number-Text")[0];
const replayBtn: any = document.getElementsByClassName("replay-Btn")[0];

// functions
const activateCountDown = (): void => {
  replayBtn.style.display = "none";
  setTimeout(() => {
    numberText.textContent = "3";
    numberText.style.color = `white`;
    numberWrap.classList.add("active");
  }, 900);

  setTimeout(() => {
    numberWrap.classList.remove("active");
    numberText.textContent = "";
  }, 1900);

  setTimeout(() => {
    numberText.textContent = "2";
    numberText.style.color = `yellow`;
    numberWrap.classList.add("active");
  }, 2900);

  setTimeout(() => {
    numberWrap.classList.remove("active");
    numberText.textContent = "";
  }, 3900);

  setTimeout(() => {
    numberText.textContent = "1";
    numberText.style.color = `blue`;
    numberWrap.classList.add("active");
  }, 4900);

  setTimeout(() => {
    numberWrap.classList.remove("active");
    numberText.textContent = "";
  }, 5900);

  setTimeout(() => {
    numberText.textContent = "GO";
    numberText.style.color = `green`;
    numberWrap.classList.add("active");
  }, 6900);

  setTimeout(() => {
    numberText.textContent = "";
    numberText.style.color = ``;
    numberWrap.classList.remove("active");
    replayBtn.style.display = "block";
  }, 7900);
};

// event lisnters
replayBtn.addEventListener("click", activateCountDown);
