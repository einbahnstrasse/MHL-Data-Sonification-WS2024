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

// var tempo = 100;

// while (tempo <= 120) {
//     console.log("current tempo is: " + tempo + " BPM");
//     tempo += 5; // increase by 5
//     // tempo = tempo + 5;
//         // += means new value = old value + 5
// }

//  ex. 9 generate a sequence of ascending octaves between starting and ending points

// var startNote = parseInt(prompt("Enter a starting MIDI note (e.g., 60 for middle C):"));
// var endNote = parseInt(prompt("Enter an ending MIDI note:"));

// // initialize the curren note as the starting point
// var currentNote = startNote;

// // while loop construction to generate ascending octaves based on user input

// while (currentNote <= endNote) {
//     console.log("MIDI note: " + currentNote + " octave: " + Math.floor(currentNote / 12 - 1));
//         // the Math.floor expression calcualtes octave, starting from -1 for MIDI note 0.
//     currentNote += 12;
// }

// ex. 10 transpose all notes by 3 semitones using map()
// var scale = [60, 62, 64, 65, 67, 69, 71, 72];

// var transposedScale = scale.map(function(note) {
//     return note + 3;
// });

// console.log("Transposed scale is: " + transposedScale);

// ex. 11 filter only notes above MIDI 62 using filter()
// var scale = [60, 62, 64, 65, 67, 69, 71, 72];
// var highNotes = scale.filter(function(note) {
//     return note > 64;
// });

// console.log("notes above 64: " + highNotes);

//  ex. 12 iterate through 2 measures 
// convert each note to midicents, print with setTimeout()

// var firstMeasure = [60, 62, 64, 65]; // C, D, E, F
// var secondMeasure = [67, 69, 71, 72]; // G, A, B, C

// var tempo = parseInt(prompt("Enter the tempo in BPM: "));

// var quarterNoteDuration = 60000 / tempo;

// // combine the arrays for each measure 
// var measures = [firstMeasure, secondMeasure];

// // outer loop to iterate over each measure 
// for (var i = 0; i < measures.length; i++) {
//     // inner loop to iterate over each note in the current measure
//     for (var j = 0; j < measures[i].length; j++) {
//         var midicents = measures[i][j] * 100;
//         var delay = (i * measures[i].length + j) * quarterNoteDuration;
//             // calc. the delay for the current note based on its position in its measure
//         setTimeout(function(midicents, measureNum, beatNum) {
//             console.log("measure " + measureNum + " beat " + beatNum + " pitch " + midicents);
//         }, delay, midicents, i + 1, j + 1); // pass the midicents, measure number, and beat number as arguments to setTimeout()
//     }
// }

//  ex. 13 parallel iteration of two voices, convert each note to midicents

// var firstVoice = [60, 62, 64, 65]; // C, D, E, F
// var secondVoice = [67, 69, 71, 72]; // G, A, B, C

// var tempo = parseInt(prompt("Enter the tempo in BPM: "));
// var quarterNoteDuration = 60000 / tempo;

// for (var i = 0; i < firstVoice.length; i++) {
//     var midicentsVoice1 = firstVoice[i] * 100;
//     var midicentsVoice2 = secondVoice[i] * 100;
//     var delay = i * quarterNoteDuration;
//     setTimeout(function(midicentsVoice1, beatNum) {
//         console.log("beat " + beatNum + " first voice " + midicentsVoice1);
//     }, delay, midicentsVoice1, i + 1);
//     setTimeout(function(midicentsVoice2, beatNum) {
//         console.log("beat " + beatNum + " first voice " + midicentsVoice2);
//     }, delay, midicentsVoice2, i + 1);
// }

//  ex. 14 transpose notes below MIDI 65 (F4) by 1 semitone, leave others unchanged
// var melody = [60, 62, 64, 65, 67];

// for (var i = 0; i < melody.length; i++) {
//     if (melody[i] < 65) {
//         melody[i] += 1; // transpose by 1 semitone 
//     }
// }

// console.log(melody);

// ex. 15 choose a mode (major or minor)
// switch statement: to do the selection
// var mode = "major";
// var scale; 

// switch (mode) {
//     case "major":
//         scale = [60, 62, 64, 65, 67, 69, 71, 72]; // C major
//         break; 
//     case "minor":
//         scale = [60, 62, 63, 65, 67, 68, 70, 72]; // C minor
//         break; 
//     default:
//         scale = []; // initialized as an empty array if mode is unrecognized
// }

// console.log("selected scale: " + scale);

//  ex. 16 check note velocity and adjust 
// var velocity = 50;
// var adjustedVelocity = (velocity < 64) ? velocity + 10 : velocity;
//     // boost if the velocity is too low  

//     console.log("adjusted velocity: " + adjustedVelocity);

// ex. 17 stop processing when a rest (MIDI note of 0) is found
// break and continue: handling early exists or skips 

var melody = [1000, 500, 1500, 0, 2000, 6000]; // imagine these are duration values

for (var i = 0; i < melody.length; i++) {
    if (melody[i] === 0) {
        console.log("rest found, stopping...");
        break; // stop the loop at the resting point
    }
    console.log("processing note: " + melody[i]);
}

