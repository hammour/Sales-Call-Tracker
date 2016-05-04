import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		firstName: '',
		lastName: '',
		email: '',
		userType:'',
		imageUrl:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null

	},
	urlRoot: '/api/v1/user',
	idAttribute: 'id'
});
