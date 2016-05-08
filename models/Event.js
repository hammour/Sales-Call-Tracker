require('./User');
require('./Customer');


module.exports = bookshelf.model('Event', {
	tableName: 'events',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	customer: function() {
		return this.belongsTo('Customer','customerId');
	}
});