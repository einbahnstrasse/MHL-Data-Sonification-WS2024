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

// var scale = [60, 62, 64, 65, 67, 69, 71, 72];

// scale.forEach(function(note) {
//     console.log("MIDI note is: " + note);
// });

// ex. 5. tranpose each note in a melody by 2 semitones 

// var melody = [60, 62, 64, 65, 67];
// var transposedMelody = []; // initializing an empty array 

// for (var i = 0; i < melody.length; i++) {
//     transposedMelody.push(melody[i] + 2);
// }
// console.log("original melody: " + melody);
// console.log("transposed melody: " + transposedMelody);

// ex. 6. FizzBuzz 

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         // multiples of 3 AND multiples of 5
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// ex. 7. find all the As in each octave
// conditional nested within a for loop

// for (var i = 0; i <= 127; i++) {
//     if ((i - 9) % 12 == 0 && i >= 9) {
//         // MIDI note 9 is A0, used here as a reference and an offset
//         // mod 12 === 0 ensure sthe vaue is A rather than any step above it
//         // i >= 9 ensures no lower notes are chosen (this is the lowest A)
//         // calculate the octave number for the note A
//         // var octave = Math.floor((i - 9) / 12) - 1;
//         var octave = Math.floor((i - 9) / 12);
//         console.log("A" + octave + " MIDI Note: " + i);
//     } else {
//         console.log(i); 
//     }
// }

// ex. 8 increase tempo from 100 bpm in increments of 5 bpm until it reaches 120 bpm
// we don't exactly know how many times to repeat the code
// we just know we need to do it until a condition is met 

var tempo = 100;

while (tempo <= 120) {
    console.log("current tempo is: " + tempo + " BPM");
    tempo += 5; // increase by 5
    // tempo = tempo + 5;
        // += means new value = old value + 5
}
