let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('boockshelf-Api')({
	path: path.join(__dirname, '..','model')
});
router.use('/', bookshelfApi);


// router.get('/products', function(req, res, next) {

// });

module.exports = router;
