const mongoose = require('mongoose');
const CONSTANTS = require('./globals').constants;

mongoose.set('useCreateIndex', true);
mongoose.connect(CONSTANTS['mongoDBURL'], { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./models/user')
};
