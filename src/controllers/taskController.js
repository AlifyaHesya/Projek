const { Task } = require('../models');

exports.list = async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user.id } });
  res.json(tasks);
};

exports.get = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || task.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  res.json(task);
};

exports.create = async (req, res) => {
  const { judul, deskripsi, deadline } = req.body;
  const task = await Task.create({ userId: req.user.id, judul, deskripsi, deadline });
  res.json(task);
};

exports.updateStatus = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || task.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  const { status } = req.body;
  task.status = status;
  await task.save();
  res.json(task);
};
