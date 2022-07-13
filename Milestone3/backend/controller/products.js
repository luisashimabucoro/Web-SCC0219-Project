"use strict";

const Product = require("../models/products");

exports.get = (req, res, next) => {
	Product.find({}).then(function (products) {
		res.status(200).send(products);
	});
};

exports.getById = (req, res, next) => {
	const id = req.params.id;
    console.log(id);
	Product.findOne({"id":id}).then(function (product) {
        console.log("achou");
        console.log(product);
		if (product) {
			res.status(200).send(product);
		} else {
			res.status(404).send();
		}
	});
};

exports.put = (req, res, next) => {
	const id = req.params.id;

	Product.findOne({ id: id }).then(function (product) {
		if (product != null) {
			Product.findByIdAndDelete(product._id).then(() => {
				Product(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			Product(req.body).save();
			res.status(201).send(req.body);
		}
	});
};

exports.delete = (req, res, next) => {
	const id = req.params.id;
	Product.findOneAndDelete({ id: id }).then(function (product) {
		if (product) {
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	});
};