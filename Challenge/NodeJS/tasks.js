//creating a list stores the tasks
// let arr = ["doing NodeJs", "doing community project"];
let arr = [
  {
    text: "Doing NodeJs",
    done: true
  },
  {
    text: "Doing community project",
    done: false
  }
];
/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.startsWith(`hello`)) {
    hello(text.trim());
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (text.startsWith("add")) {
    add(text);
  } else if (text.startsWith("remove")) {
    remove(text);
  } else if (text.startsWith("edit")) {
    edit(text);
  } else {
    unknownCommand(text);
  }
}

/*
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 * @param {string} text the text received
 * @returns {void}
 */
function hello(text) {
  console.log(`${text}!`);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 *show all the available commands
 *@returns {void}
 */
function help() {
  console.log(`
hello: enter any text starts with 'hello' word to output it with '!' symbol.
quit:           to end the app.
exit:           to end the app.
help:           to show all available commands.
add:            to add new a task.
remove:         to remove the last task.
remove '#task': to remove a specific task. 
`);
}

/**
 *list
 *@returns {void}
 */
function list() {
  arr.map((element, index) => {
    let dn = "[✔ ]";
    let ndn = "[ ]";
    if (element.done) console.log(`${++index} - ${dn} ${element.text}`);
    else console.log(`${++index} - ${ndn}  ${element.text}`);
  });
}
/**
 * add
 * @returns {void}
 * @param {text}
 */
function add(text) {
  let task = text.split(" ");
  if (task.length === 1) console.log("Err, no task to be added");
  else {
    let item = "";
    for (let i = 1; i < task.length; i++) {
      item += task[i] + " ";
    }
    arr.push({
      text: item.trim(),
      done: false
    });
  }
}
/**
 * remove
 * @param {text}
 * @returns {void}
 */
function remove(text) {
  let task = text.split(" ");
  if (task.length === 1) {
    --arr.length;
  } else {
    let index = parseInt(task[1]) - 1;
    if (index > arr.length - 1) console.log("No task exists");
    else {
      arr[index] = "";
      let temp;
      for (let i = index; i < arr.length; ) {
        arr[i] = arr[++i];
      }
      arr.length--;
    }
  }
}
/**
 * edit
 */
function edit(text) {
  let task = text.split(" ");
  if (task.length === 1) {
    console.log("Error!");
  } else {
    let index = parseInt(task[1]) - 1;
    let content = "";
    for (let i = 2; i < task.length; i++) content += task[i] + " ";
    arr[index].text = content.trim();
  }
}
// The following line starts the application
startApp("Oussama AlGhamyan");
