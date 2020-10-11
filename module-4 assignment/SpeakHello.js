(function (window) {
    var helloSpeaker = {};
    var speakWord = "  Hello ";
    helloSpeaker.speak = function (name) {
        var wordsWritten = speakWord + name;
        document.write(wordsWritten.fontsize(8));
        console.log(wordsWritten);
    }
    window.helloSpeaker = helloSpeaker;
})(window);
