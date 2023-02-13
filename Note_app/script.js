const addBox = document.querySelector(".add-box"),
  popupbox = document.querySelector(".popup-box"),
  popupTitle = popupbox.querySelector("header p"),
  overlay = popupbox.querySelector(".overLay"),
  closeIcon = popupbox.querySelector("header i"),
  input = popupbox.querySelector("input"),
  textarea = popupbox.querySelector("textarea"),
  addBtn = popupbox.querySelector("button");

//! months array to fetch the months name down there
const months = [
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

// ! setting NoteArr in local storage by turning it into json
const NoteArr = JSON.parse(localStorage.getItem("notes") || "[]"); // no that we have saved the data and no we have to make cards using those data.\
let isUpdate = false,
  updateId;

// ? opping new note popup box in click - to the new note addBox wrapper
addBox.addEventListener("click", () => {
  input.focus();
  popupbox.classList.add("show");
  addBtn.innerText = "Add Note";
  popupTitle.value = "Add a new note";
});

//? closing the popupBox
closeIcon.addEventListener("click", () => {
  popupbox.classList.remove("show");
  isUpdate = false;
  input.value = "";
  textarea.value = "";
});

//? using overlay on the screen to close popup box
overlay.addEventListener("click", () => {
  popupbox.classList.remove("show");
});

// ! function to make cards
function MakeNotes() {
  if (!NoteArr) return;
  document.querySelectorAll(".note").forEach((NoteArr) => NoteArr.remove());
  NoteArr.forEach((each, index) => {
    let note = `
        <li class="note">
            <div class="details">
            <p>${each.title}</p>
            <span>
                ${each.description}
            </span>
            </div>
            <div class="bottom-content">
            <span>${each.date}</span>
            <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="menu">
                    <li onclick="updateNote('${index}', '${each.title}', '${each.description}')"><i class="uil uil-pen"></i>Edit</li>
                    <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                </ul>
            </div>
            </div>
        </li>
        `;

    addBox.insertAdjacentHTML("afterend", note);
  });
}
MakeNotes();

// ! setting on right corner of the note ( making it visible )
function showMenu(ele) {
  ele.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != ele) {
      ele.parentElement.classList.remove("show");
    }
  });
}

//! delete icon - removing current note and update DOM
function deleteNote(noteID) {
  let confirmDelete = confirm("You surely want to delete this note ?");
  if (confirmDelete) {
    NoteArr.splice(noteID, 1);
    // saving updated notes to local storage
    localStorage.setItem("notes", JSON.stringify(NoteArr));
    MakeNotes();
  }
}

// ! making editable button to edit the notes
function updateNote(noteID, title, disc) {
  isUpdate = true;
  updateId = noteID;
  addBox.click();
  input.value = title;
  textarea.value = disc;
  addBtn.innerText = "Save Updates";
  popupTitle.innerText = "Update this note !";
}

//! adding data to notes
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //? taking the values Entered by user
  let noteTitle = input.value;
  let noteDesc = textarea.value;

  if (noteTitle) {
    // * date and year object which'll be displayed at the corner
    let noteDate = new Date(),
      month = months[noteDate.getMonth()],
      day = noteDate.getDate(),
      year = noteDate.getFullYear(),
      time =
        noteDate.getHours() +
        ":" +
        noteDate.getMinutes() +
        ":" +
        noteDate.getSeconds();

    //  * making an object of new note data
    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day}, ${year} (${time})`,
    };

    // * making an array of obects which store all the data user put in to make a new note
    if (!isUpdate) {
      NoteArr.push(noteInfo); // * adding notes
    } else {
      NoteArr[updateId] = noteInfo; // * updating specific notes
      isUpdate = false;
    }

    // ? now saving notes to local storage in form of JSON
    localStorage.setItem("notes", JSON.stringify(NoteArr));

    // ? closing the modal
    closeIcon.click();
    // ? making notes with user data
    MakeNotes();
  } else {
    alert("Please Enter somegthing");
  }
});

// let time = new Date();
// let timehrs =
//   time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
// // let timeMin = time.slice(11, 17);
// // console.log(timeMin.replace(":", "H ").replace(":", "M "));
// console.log(timehrs);
