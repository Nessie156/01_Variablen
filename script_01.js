"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName;
// familyName = "Mütze";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");

// console.log(firstName + " " + familyName);

// console.log(typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Max";
// test = 2;
// test = true;
// test = false;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// const test = "Max"; // Variable mit KONSTANTEM Inhalt
// test = "hi"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log("Inhalt: " + test); // Ausgabe

/***** 04 Beispiel - Berechnung *******/

// Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1990;
let ageJohn, ageMark;

let date = new Date();
// console.log(date.getFullYear());
let year = date.getFullYear();

ageJohn = year - birthYearJohn; // 2023 - 2000
ageMark = year - birthYearMark; // 2023 - 1990

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);




