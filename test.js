var PocketSphinx = require('pocketsphinx');

var ps = new PocketSphinx();

ps.on('utterance', function(hyp, utt, score) {
    console.log( 'Guessed phrase: ' + hyp);
    console.log( 'Confidence score: ' + score);
    console.log( 'Unique utterance id: ' + utt);
});

ps.write(myMicrophoneData);
