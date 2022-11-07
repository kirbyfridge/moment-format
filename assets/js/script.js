// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("01/01/99", "MM-DD-YY");
$("#1a").text(gradDate.format("MMM Do, YYYY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("01/01/22", "MM-DD-YY").format("[Today is] dddd");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var today = moment();
var now = today.format("DDD");
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = today.format("h:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = today.format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment("1318781876", "X").format("dddd, MMMM Do YYYY, h:mm:ss");
$("#6a").text(unixFormat);

