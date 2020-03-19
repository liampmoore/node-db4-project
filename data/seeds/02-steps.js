
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: "Whip the eggs", recipe_id: 1},
        {step_number: 1, instructions: "Scramble the eggs", recipe_id: 2},
        {step_number: 1, instructions: "Devil the eggs", recipe_id: 3},
      
      ]);
    });
};
