const express = require('express');
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact} = require('../controllers/contactController');

router.get('/', getContacts);

router.get('/:id', getContact);

router.post('/', createContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;


