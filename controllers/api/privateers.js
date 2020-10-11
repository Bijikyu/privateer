const Privateer = require('../../models/privateer');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const privateers = await Privateer.find({});
  res.status(200).json(privateers);
}

async function show(req, res) {
  const privateer = await Privateer.findById(req.params.id);
  res.status(200).json(privateer);
}

async function create(req, res) {
  const privateer = await Privateer.create(req.body);
  res.status(201).json(privateer);
}

async function deleteOne(req, res) {
  const deletedPrivateer = await Privateer.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPrivateer);
}

async function update(req, res) {
  const updatedPrivateer = await Privateer.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedPrivateer);
}