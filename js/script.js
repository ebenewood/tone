toneArr = [];

audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
oscillator = audioCtx.createOscillator();

oscillator.type = 'triangle';

function toneShift() {

  oscillator.frequency.value = parseInt(toneArr[0]);


  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 1);

};

$(function () {

  function show () {
    $('#center-column').append(this.id).fadeIn(500);
  };


  $('button').click(function () {
    playArr.push(this.id);
    play();
    show();
    playArr = [];
  });
});
