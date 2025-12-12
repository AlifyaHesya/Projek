const router = require('express').Router();
const ctrl = require('../controllers/authController');
router.post('/login', ctrl.login);
router.get('/profile', require('../middlewares/auth'), ctrl.profile);
router.put('/profile/settings', require('../middlewares/auth'), ctrl.updateSettings);
module.exports = router;
