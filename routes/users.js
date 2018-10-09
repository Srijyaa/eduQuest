const express = require('express');
const router = express.Router();

router.get('/interaction', function (req, res, next) {

	res.render('interaction', {
		title: 'testing | eduquest interaction',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/college', function (req, res, next) {

	res.render('college_selection', {
		title: 'testing | eduquest colleges',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/exams', function (req, res, next) {

	res.render('exam-info', {
		title: 'testing | eduquest exam',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/career', function (req, res, next) {

	res.render('career', {
		title: 'testing | eduquest marks',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/compare', function (req, res, next) {

	res.render('compare', {
		title: 'testing | eduquest college compare',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/user/marks', function (req, res, next) {

	res.render('marks', {
		title: 'testing | eduquest marks',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

router.get('/user/location', function (req, res, next) {

	res.render('location', {
		title: 'testing | eduquest location',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});
router.get('/user/fees', function (req, res, next) {

	res.render('fees', {
		title: 'testing | eduquest fees',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});
router.get('/user/interest', function (req, res, next) {

	res.render('interests', {
		title: 'testing | eduquest interest',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});
router.get('/user/one', function (req, res, next) {

	res.render('index1', {
		title: 'testing | eduquest one',
		// errMsg: req.flash('errMsg'),
		// sucMsg: req.flash('sucMsg')
	});
});

module.exports = router;
