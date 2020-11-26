export const playSoundElement = (id) => {
    const el = document.getElementById(id);
    el.play();
}


export const resetSoundElement = (id) => {
    const el = document.getElementById(id);
    el.pause();
    el.currentTime = 0;
}
