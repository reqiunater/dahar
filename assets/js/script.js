const loading = document.getElementById('loading');

const startButton = document.getElementById('startButton');

startButton.onclick = function() {
    document.getElementById('firstStart').style.display="none";
    alert('Event2')
}
startButton.onclick = function() {
    document.getElementById('loading').style.display="flex";
    document.getElementById('firstStart').style.display="none";
    document.getElementById('startButton').style.display="none";
    document.getElementById('motto').style.display="none";
    document.getElementById('hide').style.display="none";
    document.getElementById('daharStart2').style.display="inline";
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
