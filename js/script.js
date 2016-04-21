playArr = [];

audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
oscillator = audioCtx.createOscillator();

function play() {

  oscillator.type = 'triangle';
  oscillator.frequency.value = parseInt(playArr[0]); // A

  // oscillator.connect(audioCtx.destination);
  oscillator.start();
  // oscillator.stop(audioCtx.currentTime + 1);

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
