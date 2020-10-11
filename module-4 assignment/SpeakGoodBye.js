(function (window) {
var byeSpeaker = new object();
var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};
window.byeSpeaker = byeSpeaker;

})(window);
