const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const app = express();
const alert = require('alert-node');
const flash = require('express-flash');

const db = require('../db');

//home
router.get('/', function (req, res, next) {

    res.render('index', {
        title: 'home | eduquest',
    });
});

//login
router.get('/login', function (req, res, next) {

    res.render('login', {
        title: 'login | eduquest',
    });
});

router.post('/login', (req, res) => {
    console.log(req.body);

    if (req.body.email && req.body.password) {
        let email = req.body.email;
        //search for user
        db.User.findOne({ email: email }, (err, data) => {
            if (!err) {
                if (data) {
                    password = req.body.password;
                    // comparing password using bcryptjs
                    if (bcrypt.compareSync(password, data.password)) {
                        console.log(data);
                        let user = {
                            _id: data._id,
                            email: data.email
                        };
                        //sendUserToken(req, res, user);
                        res.redirect('/');
                    } else {
                        //incorrect password
                        res.send('Incorrect password');
                    }
                } else {
                    //user not found
                    res.send('User not found!');
                }
            } else {
                //db search error
                res.send('db search error');
            }
        });
        //res.render('index');
    } else {
        //all fields required
        res.send('insufficient fields');
    }
});

//signup
router.get('/signup', function (req, res, next) {

    res.render('signup', {
        title: 'signUp | eduquest',
    });
});

// signup route
router.post('/signup', (req, res) => {
    console.log(req.body);

    // check for all entered fields in request body
    if (req.body.name && req.body.email && req.body.password && req.body.password2) {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let password2 = req.body.password2;

        if (password != password2) {
            //passwords did not match
            //res.alert('Passwords did not match');
            //console.log('passwords did not match');
            res.send('passwords did not match');

        } else {
            //creating a new user
            let user = new db.User({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, 10),
            })

            // check if the entered email already exists in db.Officers
            db.User.findOne({ email: email }, (err, data) => {
                if (!err) {
                    if (data) {
                        // email already exists - returning error status
                        //console.log('user found in table');
                        res.send('user already exists, please login or use different email');

                        //req.flash('info', 'User already exists');
                        //res.redirect('/signup');
                    } else {
                        // saving user to db
                        user.save((err, data) => {
                            if (!err) {
                                if (data) {
                                    // new user saved successfully
                                    //res.alert('user saved');
                                    console.log('user saved');
                                    res.redirect('/');

                                } else {
                                    //cannot save user
                                    //res.alert('cannot save user');
                                    //console.log('cannot save user');
                                    res.send('Cannot save new user');
                                }

                            } else {
                                //Error Occurred while saving new user
                                res.send('DB error while saving new user');
                            }
                        });

                    }
                } else {
                    console.log(err);
                    //error while checking user
                    //res.alert('error while checking user');
                    res.send('Error while checking user');
                }
            });
        }

    } else {
        //all credentials required
        res.send('Insufficient information');
    }
});

//other routes
router.use(require('./users'));

module.exports = router;
