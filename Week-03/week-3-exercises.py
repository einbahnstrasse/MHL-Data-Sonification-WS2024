# week-3-exercises.py
# 
# Python Exercises: 
# Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, lists, and user input.
#
# This is how you can add an author attribution and software license within your Python code:
# Author: Louis Goldford
# License: Creative Commons Attribution 4.0 International (CC BY 4.0)
# 
# You are free to:
# - Share: copy and redistribute the material in any medium or format
# - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
#
# Under the following terms:
# - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
#   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
#
# Full license text: https://creativecommons.org/licenses/by/4.0/
#
# Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
#
# To “comment in” or “comment out” lines of code in VS Code:  
# Highlight the line(s) of code you want to change, and then:  
# - on Windows: Press Ctrl + / 
# - on Mac: Press Cmd + /

# Exercise 1: Declare and Initialize a MIDI Note
# middleC = 60
# print(middleC)

# ex. 2
# part1 = "Do Re Mi"
# part2 = "Fa Sol La"
# phrase = part1 + " " + part2
# print(phrase)

# ex. 3
# quarter_note = 1.0
# eighth_note = 0.5
# total_duration = quarter_note + eighth_note
# print("the total duration is: " + str(total_duration))

# ex. 4
# note_duration = 1.598058326759
# rounded_duration = round(note_duration)
# print(rounded_duration)

# ex. 5
# c_major_triad = [60, 64, 67] # C E G
# print(c_major_triad)

# ex. 6
# c_note, e_note, g_note = 60, 64, 67
# average_note = (c_note + e_note + g_note) / 3
# print(average_note)

# ex. 7 
# you will do on your own!

# ex. 8 
# first_part = "Do Re Mi Fa"
# second_part = "Sol La Ti Do"
# full_scale = first_part + " " + second_part
# print(full_scale)

# ex. 9 
# duration1, duration2 = 1.333, 2.666
# total_duration_rounded = round(duration1 + duration2)
# print(total_duration_rounded)

# ex. 10
# import random 
# solfege_scale = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti", "Do"]
# random.shuffle(solfege_scale)
# print(solfege_scale)

# ex. 11
# midi_note = int(input("Enter a MIDI note number: "))
# print(midi_note)

# ex. 12
# do this on your own!

# ex. 13
# solfege1 = input("Enter the first syllable (like Do): ")
# solfege2 = input("Okay, now input your second syllable (like Mi): ")
# solfege_phrase = solfege1 + " " + solfege2
# print(solfege_phrase)

# ex. 14
# tempo = int(input("Enter the tempo in beats per minute (BPM): "))
# beat_duration = 60000 / tempo
# four_beat_duration = beat_duration * 4
# print(four_beat_duration)

# ex. 15
# beat_duration = float(input("Enter the beat duration in ms: "))
# bpm = 60000 / beat_duration
# print(bpm)

# ex. 16
import time 
bpm = int(input("Enter a tempo in bpm: "))
interval_in_s = 60 / bpm

time.sleep(0)
print("Tick 1")
time.sleep(interval_in_s)
print("Tick 2")
time.sleep(interval_in_s)
print("Tick 3")
time.sleep(interval_in_s)
print("Tick 4")
