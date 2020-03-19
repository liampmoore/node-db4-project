
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Whipped Eggs"},
        {recipe_name: "Scrambled Eggs"},
        {recipe_name: "Deviled Eggs"}
      ]);
    });
};
