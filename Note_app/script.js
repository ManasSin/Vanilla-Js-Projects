const addBox = document.querySelector(".add-box"),
  popupbox = document.querySelector(".popup-box"),
  closeIcon = popupbox.querySelector("header i"),
  input = popupbox.querySelector("input"),
  textarea = popupbox.querySelector("textarea"),
  addBtn = popupbox.querySelector("button");

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
const NoteArr = JSON.parse(localStorage.getItem("notes") || "[]"); // no that we have saved the data and no we have to make cards using those data.

// ! function to make cards

function MakeNotes() {
  document.querySelectorAll(".note").forEach((NoteArr) => NoteArr.remove());
  NoteArr.forEach((each) => {
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
                <i class="uil uil-ellipsis-h"></i>
                <ul class="menu">
                    <li><i class="uil uil-pen"></i>Edit</li>
                    <li><i class="uil uil-trash"></i>Delete</li>
                </ul>
            </div>
            </div>
        </li>
        `;

    addBox.insertAdjacentHTML("afterend", note);
  });
}

addBox.addEventListener("click", () => {
  popupbox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  popupbox.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let noteTitle = input.value;
  let noteDesc = textarea.value;

  if (noteTitle || noteDesc) {
    let noteDate = new Date(),
      month = months[noteDate.getMonth()],
      day = noteDate.getDate(),
      year = noteDate.getFullYear();

    //  * making an object of new note data
    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day}, ${year}`,
    };

    // * making an array of obects which store all the data user put in to make a new note
    NoteArr.push(noteInfo);

    // ? now saving notes to local storage
    localStorage.setItem("notes", JSON.stringify(NoteArr));

    closeIcon.click();
    MakeNotes();
  }
});
