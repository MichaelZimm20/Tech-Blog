const router = require('express').Router();


//============================= HOMEPAGE ROUTES =============================//

// GET, get all comments from a user 
router.get('/', (req, res) => {
   // render homepage handlebars to display html
    res.render('homepage');
});



// export router
module.exports = router;