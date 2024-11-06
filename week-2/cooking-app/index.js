/**
 * Author: Caleb Goforth
 * Date: 11/6/2024
 * File Name: index.js
 * Description: This script demonstrates the use of recipe functions.
 *
 * package.json configuration:
 * {
 *   "name": "recipe-app",
 *   "version": "1.0.0",
 *   "description": "A simple recipe application",
 *   "main": "index.js",
 *   "scripts": {
 *     "start": "node index.js",
 *     "test": "node tester.js"
 *   },
 *   "dependencies": {}
 * }
 */



// Import functions from recipes.js
const { createRecipe, setTimer, quit } = require('./recipes');

// Example usage
console.log(createRecipe(["sugar", "flour", "eggs"]));
console.log(setTimer(30));
console.log(quit()); 