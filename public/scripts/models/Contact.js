import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		name: '',
		email: '',
		contactNo:'',
		message:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null

	},
	urlRoot: '/api/v1/contact',
	idAttribute: 'id'
});