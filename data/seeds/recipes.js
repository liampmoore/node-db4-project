
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_name: "Whipped Eggs"},
        {recipe_name: "Scrambled Eggs"},
        {recipe_name: "Deviled Eggs"}
      ]);
    });
};
