// funktioniert noch immer nicht, aber mit Fragen für Mittwoch versehen
window.addEventListener("load", function () {
    var samp = [new Audio("Audio/C.mp3"), new Audio("Audio/F.mp3"), new Audio("Audio/G.mp3"),
        new Audio("Audio/Hi_Hat.mp3"), new Audio("Audio/Kick.mp3"), new Audio("Audio/Snare1.mp3"),
        new Audio("Audio/Snare2.mp3"), new Audio("Audio/Laugh1.mp3"), new Audio("Audio/Laugh2.mp3")];
    var beat = [new Audio("Audio/Hi_Hat.mp3"), new Audio("Audio/Kick.mp3"), new Audio("Audio/Snare1.mp3"),
        new Audio("Audio/Snare2.mp3")];
    var i = 0;
    var buttons = document.querySelector(".buttons");
    document.querySelector(".b1").addEventListener("click", function () { playSample(samp[0]); }); // warum streicht er mir hier das rot an?
    document.querySelector(".b2").addEventListener("click", function () { playSample(samp[1]); });
    document.querySelector(".b3").addEventListener("click", function () { playSample(samp[2]); });
    document.querySelector(".b4").addEventListener("click", function () { playSample(samp[3]); });
    document.querySelector(".b5").addEventListener("click", function () { playSample(samp[4]); });
    document.querySelector(".b6").addEventListener("click", function () { playSample(samp[5]); });
    document.querySelector(".b7").addEventListener("click", function () { playSample(samp[6]); });
    document.querySelector(".b8").addEventListener("click", function () { playSample(samp[7]); });
    document.querySelector(".b9").addEventListener("click", function () { playSample(samp[8]); });
    // die eine zentrale Funtion, mit der die Samples abgespielt werden
    samp.forEach(playSample); // ich verstehe die hierzu abgegebene Erklärung nicht
    function playSample(samp) {
        while (i < beat.length) {
            samp[i].play();
            i++;
        }
    }
    // Play-Button (Beat)
    document.querySelector(".fas fa-play-circle").addEventListener("click", function () {
        playBeat(beat, 0); // was soll denn dann hier in die Klanmnmer rein?
        function playBeat(beat) {
            while (beat[i] == 0) {
                beat[i].play();
                i++;
            }
        }
        // Tausch Play- gegen Stop-Button
        function Buttontausch() {
            if (buttons.getAttribute("class") == "fas fa-stop-circle") {
                buttons.setAttribute("class", "fas fa-play-circle");
            }
            else {
                buttons.setAttribute("class", "fas fa-stop-circle");
                if (buttons.getAttribute("class") == "fas fa-play-circle") {
                    beat.pause();
                } // warum funktioniert das dann bei meinem Kommilitonen?
            }
            // Remix
            function remix(beat) {
                for (var i = 0; i <= beat.length - 1; i++) {
                    beat[i] = playBeat[Math.floor(Math.random() * 5)];
                }
            }
            // Delete-Funktion
            function deleteBeat() {
                beat.length = 0;
                i = 0;
            }
        }
    });
}); // was stimmt hier nicht? ist das Ende vom window.addEventlistener
//# sourceMappingURL=typescript8.js.map