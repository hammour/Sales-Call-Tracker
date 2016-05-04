import Backbone from 'backbone';
import Event from './../models/EventModel.js';

const EventCollection = Backbone.Collection.extend({
	model: Event,
	url: '/api/v1/event'
});

export default new EventCollection();