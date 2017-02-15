"use strict";
/**
 * Created by Abe on 14/02/2017.
 */
var express_1 = require('express');
var router = express_1.Router();
router.post('/signup', function (req, res) {
    res.send('signup called');
});
router.post('/signin', function (req, res) {
    res.send('signin called');
});
router.get('/me', function (req, res) {
    res.send('me called');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=authRoutes.js.map