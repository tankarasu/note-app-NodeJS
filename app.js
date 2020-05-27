const notes = require("./notes");
const yargs = require("yargs");
const chalk = require("chalk");
const log = console.log;

yargs.version = "1.1.0";

//add command
yargs.command({
  command: "add",
  describe: "|-add a new note-|",
  builder: {
    title: { describe: "note title", demandOption: true, type: "string" },
    body: { describe: "note body", demandOption: true, type: "string" },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

//remove command
yargs.command({
  command: "remove",
  describe: "|-remove a  note-|",
  builder: {
    title: {
      describe: "title of the note to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNotes(argv.title),
});

//read command
yargs.command({
  command: "read",
  describe: "|- read a  note -|",
  builder: {
    title: {
      describe: "Read a specific Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//list command
yargs.command({
  command: "list",
  describe: "|- list a  note -|",
  handler: () => notes.listNotes(),
});

yargs.parse();
