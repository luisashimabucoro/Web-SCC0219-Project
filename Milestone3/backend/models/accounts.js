const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true,
        required: true
	},
	name: {
		type: String,
		required: true
	},
    password: {
        type: String,
        required: true
    },
	email: {
		type: String,
		required: true
	},
    phone: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		required: true,
		default: false
	},
	CEP: {
		type: Number,
		required: true
	},
	cidade:{
		type: String,
	},
	estado: {
		type: String
	},
    numeroEndereco: {
        type: Number
    },},{collection: 'accounts'}
    
);

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;