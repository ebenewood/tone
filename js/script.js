toneArr = [];

audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
oscillator = audioCtx.createOscillator();

if ( isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
  oscillator.type = 'triangle';
  oscillator.noteOn(0);
} else {
  oscillator.type = 'triangle';
  oscillator.start();
};

function toneShift() {

  oscillator.frequency.value = parseInt(toneArr[0]);

};

$(function () {

  var timerID;

  function delayUnplug () {
    timerID = window.setTimeout(unplug, 500);
  };

  function unplug () {
    oscillator.disconnect(audioCtx.destination);
    timerID;
  };

  function show () {
    $('#center-column').append(this.id).fadeIn(500);
  };


  $('button').click(function () {
    toneArr.push(this.id);
    toneShift();
    oscillator.connect(audioCtx.destination);
    delayUnplug();
    show();
    toneArr = [];
  });
});
