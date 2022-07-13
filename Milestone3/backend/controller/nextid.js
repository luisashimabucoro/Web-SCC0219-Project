"use strict";

const NextID = require("../models/nextid");

exports.get = (req, res, next) => {
	NextID.find({}).then(async function (nextids) {
        // const item = await nextids.json();
		res.status(200).send(nextids[0]);
	});
};


exports.put = (req, res, next) => {
	console.log("putando")
	const id = req.params.id;
	console.log(id);
	NextID.findOne({ id: id }).then(function (nextid) {
		if (nextid != null) {
			NextID.findByIdAndDelete(nextid._id).then(() => {
				NextID(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			NextID(req.body).save();
			res.status(201).send(req.body);
		}
	});
};