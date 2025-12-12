const router = require('express').Router();
const auth = require('../middlewares/auth');
const ctrl = require('../controllers/taskController');

router.get('/', auth, ctrl.list);
router.get('/:id', auth, ctrl.get);
router.post('/', auth, ctrl.create);
router.put('/:id/status', auth, ctrl.updateStatus);

module.exports = router;
