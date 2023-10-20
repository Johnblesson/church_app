const express = require('express')
const router = express.Router();
const contactController = require('../controllers/controller');

router.get('/', contactController.home)
router.post('/contact-form', contactController.createContact);
router.get('/api/v1/contact-form', contactController.getContact)

module.exports = router;
