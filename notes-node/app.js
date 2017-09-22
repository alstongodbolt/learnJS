console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();

// fs.appendFileSync('greetings1.txt', `Hello ${user.username}! You are ${notes.age}.`);

var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(9, -2));