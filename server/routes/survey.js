let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the survey List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', requireAuth, surveyController.displayAddPage);
router.get('/add', surveyController.displayAddSurvey);

/* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', requireAuth, surveyController.displayAddSurvey);
router.post('/add', surveyController.processAddSurvey);

/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', requireAuth, surveyController.displayAddPage);
router.get('/addresponse', surveyController.displayAddSurveyResponse);

/* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', requireAuth, surveyController.displayAddSurvey);
router.post('/addresponse', surveyController.processAddSurveyResponse);







/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, surveyController.performDelete);

module.exports = router;