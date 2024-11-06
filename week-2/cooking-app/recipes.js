/**
 * Author: Caleb Goforth
 * Date: 11/6/2024
 * File Name: Recipes 
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

module.exports = {
  createRecipe,
  setTimer,
  quit
};
