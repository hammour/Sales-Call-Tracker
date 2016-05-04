import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		typeOfEvent: '',
		eventNotes: '',
		followUpDate: '',
		CustomerID:'',
		userID:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null

	},
	urlRoot: '/api/v1/event',
	idAttribute: 'id'
});