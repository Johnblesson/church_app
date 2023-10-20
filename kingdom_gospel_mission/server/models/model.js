const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    }
})

const ContactForm = mongoose.model('contacts', dbSchema);

module.exports = ContactForm;