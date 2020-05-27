const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatesNote = notes.find((note) => note.title === title);

  if (!duplicatesNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New note added"));
  } else {
    console.log(chalk.red.inverse("note title taken"));
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const duplicatesNote = notes.find((note) => note.title !== title);
  if (!duplicatesNote.length) {
    console.log(chalk.red.bold("No notes removed"));
    saveNotes(duplicatesNotes);
  } else console.log(chalk.green.bold("Note Sucessfully removed"));
};

const listNotes = () => {
  console.log(chalk.inverse.green(getNotes()));
  const notes = loadNotes();
  notes.forEach((element) => console.log(element.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (!noteToRead) {
    console.log(chalk.red.bold("No notes with this title"));
  } else {
    console.log(chalk.inverse.green(title));
    console.log(noteToRead.body);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
