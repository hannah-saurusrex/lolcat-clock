var time = new Date().getHours();
var messageText;
var wakeupTime = 7;
var noon = 12;
var lunchTime = 13;
var napTime = 15;
var evening = 17;
var partyTime = 22;

if (time == wakeupTime) {
	messageText = "It's wake up time!";
} else if (time >= noon) {
	messageText = "Good afternoon!";
} else if (time == lunchTime) {
	messageText = "It's lunch time!";
} else if (time == napTime) {
    messageText = "it's nap time, baller!";
} else if (time >= evening) {
    messageText = "Good evening!";
} else (time >= partyTime) {
    messageText = "It's party time, baller!";
}

console.log(messageText);




