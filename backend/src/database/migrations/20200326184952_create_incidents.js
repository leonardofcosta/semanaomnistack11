
exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments(); // Cria uma chave primária em auto-incremento
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable(); // armazenar números float, que pode ter casas decimais

    table.string("ong_id").notNullable();

    // chave estrangeira
    // O campo ong_id referência o campo id na tabela ongs
    table.foreign("ong_id").references("id").inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
