const { Ukt, Notification } = require('../models');

exports.listUkt = async (req, res) => {
  const userId = req.user.id;
  const ukts = await Ukt.findAll({ where: { userId } });
  res.json(ukts);
};

exports.getUkt = async (req, res) => {
  const ukt = await Ukt.findByPk(req.params.id);
  if (!ukt || ukt.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  res.json(ukt);
};

exports.uploadBukti = async (req, res) => {
  const ukt = await Ukt.findByPk(req.params.id);
  if (!ukt || ukt.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  if (!req.file) return res.status(400).json({ message: 'File required' });
  ukt.buktiUrl = `/uploads/${req.file.filename}`;
  ukt.tanggalUpload = new Date();
  ukt.statusPembayaran = 'proses';
  await ukt.save();
  // Optional: notify admin? (depends on design)
  res.json({ message: 'Bukti uploaded', ukt });
};
