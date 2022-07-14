const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nextidSchema = new Schema({
	nextid: {
		type: Number,
        required: true
	},},{collection: 'nextid'}
    
);

const NextId = mongoose.model('NextId', nextidSchema);

module.exports = NextId;