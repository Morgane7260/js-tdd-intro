// Importer assert
const assert = require('assert');


// INTRODUCTION


// // Déterminer que capitalizeFirstLetter est bien une fonction avec 'typeof'
// assert.strictEqual(typeof capitalizeFirstLetter, 'funtion');

// // La fonction ne prend qu'un argument
// assert.strictEqual(capitalizeFirstLetter.length, 1);

// // La Fonction change bien la première lettre du mot est en majuscule
// assert.strictEqual(capitalizeFirstLetter('javaScript'), 'JavaScript');

// // Vérifie que la fonction fonctionne pour une seule lettre
// assert.strictEqual(capitalizeFirstLetter('z'), 'Z');

// // La fonction renvoit bien une chaîne de caractère vide lorsqu'elle est passée en paramètre
// assert.strictEqual(capitalizeFirstLetter(''), '');


// PARTIE 1


// Déterminer que capitalizeFirstLetter est bien une fonction avec 'typeof'
assert.strictEqual(typeof capitalizeFirstLetter, 'funtion');

// La Fonction est une phrase qui doit obtenir une majuscule en première lettre de chaque mot
assert.strictEqual(capitalizeFirstLetter('je suis une phrase'), 'Je Suis Une Phrase');

// La Fonction change bien la première lettre du mot est en majuscule
assert.strictEqual(capitalizeFirstLetter('javaScript'), 'JavaScript');

// Vérifie que la fonction fonctionne pour une seule lettre
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');

// La fonction renvoit bien une chaîne de caractère vide lorsqu'elle est passée en paramètre
assert.strictEqual(capitalizeFirstLetter(''), '');