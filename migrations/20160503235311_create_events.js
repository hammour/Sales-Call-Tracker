exports.up = function(knex, Promise) {
	return knex.schema.createTable('events', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('typeOfEvent').notNull();
		t.text('eventNotes').nullable();
		t.dateTime('followUpDate').nullable();
		
		t.integer('customerId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('customers')
			.onDelete('CASCADE');
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('events');
};
