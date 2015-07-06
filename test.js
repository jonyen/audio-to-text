var PocketSphinx = require('./pocketsphinx.js/pocketsphinx.js');

var recognizer = new PocketSphinx.Recognizer();

//var ps = new PocketSphinx();

/*recognizer.on('utterance', function(hyp, utt, score) {
    console.log( 'Guessed phrase: ' + hyp);
    console.log( 'Confidence score: ' + score);
    console.log( 'Unique utterance id: ' + utt);
});

recognizer.write(myMicrophoneData); */

/*
var ps = new PocketSphinx({
    hmm: '/file/path',
    lm: '/file/path',
    dict: '/file/path',
    samprate: 16000,
    nfft: 512
}, function(err, hypothesis, score) {

});

ps.addKeyphraseSearch("keyphrase_name", "keyphrase");
ps.addKeywordSearch("keyword_name", "/file/path");
ps.addGrammarSearch("grammar_name", "/file/path");
ps.addNgramSearch("ngram_name", "/file/path");

ps.search = "keyphrase_name";

ps.start();
ps.write(data);
ps.stop(); */
