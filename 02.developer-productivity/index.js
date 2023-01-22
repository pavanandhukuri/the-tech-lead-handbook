const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sayHello() {
  readline.question("> What's your name?\n", (name) => {
    console.log('> Hello ' + name + '!');
    readline.close();
  });
}

sayHello();
