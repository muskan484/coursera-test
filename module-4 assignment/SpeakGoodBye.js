(function (window) {
    var byeSpeaker = {};
    var speakWord = "  Good Bye ";
    byeSpeaker.speak = function (name) {
        var wordsWrittenTwo = speakWord + name;
        document.write(wordsWrittenTwo.fontsize(8));
        console.log(wordsWrittenTwo);
    }

    window.byeSpeaker = byeSpeaker;
})(window);
