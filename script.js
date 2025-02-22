var canzone1 = {
    titolo: "Il secondo secondo me",
    immagine_disco: "images/veritasupposte.jpg",
    informazioni: "prende di mira una serie di luoghi comuni; inoltre tratta dei pregiudizi che si hanno contro altre persone.",
    audio_canzone: "audio/alone.mp3",
    link: "https://youtu.be/10DIJs67ReI?feature=shared"
};
var canzone2 = {
    titolo: "Ricchi e morti",
    immagine_disco: "images/playlist.jpg",
    informazioni: "Seppur nel testo non ci siano riferimenti espliciti, il titolo allude probabilmente alla serie animata statunitense Rick and Morty.",
    audio_canzone: "audio/spinninghead.mp3",
    link: "https://youtu.be/jMC1qSotmv4?feature=shared"
};
var canzone3 = {
    titolo: "Lucifero",
    immagine_disco: "images/nomidiavolo.jpg",
    informazioni: "In “Lucifero”, traccia finale dell'album, Yugi si cimenta in un monologo introspettivo, quasi un flusso di coscienza, in cui affronta vari argomenti, tra cui il fine della sua musica.",
    audio_canzone: "audio/vlogmusic.mp3",
    link: "https://youtu.be/3F0LppqS6AU?feature=shared"
};

function info1() {
    if(document.getElementById("infoc1").innerHTML == ""){
        document.getElementById("infoc1").innerHTML = canzone1["informazioni"];
    } else {
        document.getElementById("infoc1").innerHTML = "";
    }
}
function info2() {
    if(document.getElementById("infoc2").innerHTML == ""){
        document.getElementById("infoc2").innerHTML = canzone2["informazioni"];
    } else {
        document.getElementById("infoc2").innerHTML = "";
    }
}
function info3() {
    if(document.getElementById("infoc3").innerHTML == ""){
        document.getElementById("infoc3").innerHTML = canzone3["informazioni"];
    } else {
        document.getElementById("infoc3").innerHTML = "";
    }
}
    document.getElementById("titolo1").innerText = canzone1.titolo;
    document.getElementById("titolo2").innerText = canzone2.titolo;
    document.getElementById("titolo3").innerText = canzone3.titolo;

    document.getElementById("img1").src = canzone1.immagine_disco
    document.getElementById("img2").src = canzone2.immagine_disco
    document.getElementById("img3").src = canzone3.immagine_disco

function playAudio(canzone) {
    var audio = new Audio(canzone.audio_canzone);
    audio.play()
}

document.getElementById("play1").addEventListener("click", function () {
    playAudio(canzone1);
});

document.getElementById("play2").addEventListener("click", function () {
    playAudio(canzone2);
});

document.getElementById("play3").addEventListener("click", function () {
    playAudio(canzone3);
});
