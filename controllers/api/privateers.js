const Privateer = require('../../models/privateer');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  console.log("hitting index function", req.user );
  const privateers = await Privateer.find({createdBy: req.user._id});
  console.log(privateers);
  res.status(200).json(privateers);
}

async function show(req, res) {
  const privateer = await Privateer.findById(req.params.id);
  res.status(200).json(privateer);
}

async function create(req, res) {
  console.log("hitting create function", req.user );
  req.body.createdBy = req.user._id
  const privateer = await Privateer.create(req.body);
  console.log(privateer);
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