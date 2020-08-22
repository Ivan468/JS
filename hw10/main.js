window.addEventListener('keydown', function (e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log("audio", audio)
    if (!audio) return // stop function
    audio.currentTime = 0;
    audio.play();
})