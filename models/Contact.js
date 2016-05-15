module.exports = bookshelf.model('Contact', {
	tableName: 'contacts',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
	
});