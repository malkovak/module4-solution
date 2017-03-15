// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

/*
 Hello Yaakov
 Good Bye John
 Good Bye Jen
 Good Bye Jason
 Hello Paul
 Hello Frank
 Hello Larry
 Hello Paula
 Hello Laura
 Good Bye Jim
 */

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (!(typeof name === 'string' || name instanceof String)) {
      continue;
    }

    var firstLetter = names[i].charAt(0).toLowerCase();
    var speaker = firstLetter == 'j' ? byeSpeaker : helloSpeaker;
    speaker.speak(name);
  }
})();
