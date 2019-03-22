$(document).ready(function() {

    var time = new Date().getHours();
    var noon = 12;
    var evening = 18; // 6PM
    var wakeupTime = 9; // 9AM
    var lunchTime = 12; // 12PM
    var partyTime = 17; // 5PM
    var napTime = lunchTime + 3; // 2PM
    var partyImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    var napImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    var lunchImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    var wakeupImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";

    var lolcatImage = document.getElementById("lolcatImage");
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";

    var showMeTheLolcat = function () {
        lolcatImage.src = image;
        prompt = ("Are you sure you want to see the LOLcat?");
    };

    $("#lolcatButton").click()


    var updateClock = function() {
        var lolcat = document.getElementById('lolcat');
        var message = document.getElementById('timeEvent');
        var messageText;
        var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

        if (time == partyTime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg"
            messageText = "IZ PARTEE TIME!!";
        } else if (time == napTime) {
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"
            messageText = "IZ NAP TIME...";
        } else if (time == lunchTime) {
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"
            messageText = "IZ NOM NOM NOM TIME!!";
        } else if (time == wakeupTime) {
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
            messageText = "IZ TIME TO GETTUP.";
        } else if (time < noon) {
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"
            messageText = "Good morning!";
        } else if (time > evening) {
            messageText = "Good Evening!";
        } else {
            messageText = "Good afternoon!";
        }
        
            message.innerText = messageText;    
            lolcat.src = image;

            showCurrentTime();
    };

    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById('clock');
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // set hours
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }
        // set minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // set seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ":" +  minutes + ":" + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };


    updateClock();
    var oneSecond = 1000;
    setInterval(updateClock, oneSecond);


    // party time button function
    var partyTimeButton = document.getElementById("partyTimeButton");
    var isPartyTime = false;

    var partyEvent = function() {
        if (isPartyTime === false) {
            isPartyTime = true;
            time = partyTime;
            partyTimeButton.innerText = "Party Time!";
            partyTimeButton.style.backgroundColor = "#222";
        } else {
            isPartyTime = false;
            time = new Date().getHours();
            partyTimeButton.innerText = "This party is over.";
            partyTimeButton.style.backgroundColor = "#0A8DAB";
        }
    };

    // partyTimeButton.addEventListener("click", partyEvent);
    $("#partyTimeButton").click(partyEvent);

    var napTimeSelector = document.getElementById("napTimeSelector");
    var lunchTimeSelector = document.getElementById("lunchTimeSelector")
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

    var wakeUpEvent = function() {
        wakeupTime = wakeUpTimeSelector.value;
    };

    var lunchEvent = function() {
        lunchTime = lunchTimeSelector.value;
    };

    var napEvent = function () {
        napTime = napTimeSelector.value;
    };

    // $("#wakeUpTimeSelector").click(wakeUpEvent);
    wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
    // $("#lunchTimeSelector").click(lunchEvent);
    lunchTimeSelector.addEventListener('change', lunchEvent);
    // $("#napTimeSelector").click(napEvent);
    napTimeSelector.addEventListener('change', napEvent);

});