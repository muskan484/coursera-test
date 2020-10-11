(function () {


    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", ];
    for (var i = 0; i < names.length; i++) {
        names[i].toLowerCase();

        if (names[i].charAt(0) == "J") {
            byeSpeaker.speak(names[i]) + names[i]


        } else {
            helloSpeaker.speak(names[i]) + names[i]

        }
    }



})();
