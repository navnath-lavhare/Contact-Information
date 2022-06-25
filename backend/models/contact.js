const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    status: {type: String, require: true},
});

module.exports = mongoose.model('Contact', contactSchema);