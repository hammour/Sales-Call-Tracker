import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		name: '',
		contactName: '',
		email: '',
		addressLineOne:'',
		addressLineTwo:'',
		city:'',
		state:'',
		userId:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null

	},
	urlRoot: '/api/v1/user',
	idAttribute: 'id'
});