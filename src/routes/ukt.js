const router = require('express').Router();
const auth = require('../middlewares/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const ctrl = require('../controllers/uktController');

router.get('/', auth, ctrl.listUkt);
router.get('/:id', auth, ctrl.getUkt);
router.post('/:id/bukti', auth, upload.single('file'), ctrl.uploadBukti);

module.exports = router;
