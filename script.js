const body = document.querySelector("body");
const time = document.querySelector(".time");
const greeting = document.querySelector(".greet");
const yourName = document.querySelector(".name");
const fortoday = document.querySelector(".fortoday");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  // 12 hour format
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(minute)}`;
  setInterval(showTime, 1000);
}

// add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// greetings and bg image according to time

function setBgGreet() {
  let today = new Date();
  let hours = today.getHours();

  if (hours < 12) {
    body.style.backgroundImage = "url(img/morning.jpg)";
    greeting.textContent = "Good Morning,";
  } else if (hours < 18) {
    body.style.backgroundImage = "url(img/afternoon.jpg)";
    greeting.textContent = "Good Afternoon,";
  } else if (hours < 21) {
    body.style.backgroundImage = "url(img/evening.jpg)";
    greeting.textContent = "Good Evening,";
  } else {
    body.style.backgroundImage = "url(img/goodnight.jpg)";
    greeting.textContent = "Good Night,";
  }
}

// setting and getting name to local storage
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      yourName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getName() {
  if (localStorage.getItem("name") == null) {
    yourName.textContent = "[Enter Name]";
  } else {
    yourName.textContent = localStorage.getItem("name");
  }
}

// setting and getting forToday to local storage
function setToDo(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("todo", e.target.innerText);
      fortoday.blur();
    }
  } else {
    localStorage.setItem("todo", e.target.innerText);
  }
}

function getTodo() {
  if (localStorage.getItem("todo") == null) {
    fortoday.textContent = "[What you main focus for today?]";
  } else {
    fortoday.textContent = localStorage.getItem("todo");
  }
}

// add event listener
yourName.addEventListener("keypress", setName);
yourName.addEventListener("blur", setName);
fortoday.addEventListener("keypress", setToDo);
fortoday.addEventListener("blur", setToDo);

// run
showTime();
setBgGreet();
getName();
getTodo();
