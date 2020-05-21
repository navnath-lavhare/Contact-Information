
const Contact = require('../models/contact');
exports.createContact = (req, res, next) => {
    const url = req.protocol +'://'+req.get('host');
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        status: req.body.status
    });
    contact.save().then(createdContact=>{
        res.status(200).json({
            message: "contact added successfully",
            contact: {
                ...createdContact,
              id:  createdContact._id,
            }
        });
    });
    
    
}

exports.updateContact =(req, res, next) => {

    const contact = new Contact({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        status: req.body.status
    });
    Contact.updateOne({_id: req.params.id}, contact).then(result=>{
        if(result.n > 0) {
            res.status(200).json({message: 'Update successful'}); 
        } else {
            res.status(401).json({message: 'Not Authorized'});
        }
        
    })
}

exports.getContacts = (req, res, next) =>{
    Contact.find()
    .then(documents => {
        res.status(200).json(
            {
                message: "Data fatched successfuly",
                data: documents
            }
        );
    })
    
}

exports.getContact = (req, res, next) =>{
    Contact.findById(req.params.id).then(contact=>{
        if(!!contact) {
          res.status(200).json(contact);
        } else {
            res.status(404).json({message: 'Contact not found!'});
        }
    })
}

exports.deleteContact = (req, res, next) => {
    Contact.deleteOne({_id: req.params.id}).then(result=>{
        if(result.n > 0) {
            res.status(200).json({
                message: "Contact deleted successfully"
            })
        }else {
            res.status(401).json({
                message: "Not Authorized"
            })
        }
        
    })
    
}