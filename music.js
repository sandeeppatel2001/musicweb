let h = document.querySelector("h1");
h.addEventListener("click", inputMsg());
function inputMsg() {
  let name = prompt("what is your name");
  h.textContent = "Welcome! " + name;
}

function togglehide1() {
  let s = document.getElementById("p1");
  if (s.style.display != "none") {
    s.style.display = "none";
  } else {
    s.style.display = "block";
  }
}

function togglehide2() {
  let s = document.getElementById("p2");
  if (s.style.display != "none") {
    s.style.display = "none";
  } else {
    s.style.display = "block";
  }
}
function togglehide3() {
  let s = document.getElementById("p3");
  if (s.style.display != "none") {
    s.style.display = "none";
  } else {
    s.style.display = "block";
  }
}
