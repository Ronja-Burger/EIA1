window.addEventListener("load", function () {
    var samp = [new Audio("Audio/C.mp3"), new Audio("Audio/F.mp3"), new Audio("Audio/G.mp3"),
        new Audio("Audio/Hi_Hat.mp3"), new Audio("Audio/Kick.mp3"), new Audio("Audio/Snare1.mp3"),
        new Audio("Audio/Snare2.mp3"), new Audio("Audio/Laugh1.mp3"), new Audio("Audio/Laugh2.mp3")];
    var beat = [new Audio("Audio/Hi_Hat.mp3"), new Audio("Audio/Kick.mp3"), new Audio("Audio/Snare1.mp3"),
        new Audio("Audio/Snare2.mp3")];
    let i = 0;
    let Intervall;
    var Remix;
    function playBeat(beat) {
        while (beat[i] == 0) {
            beat[i].play();
            i++;
        }
    }
    // die eine zentrale Funtion, mit der die Samples abgespielt werden
    function playSample(sample) {
        var samp = new Audio(sample);
        samp.play();
    }
    document.querySelector(".b1").addEventListener("click", function () { samp[0].play(); }); // Lisa sagt, ich kann das Abspielen der Töne so machen, wie in A7 - aber ich soll doch nur eimal .play benutzen? 
    document.querySelector(".b2").addEventListener("click", function () { samp[1].play(); });
    document.querySelector(".b3").addEventListener("click", function () { samp[2].play(); });
    document.querySelector(".b4").addEventListener("click", function () { samp[3].play(); });
    document.querySelector(".b5").addEventListener("click", function () { samp[4].play(); });
    document.querySelector(".b6").addEventListener("click", function () { samp[5].play(); });
    document.querySelector(".b7").addEventListener("click", function () { samp[6].play(); });
    document.querySelector(".b8").addEventListener("click", function () { samp[7].play(); });
    document.querySelector(".b9").addEventListener("click", function () { samp[8].play(); });
    // Play-Button (Beat) & Tausch Play- gegen Stop-Button -> funktioniert nicht
    document.getElementById("#play").addEventListener("click", function () { IntervallStart(); });
    document.getElementById("#stop").addEventListener("click", function () { IntervallStop(); });
    function IntervallStart() {
        if (document.getElementById("play").getAttribute("class") == "fas fa-play-circle") {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            Intervall = setInterval(() => {
                playSample(beat);
            }, 500);
        }
        else {
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            Intervall.clearInterval();
        }
        function playBeat(beat) {
            while (beat[i] == 0) {
                beat[i].play();
                i++;
            }
        }
    }
    function IntervallStop() {
        Intervall.clearInterval();
        i = 0;
    }
    /*
    // Tausch Play- gegen Stop-Button alt
    
    
    function Buttontausch(): void {
        if (buttons.getAttribute("class") == "fas fa-stop-circle") {
            buttons.setAttribute("class", "fas fa-play-circle");
            window.setInterval( playBeat);
        }
        else {
            buttons.setAttribute("class", "fas fa-stop-circle");
            if (buttons.getAttribute("class") == "fas fa-play-circle") { beat.pause(); } // warum funktioniert das dann bei meinem Kommilitonen?
            clearInterval();
        }
    */
    // Remix
    function remix(beat) {
        for (var i = 0; i <= beat.length - 1; i++) {
            beat[i] = playBeat[Math.floor(Math.random() * 5)];
        }
    }
    document.getElementById("#remix").addEventListener("click", function () { remix(beat); });
    // Delete-Funktion
    function deleteBeat() {
        beat.length = 0;
    }
    document.getElementById("#trash").addEventListener("click", function () { deleteBeat(); });
});
//# sourceMappingURL=typescript8.js.map