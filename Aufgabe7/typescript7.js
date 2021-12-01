window.addEventListener('load', function () {
    var samp = [new Audio('Audio/C.mp3'), new Audio('Audio/F.mp3'), new Audio('Audio/G.mp3'),
        new Audio('Audio/Hi_Hat.mp3'), new Audio('Audio/Kick.mp3'), new Audio('Audio/Snare1.mp3'),
        new Audio('Audio/Snare2.mp3'), new Audio('Audio/Laugh1.mp3'), new Audio('Audio/Laugh2.mp3'),
        new Audio('Audio/.mp3')];
    document.querySelector(".b1").addEventListener("click", function () { samp[0].play(); });
    document.querySelector(".b2").addEventListener("click", function () { samp[1].play(); });
    document.querySelector(".b3").addEventListener("click", function () { samp[2].play(); });
    document.querySelector(".b4").addEventListener("click", function () { samp[3].play(); });
    document.querySelector(".b5").addEventListener("click", function () { samp[4].play(); });
    document.querySelector(".b6").addEventListener("click", function () { samp[5].play(); });
    document.querySelector(".b7").addEventListener("click", function () { samp[6].play(); });
    document.querySelector(".b8").addEventListener("click", function () { samp[7].play(); });
    document.querySelector(".b9").addEventListener("click", function () { samp[8].play(); });
    document.querySelector(".play").addEventListener("click", function () { playSample(samp[4], samp[5], samp[6]); });
    function playSample(ton, snare, hihat) {
        setInterval(function () { ton.play(); }, 0);
        setInterval(function () { snare.play(); }, 1000);
        setInterval(function () { hihat.play(); }, 2000);
    }
});
//# sourceMappingURL=typescript7.js.map