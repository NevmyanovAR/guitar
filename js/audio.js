function play(id, id2) {
    stopAllAudio();
    $(id2 + ' button').toggleClass('active');
    $(id).trigger('play');

}
function stopAudio(id, id2) {
    $(id2 + ' button').toggleClass('active');
    //pause playing
    $(id).trigger('pause');
    //set play time to 0
    $(id).prop("currentTime", 0);
}
function stopAllAudio() {
    $('.btns button.stop').removeClass('active');
    $('.btns button.play').addClass('active');
    //pause playing
    $('audio').trigger('pause');
    //set play time to 0
    $('audio').prop("currentTime", 0);
}