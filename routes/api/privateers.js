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



function checkAuth(req, res, next) {
    //TODO make not function on no log in
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
