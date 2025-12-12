const router = require('express').Router();
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const ctrl = require('../controllers/adminController');

router.get('/bukti', auth, role(['admin']), ctrl.listBukti);
router.get('/bukti/:id', auth, role(['admin']), ctrl.getBukti);
router.put('/bukti/:id', auth, role(['admin']), ctrl.verifyBukti);

module.exports = router;
