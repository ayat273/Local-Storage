// Select Elements
let allSpan = document.querySelectorAll(".button span");
let result = document.querySelector(".result > span");
let theInput = document.getElementById("text");
allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      checkItem();
    }
    if (e.target.classList.contains("add")) {
      addItem();
    }
    if (e.target.classList.contains("delete")) {
      deleteItem();
    }
    if (e.target.classList.contains("show")) {
      showItem();
    }
  });
});
function showMsg() {
  result.innerHTML = "The Input Can't Be Empty";
}
function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      result.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
    } else {
      result.innerHTML = `No Local Storage Item With The Name <span> ${theInput.value}</span>`;
    }
  } else {
    showMsg();
  }
}
function addItem() {
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "Test");
    result.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  } else {
    showMsg();
  }
}
function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      result.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    } else {
      result.innerHTML = `No Local Storage Item With The Name <span> ${theInput.value}</span>`;
    }
  } else {
    showMsg();
  }
}
function showItem() {
  if (localStorage.length) {
    console.log(`Found Elements ${localStorage.length}`);
    result.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="key">${key}</span>`;
    }
  } else {
    result.innerHTML = ` Local Storage is Empty`;
  }
}
