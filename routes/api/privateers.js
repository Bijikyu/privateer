var express = require('express');
var router = express.Router();
var privateersCtrl = require('../../controllers/api/privateers');

router.use(require('../../config/auth'));

/* GET /api/privateers */
router.get('/', privateersCtrl.index);
router.get('/:id', privateersCtrl.show);
router.post('/', privateersCtrl.create);
router.delete('/:id', privateersCtrl.delete);
router.put('/:id', privateersCtrl.update);

module.exports = router;
