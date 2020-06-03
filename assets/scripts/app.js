const startNewNoteBtn = document.getElementById("addNote");
const cancelNewNote = document.getElementById("cancelNewNote");
const addNewNote = document.getElementById("addNewNote");

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

class NoteList extends Note {
  notes = [];

  constructor() {
    super();
  }

  render() {
    const setNoteEl = document.getElementById("app");
    for (const note of this.notes) {
      const noteEl = document.createElement("li");
      noteEl.innerHTML = `
            <div class="float-left card m-3 border">
                <h4 class="card-header">
                    ${note.title}
                </h4>
                <div class="card-body">
                    <p>
                        ${note.content}
                    </p>
                </div>
            </div>
        `;
      setNoteEl.append(noteEl);
    }
  }

  add() {
    const titleValue = userInputs.value;
    const contentValue = userTextArea.value;

    if (titleValue.trim() === "" || contentValue.trim() === "") {
      alert("Please enter a valid Note title and content.");
      return;
    }

    const newNote = new Note(titleValue, contentValue);
    this.notes.push(newNote);

    const setNoteEl = document.getElementById("app");
    const noteEl = document.createElement("li");
    noteEl.innerHTML = `
            <div class="float-left card m-3 border">
                <h4 class="card-header">
                    ${titleValue}
                </h4>
                <div class="card-body">
                    <p>
                        ${contentValue}
                    </p>
                </div>
            </div>
        `;
    setNoteEl.append(noteEl);
    const removeModal = new NoteModal();
    removeModal.removeModal();
  }
}

const startModal = document.getElementById("add-modal");

class NoteModal {
  addModal() {
    startModal.classList.add("visible");
  }
  removeModal() {
    startModal.classList.remove("visible");
  }
}

const userInputs = startModal.querySelector("input");
const userTextArea = startModal.querySelector("textarea");

class AddNote extends NoteList {}

const newAddNote = new NoteList();
const newNoteModal = new NoteModal();

startNewNoteBtn.addEventListener("click", newNoteModal.addModal);
cancelNewNote.addEventListener("click", newNoteModal.removeModal);
addNewNote.addEventListener("click", newAddNote.add.bind(newAddNote));

const test = new NoteList();
test.render();
