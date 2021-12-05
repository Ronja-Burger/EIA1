window.addEventListener ('load', function (){

    var samp = [new Audio('Audio/C.mp3'), new Audio('Audio/F.mp3'), new Audio('Audio/G.mp3'),
    new Audio('Audio/Hi_Hat.mp3'), new Audio('Audio/Kick.mp3'), new Audio('Audio/Snare1.mp3'),
    new Audio('Audio/Snare2.mp3'), new Audio('Audio/Laugh1.mp3'), new Audio('Audio/Laugh2.mp3'),
    new Audio('Audio/.mp3')];
    var Beat = [samp[4], samp[5], samp[6], samp[7]];
    
    document.querySelector(".b1").addEventListener("click", function () {playSample(samp[0])});
    document.querySelector(".b2").addEventListener("click", function () {playSample(samp[1])});
    document.querySelector(".b3").addEventListener("click", function () {playSample(samp[2])});
    document.querySelector(".b4").addEventListener("click", function () {playSample(samp[3])});
    document.querySelector(".b5").addEventListener("click", function () {playSample(samp[4])});
    document.querySelector(".b6").addEventListener("click", function () {playSample(samp[5])});
    document.querySelector(".b7").addEventListener("click", function () {playSample(samp[6])});
    document.querySelector(".b8").addEventListener("click", function () {playSample(samp[7])});
    document.querySelector(".b9").addEventListener("click", function () {playSample(samp[8])});
    
    for (let i = 3; i <= 6; i++) {
        var samp = new Audio();
        samp[i].play();
        
    }
    
    // Play-Button
    document.querySelector(".play").addEventListener("click", function () { playBeat()});
    var beatPlaying: boolean = false;
    
    
    function playBeat() {
        document.getElementsByClass("play").setAttribute("img src=");
        var index = 0;
        var Interval = setInterval(playInterval, 250);
        function playInterval() { if (!beatPlaying) {
            clearInterval(Interval);
        }
        else if (index >= Beat.length) {
            index = 0;
            playSample([Beat[index]]);
        }
        else {
            playSample([Beat[index]]);
        } ; index++; }
        console.log(Beat);
    }
    });