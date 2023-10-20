const ContactForm = require('../models/model')

exports.home = (req, res) => {
    res.render('index')
}

exports.createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = new ContactForm({ name, email, subject, message })
        await contact.save();
        // req.session.formSubmitted = true;
        // res.status(201).json({ message: 'Contact form submitted successfully'})
        res.status(201).render('contact-success');

    }
    catch (error){
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}

exports.getContact = async (req, res) => {
    try {
        const contacts = await ContactForm.find();
        res.status(200).json({ contacts })
    }
    catch (error){
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }   
}