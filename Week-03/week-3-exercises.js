// week-3-exercises.js
// 
// JavaScript Exercises: 
// Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, arrays, and user input.
//
// This is how you can add an author attribution and software license within your JavaScript code:
// Author: Louis Goldford
// License: Creative Commons Attribution 4.0 International (CC BY 4.0)
// 
// You are free to:
// - Share: copy and redistribute the material in any medium or format
// - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
//
// Under the following terms:
// - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
//   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
//
// Full license text: https://creativecommons.org/licenses/by/4.0/
//
// Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
//
// To “comment in” or “comment out” lines of code in VS Code:  
// Highlight the line(s) of code you want to change, and then:  
// - on Windows: Press Ctrl + / 
// - on Mac: Press Cmd + / 

// Exercise 1: Declare and Initialize a MIDI Note
// var x; // declaration 
// var x = 1; // declaration and initialization (the type and value)

// console.log("hello world!"); // like print in Max

var middleC = 60; 
console.log(middleC);
console.log("The MIDI note for middle C is: " + middleC); // integer and a string, so the plus sign functions as a concatenator
console.log("The MIDI note for F4 is: " + (middleC + 5)); // string and (integer + integer) 
console.log(typeof middleC); // output: "number" but why not integer? in JS, integers and floats are treated as the same type

// exercise 2
var phrase1 = "Do Re Mi";
var phrase2 = "Fa Sol La";
var completePhrase = phrase1 + " " + phrase2;
console.log(completePhrase);

// exercise 3
// var quarterNote = 1.0; // 1 second
// var eighthNote = 0.5; // 0.5 seconds 
// var totalDuration = quarterNote + eighthNote;
// console.log("the total duration is: " + totalDuration);

// exercise 4
var noteDuration = 1.893425431323;
var roundedDuration = Math.round(noteDuration);
console.log(roundedDuration);

// exercise 5
var cMajorTriad = [60, 64, 67]; // C E and G ; this is an ARRAY
console.log(cMajorTriad);

// ex. 6
var cNote = 60, eNote = 64, gNote = 67;
var averageNote = (cNote + eNote + gNote) / 3;
console.log(averageNote);

// ex. 7 round he average of the midi notes
// you do this on your own!

// ex. 8 concatenate solfège into a full scale.
var firstPart = "Sol La Ti Do";
var secondPart = "Do Re Mi Fa";
// do the concatenation on your own! 

// ex. 9 add 2 note durations and round the total
var duration1 = 1.333, duration2 = 2.666;
var totalDurationRounded = Math.round(duration1 + duration2);
console.log(totalDurationRounded);

// ex. 10 create an array of solfège syllables and randomize them
var solfegeScale = []; // empty array
solfegeScale = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti", "Do"];

// randomize the array 
console.log(solfegeScale.sort(() => Math.random() - 0.5));
// the sort() method uses a comparator function, which is needed to sort the elements.
// we are using what is called an "arrow function" syntax:
// () =>
// thees are abbreviated ways of writing our own functions, but we will cover them and other types of functions later in the course. 
// for now, understand that this helps us randomly shuffle our array by returning random values between -0.5 and 0.5.
// when we evaluate the expression:
// Math.random() - 0.5
// a negative value means the element stays in the same order, 
// whereas a positive value means the element's order will be changed. 

// ex. 11 input a midi note and print it
// method 1:
// var userInput = prompt("Enter a MIDI note number:"); // this will be a string
// var userInteger = parseInt(userInput);

// method 2:
// var userInput = parseInt(prompt("Enter a MIDI note number:"));
// console.log(userInput * 5);

// ex. 12 request 2 note durations from the user and add them together
// you do this one on your own! 

// ex. 13 input solfège syllables and concenate them
// var solfege1 = prompt("Enter the first syllable (like Do)");
// var solfege2 = prompt("Enter the second syllable (like Re)");
// var completePhrase2 = solfege1 + " " + solfege2;
// console.log(completePhrase2);

// ex. 14 input a tempo and calculate the duration of 
// 4 beats in milliseconds
// var tempo = parseInt(prompt("Enter a tempo in BPM:"));
// var beatDuration = 60000 / tempo;
// var fourBeatDuration = beatDuration * 4; // will be a number
// console.log(fourBeatDuration + " milliseconds"); // will be a string

// ex. 15 input beat duration and calculate tempo in bpm
var beatDurationInput = parseFloat(prompt("Enter the beat duration in ms:"));
var bpm = 60000 / beatDurationInput;
console.log(bpm + " BPM");

// ex. 16 create a simple metronome using setTimeout() with BPM conversion
// var bpmInput = parseInt(prompt("Enter your tempo in BPM:"));
// var intervalInMs = 60000 / bpmInput; // convert to ms

setTimeout(function() { console.log("Tick 1"); }, 0);
setTimeout(function() { console.log("Tick 2"); }, intervalInMs);
setTimeout(function() { console.log("Tick 3"); }, intervalInMs * 2);
setTimeout(function() { console.log("Tick 4"); }, intervalInMs * 3);