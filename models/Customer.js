require('./User');

module.exports = bookshelf.model('Customer', {
	tableName: 'customers',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],

	user: function() {
		return this.belongsTo('User');
	}
});