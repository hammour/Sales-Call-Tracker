
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('name').nullable();
		t.string('email').nullable();
		t.string('contactNo').nullable();
		t.text('message').nullable();
	});
};

exports.down = function(knex, Promise) {
 
	return knex.schema.dropTable('contacts'); 
};
