function date(){
    var today = new Date();

    var day = today.getDay();

    var dayList = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var monthList = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]

    document.getElementById("date").innerHTML = dayList[day] + " " + date + ". " + monthList[month] + " " + year;
}
date();

function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.getElementById("clock").innerHTML = "<span>"+hours+"</span>" + ":" + "<span>"+minutes+"</span>" + ":" + "<span>"+seconds+"</span>";

    

    var time = setTimeout(function(){
        clock();
    }, 1000);
}
clock();

function contact(){
    var today = new Date();

    var day = today.getDay();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    
    if (day === 1 && hours < 8) {
        var contact = "Kontakt<br>nattevagt";
    } 
    if (day === 1 && hours == 8) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 1 && (hours >= 9 && hours <= 16)) {
        var contact = "Kontakt<br>vejleder";
    }
    if (day === 1 && (hours >= 17 && hours <= 20)) {
        var contact = "Kontakt<br>aftenvagt";
    }
    if (day === 1 && (hours >= 21 && hours <= 22)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 1 && hours >= 23) {
        var contact = "Kontakt<br>nattevagt";
    }

    if (day === 2 && hours < 8) {
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 2 && hours == 8) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 2 && (hours >= 9 && hours <= 16)) {
        var contact = "Kontakt<br>vejleder";
    }
    if (day === 2 && (hours >= 17 && hours <= 20)) {
        var contact = "Kontakt<br>aftenvagt";
    }
    if (day === 2 && (hours >= 21 && hours <= 22)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 2 && hours >= 23) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    if (day === 3 && hours < 8) {                              
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 3 && hours == 8) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 3 && (hours >= 9 && hours <= 16)) {
        var contact = "Kontakt<br>vejleder";
    }
    if (day === 3 && (hours >= 17 && hours <= 20)) {
        var contact = "Kontakt<br>aftenvagt";
    }
    if (day === 3 && (hours >= 21 && hours <= 22)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 3 && hours >= 23) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    if (day === 4 && hours < 8) {
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 4 && hours == 8) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 4 && (hours >= 9 && hours <= 16)) {
        var contact = "Kontakt<br>vejleder";
    }
    if (day === 4 && (hours >= 17 && hours <= 20)) {
        var contact = "Kontakt<br>aftenvagt";
    }
    if (day === 4 && (hours >= 21 && hours <= 22)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 4 && hours >= 23) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    if (day === 5 && hours < 8) {
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 5 && hours === 8) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 5 && (hours >= 9 && hours <= 16)) {
        var contact = "Kontakt<br>vejleder";
    }
    if (day === 5 && (hours >= 17 && hours <= 20)) {
        var contact = "Kontakt<br>aftenvagt";
    }
    if (day === 5 && hours >= 21) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    if (day === 6 && hours < 5) {
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 6 && (hours >= 5 && hours <= 10)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 6 && (hours >= 11 && hours <= 15)) {
        var contact = "Kontakt<br>dagvagt";
    }
    if (day === 6 && (hours >= 16 && hours <= 21)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 6 && hours >= 22) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    if (day === 0 && hours < 6) {
        var contact = "Kontakt<br>nattevagt";
    }
    if (day === 0 && (hours >= 6 && hours <= 10)) {
        var contact = "Kontakt<br>rådighedsvagt";
    }
    if (day === 0 && (hours >= 11 && hours <= 15)) {
        var contact = "Kontakt<br>dagvagt";
    }
    if (day === 0 && (hours >= 16 && hours <= 22)) {
        var contact = "Kontakt<br>rådighedsvagt"
    }
    if (day === 0 && hours >= 23) {
        var contact = "Kontakt<br>nattevagt";
    }
    
    document.getElementById("contact").innerHTML = contact 
}
contact();

function updateTime(k){
    if(k < 10){
        return "0" + k
    } else {
        return k;
    }
}

const divContainer = document.querySelector("#help");
let isClicked = true;

let showOrHide = function(){
    if (isClicked){
        divContainer.style.display = "block";
        isClicked = false;
    } else {
        divContainer.style.display = "none";
        isClicked = true;
    }
}