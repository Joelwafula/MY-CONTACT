const express = require('express');
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController")

router.route('/')
.get(getContacts)
.post(createContact) //201 means that the post has been created successfully


router.route('/:id')
.put(updateContact)
.delete(deleteContact)
.get(getContact)
module.exports = router;