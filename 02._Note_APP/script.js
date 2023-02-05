"use strict";
// ! variable goes here
const reload = document.querySelector("#reload");
const addBtn = document.querySelector("#add-note");
const deleteBtn = document.querySelector("#delete-all");
const trashBtn = document.querySelectorAll(".delete");

let mainSection = document.querySelector("#main__section");

// * buttons inside cards
const plusBtn = document.querySelector(".add");
const truncate = document.querySelector("#truncate");

// ! functions goes here
const addNotes = () => {
  let noteCard = document.createElement("div");
  // noteCard.className = "notes";

  noteCard = `
      <div class="notes">
        <div class="note_top-bar">
          <div class="note_image">M</div>
          <div class="note_interaction">
            <button class="add"><i class="fa-solid fa-plus"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div class="line-break"></div>
        <div class="note_content">
          <textarea
            name="text-area"
            id="user-text"
            placeholder="Type your notes here"
          ></textarea>
          <div id="truncate" class="note_down_interaction">
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
  `;
  mainSection.appendChild(noteCard);

  noteCard.querySelector(".delete").addEventListener("click", function () {
    document.querySelector(".notes").remove();
  });
};

const randomColor = () => {};

const deleteNotes = () => {};

const saveNotes = () => {};

const truncateArea = () => {};

// ! interaction here
addBtn.addEventListener("click", addNotes);
