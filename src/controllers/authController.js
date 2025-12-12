const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await user.validPassword(password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN || '7d' });
  res.json({ token, user: { id: user.id, nama: user.nama, email: user.email, role: user.role } });
};

exports.profile = async (req, res) => {
  const user = req.user;
  res.json({ id: user.id, nama: user.nama, email: user.email, role: user.role, notifEnabled: user.notifEnabled });
};

exports.updateSettings = async (req, res) => {
  const { notifEnabled } = req.body;
  const user = req.user;
  user.notifEnabled = notifEnabled === undefined ? user.notifEnabled : !!notifEnabled;
  await user.save();
  res.json({ message: 'Settings updated', user: { notifEnabled: user.notifEnabled } });
};
