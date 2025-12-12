const { Ukt, Notification, User } = require('../models');

exports.listBukti = async (req, res) => {
  const bukti = await Ukt.findAll({ where: { statusPembayaran: 'proses' }, include: [User] });
  res.json(bukti);
};

exports.getBukti = async (req, res) => {
  const b = await Ukt.findByPk(req.params.id, { include: [User] });
  res.json(b);
};

exports.verifyBukti = async (req, res) => {
  const { status } = req.body; // 'valid' or 'invalid'
  const ukt = await Ukt.findByPk(req.params.id);
  if (!ukt) return res.status(404).json({ message: 'Not found' });
  ukt.statusPembayaran = status;
  await ukt.save();

  // create notification for the student
  const user = await User.findByPk(ukt.userId);
  if (user && user.notifEnabled) {
    await Notification.create({
      userId: user.id,
      judul: 'Status Pembayaran UKT',
      isi: `Pembayaran UKT semester ${ukt.semester} diupdate menjadi: ${status}`
    });
  }

  res.json({ message: 'Updated', ukt });
};
