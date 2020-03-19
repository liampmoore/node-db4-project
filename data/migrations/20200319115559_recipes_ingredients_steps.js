
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.text('ingredient_name')
        .notNullable()
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients');
        
        tbl.primary(['recipe_id', 'ingredient_id']);
    })
    })
};

exports.down = function(knex) {
  
};
