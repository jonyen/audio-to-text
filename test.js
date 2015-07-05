var PocketSphinx = require('./pocketsphinx.js');

var recognizer = new PocketSphinx.Recognizer();

//var ps = new PocketSphinx();

recognizer.on('utterance', function(hyp, utt, score) {
    console.log( 'Guessed phrase: ' + hyp);
    console.log( 'Confidence score: ' + score);
    console.log( 'Unique utterance id: ' + utt);
});

recognizer.write(myMicrophoneData);
