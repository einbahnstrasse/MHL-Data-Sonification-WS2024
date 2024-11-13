// exercise 1: count through all MIDI note numbers from 0 to 127

// for (var i = 0; i <= 127; i = i + 1) {
//     console.log(i);
// }

// a variation is:

// for (var i = 0; i <= 127; i++) {
//     console.log(i);
// }

// arithmetic series; we increment by addition or basic arithmetic 

// ex. 2 geometric series  

// for (var i = 1; i <= 127; i = i * 1.5) {
//     console.log(i);
// }

// ex. 3: build a harmonic series 

// var f0 = parseFloat(prompt("Enter the base frequency (f0) in Hz:"));

// var numPartials = parseInt(prompt("How many partials should I make?"));

// for (var i = 1; i <= numPartials; i++) {
//     var harmonicFrequency = (f0 * i).toFixed(2);
//     console.log(harmonicFrequency);
// }

// ex. 4

var scale = [60, 62, 64, 65, 67, 69, 71, 72];

scale.forEach(function(note) {
    console.log(note);
});