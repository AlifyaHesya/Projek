const { Notification } = require('../models');

exports.list = async (req, res) => {
  const notes = await Notification.findAll({ where: { userId: req.user.id }, order: [['timestamp','DESC']] });
  res.json(notes);
};

exports.markRead = async (req, res) => {
  const note = await Notification.findByPk(req.params.id);
  if (!note || note.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  note.read = true; await note.save();
  res.json(note);
};
