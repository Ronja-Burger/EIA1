// ja, es funktioniert noch nicht alles, aber ich habe moch für Montag schon mit Christian verabredet

window.addEventListener ("load", function () {

var samp = [new Audio("Audio/C.mp3"), new Audio("Audio/F.mp3"), new Audio("Audio/G.mp3"),
new Audio("Audio/Hi_Hat.mp3"), new Audio("Audio/Kick.mp3"), new Audio("Audio/Snare1.mp3"),
new Audio("Audio/Snare2.mp3"), new Audio("Audio/Laugh1.mp3"), new Audio("Audio/Laugh2.mp3")];

document.querySelector(".b1").addEventListener("click", function () {playSample(samp[0]); });
document.querySelector(".b2").addEventListener("click", function () {playSample(samp[1]); });
document.querySelector(".b3").addEventListener("click", function () {playSample(samp[2]); });
document.querySelector(".b4").addEventListener("click", function () {playSample(samp[3]); });
document.querySelector(".b5").addEventListener("click", function () {playSample(samp[4]); });
document.querySelector(".b6").addEventListener("click", function () {playSample(samp[5]); });
document.querySelector(".b7").addEventListener("click", function () {playSample(samp[6]); });
document.querySelector(".b8").addEventListener("click", function () {playSample(samp[7]); });
document.querySelector(".b9").addEventListener("click", function () {playSample(samp[8]); });




// die eine zentrale Funtion, mit der die Samples abgespielt werden
function playSample () {
for (let index: number = 0; index <= 8; index++) {
    samp[index].play();
}}




// Play-Button (Beat)
document.querySelector(".fas fa-play-circle").addEventListener("click", function () { playBeat(); });
function playBeat () {
    for (let index2: number = 3; index2 <= 6; index2++) {
        samp[index2].play();
    }}




// Tausch Play- gegen Stop-Button - noch zu klären
document.querySelector(".buttons2").setAttribute = (<i class= "fas fa-stop-circle" id = "stop"></i>);




// Remix
function playSample () {
    for (let index: number = (Math.random() * 100); index <= 100; index++) {
        samp[index].play();
    }}



// Delete-Funktion
function deleteBeat() {
    document.querySelector(".fas fa-trash-alt").addEventListener("click", function () { playInterval(); });
    var index: number = 3;
    var Interval: number = setInterval(playInterval, 250);
    function playInterval() { 
    if (!playBeat) {
        clearInterval(Interval);
    }
    else if (index >= 8) {
        index = 0;
        playBeat([samp[index]]);
    }
    else {
        playBeat([samp[index]]);
    }  index++; }
}
});