require('./User');
require('./Customer');


module.exports = bookshelf.model('Event', {
	tableName: 'events',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	story: function() {
		return this.belongsTo('User');
	},
	student: function() {
		return this.belongsTo('Customer');
	}
});