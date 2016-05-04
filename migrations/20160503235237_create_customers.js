exports.up = function(knex, Promise) {
	return knex.schema.createTable('customers', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('name').notNull();
		t.string('contactName').nullable();
		t.string('email').nullable();
		t.string('addressLineOne').nullable();
		t.string('addressLineTwo').nullable();
		t.string('city').nullable();
		t.string('state').nullable();
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('customers');
};
