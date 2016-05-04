import Backbone from 'backbone';
import Customer from './../models/CustomerModel.js';

const CustomerCollection = Backbone.Collection.extend({
	model: Customer,
	url: '/api/v1/customer'
});

export default new CustomerCollection();