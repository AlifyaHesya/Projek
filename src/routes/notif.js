const router = require('express').Router();
const auth = require('../middlewares/auth');
const ctrl = require('../controllers/notifController');

router.get('/', auth, ctrl.list);
router.put('/:id/read', auth, ctrl.markRead);

module.exports = router;
