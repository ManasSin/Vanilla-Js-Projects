"use strict";
// ? list of things that are to do made
// todo - core feature
// * add notes from add note button and also from card within
// * delete all button
// * save notes data in local storage
// * show saved notes even after reload
// *
// todo - extra fearturs
// * random color generator
// * first letter of title
// * info will have data time while hovering

// ! variable goes here
// * aside buttons
const addNote = document.querySelector("nav #add-note"),
  deleteAll = document.querySelector("nav #delete-all"),
  reload = document.querySelector("nav #reload");

// * add-notes variable
const newNote = document.querySelector(".new-note"),
  overlay = newNote.querySelector(".overlay"),
  popup = newNote.querySelector("popup-notes"),
  addBtn = newNote.querySelector("button"),
  closeBtn = document.querySelector("#cross"),
  titleText = newNote.querySelector("input"),
  titleLabel = newNote.querySelector(".for-title"),
  descLabel = newNote.querySelector(".for-desc"),
  descText = newNote.querySelector("textarea"),
  noteHeading = newNote.querySelector(".title");

// console.log(titleLabel);
// console.log(closeBtn);

// * main section variable
const mainSection = document.querySelector("#main__section");

// ! varibale that'll push the data intp local Storage
const note = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false,
  updateId;

// ! extra functions

function randomHex() {
  return `#${Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, "0")}`;
}

// ! core function

addNote.addEventListener("click", () => {
  titleText.focus();
  newNote.classList.add("show");
  noteHeading.innerText = "Add new note";
  addBtn.innerText = "Add this note !";
  titleLabel.innerText = "Add Title";
  descLabel.innerText = "Discribe your thoghts ✍️";
  titleText.value = "";
  descText.value = "";
});

closeBtn.addEventListener("click", () => {
  isUpdate = false;
  newNote.classList.remove("show");
});

overlay.addEventListener("click", () => {
  newNote.classList.remove("show");
});

deleteAll.addEventListener("click", () => {
  let confirmDelete = confirm("You are going to delete all notes..");
  if (confirmDelete) note.splice(0, note.length);
  localStorage.setItem("notes", JSON.stringify(note));
  makeNote();
});

reload.addEventListener("click", () => {
  window.location.reload();
});

// ! function of making notes

function makeNote() {
  if (!note) return;
  document.querySelectorAll(".notes").forEach((note) => note.remove());
  note.forEach((each, index) => {
    let notes = `
    <div class="notes">
    <div class="note_top-bar">
      <div class="note_image" style="background-color: ${each.randomColor};">${each.firstLetter}</div>
      <div class="note_interaction">
        <div class="info">
          <button onclick="updateNote('${index}', '${each.title}', '${each.description}')"><i class="add fa-solid fa-pen"></i></button>
        </div>
        <button onclick="deleteNote(${index})" class="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button onclick="changeColor(\`${index}\`)" class="change-color">
          <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
    <!-- <div class="line-break"></div> -->
    <p class="note-title">${each.title}</p>
    <div class="line-break"></div>
    <div class="note_content">
      <textarea
        name="text-area"
        id="user-text"
        placeholder="Type your notes here"
        disabled
      >${each.description}</textarea>
      <div class="note_down_interaction">
        <i onmouseenter="showInfo(this)"  onmouseout="hideInfo(this)"  class="fa-solid fa-info"></i>
        <div class="note-info">
          <p>${each.date}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    mainSection.innerHTML += notes;
  });
}
makeNote();

// ! function for notes within
function updateNote(noteid, Texttitle, Textdes) {
  // console.log(noteid, Texttitle, Textdes);
  isUpdate = true;
  updateId = noteid;
  addNote.click();
  noteHeading.innerText = "Update this note";
  addBtn.innerText = "Save Updates 👍";
  titleLabel.innerText = "Update Title";
  descLabel.innerText = "Update Main content 💡";
  titleText.value = Texttitle;
  descText.value = Textdes;
}

// ! random color

function changeColor(index) {
  note[index].randomColor = randomHex();
  localStorage.setItem("notes", JSON.stringify(note));
  makeNote();
}

// * delete note
function deleteNote(noteID) {
  let sure = confirm("You are deleting this note 😳");
  if (sure) note.splice(noteID, 1);
  localStorage.setItem("notes", JSON.stringify(note));
  makeNote();
}

// * show info
function showInfo(ele) {
  ele.nextElementSibling.classList.add("show");
}

function hideInfo(ele) {
  ele.nextElementSibling.classList.remove("show");
}

// ! finally adding all to make a note
// Months array;
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

addBtn.addEventListener("click", (e) => {
  // Stoping the default behavior
  e.preventDefault();

  // taking user input and time , then adding it to an Array then pusing it to localstorage
  if (titleText) {
    let title = titleText.value;
    let firstLetter = title[0].toUpperCase();
    let desc = descText.value;
    let today = new Date(),
      day = today.getDate(),
      month = today.getMonth(),
      year = today.getFullYear(),
      time = today.getHours() + "Hrs " + today.getMinutes() + "Mins";

    const noteDate = {
      title: `${title}`,
      description: `${desc}`,
      date: `${day}, ${Months[month]} , ${year}, ${time}`,
      firstLetter: `${firstLetter}`,
      randomColor: `${randomHex()}`,
    };

    // ? putting all of this into array and storing it into local Storage ,

    if (!isUpdate) {
      note.push(noteDate); // adding when isUpdate is true
    } else {
      isUpdate = false;
      note[updateId] = noteDate;
    }

    localStorage.setItem("notes", JSON.stringify(note));

    closeBtn.click();
    makeNote();
  } else {
    alert("please fill some data");
  }
});
