const db = require('../data/dbConfig.js');



function getRecipes() {
  return db('recipes');
}

async function getInstructions(id) {
  try {
    const steps = await db.select("s.id", "r.recipe_name", "s.step_number", "s.instructions")
      .from("steps as s")        
      .join("recipes as r", "s.scheme_id", "r.id")
      .where("r.id", id);
    return steps.length = 0 ? null : steps;
  }
  catch(err) {
    console.error(err)
  }
}

const getShoppingList = async (id) => {
  try {
    const ingredients = await db.select("i.ingredient_name")
      .from("recipes as r")
      .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
      .join("ingredients as i", "ri.ingredient_id", "i.id")
      .where("r.id", id);
    return ingredients.length = 0 ? null : ingredients.map(i => i.ingredient_name);
  }
  catch(err) {
    console.error(err)
  }
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};