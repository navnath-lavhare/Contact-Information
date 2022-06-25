const express = require('express');

const contactsController = require('../controllers/contacts');


const appRouter = express.Router();

appRouter.post('', contactsController.createContact)

appRouter.put('/:id',  contactsController.updateContact)
appRouter.get("/:id",  contactsController.getContact)
appRouter.get('', contactsController.getContacts);

appRouter.delete('/:id',  contactsController.deleteContact);

module.exports = appRouter;