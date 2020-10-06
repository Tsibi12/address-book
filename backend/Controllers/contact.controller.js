//import models
const db = require("../models");
const Contact = db.Contact;


// Create contact
exports.create = (req, res,err) => {
  
  const {
    firstName,
    lastName,
    phone,
    email,
    city,
    street,
    postalCode,
    country
  } = req.body;

  Contact.findOne({
    where: {
      email,
    },
  })
    .then((contact) => {

        // Checking if email alread exist in the database
        if(contact){
          return res.status(200).json({success:false, message:"Email already exist"});
        }

        Contact.create({
            firstName,
            lastName,
            phone,
            email,
            city,
            street,
            postalCode,
            country
        })
        .then((contact) => {
            res
            .status(201)
            .json({
                success: true,
                message: "Contact created successfully",
                contact,
            });
        })
        .catch((err) => {
            res.status(400).json({ error: true, message: err.message });
        });
    });
}

// Fetch all Contact
exports.findAll = (req, res) => {
  Contact.findAll()
    .then((contacts) => {
     
      if (contacts) {
      return res.status(200).json(contacts);
      } 

      res
        .status(404)
        .json({
            success: false,
            message: "No contact found at this time!!",
        });
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.message });
    });
};


// Find Contact by Id 
exports.findByPk = (req, res) => {

  let { id } = req.params;

  Contact.findByPk(id)
    .then((Contact) => {
      if (Contact) {
        return res.json({ success: true, Contact });
      } 
      res.status(404).json({ success: false, message: "Nothing match your request!" });
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.message });
    });
};

// Update a Contact 
exports.update = (req, res) => {
  const { id } = req.params;
  const { 
    firstName,
    lastName,
    phone,
    email,
    city,
    street,
    postalCode,
    country
  } = req.body;

  if(firstName ||
    lastName ||
    phone ||
    email ||
    city ||
    street ||
    postalCode ||
    country){

      Contact.update({
        firstName,
        lastName,
        phone,
        email,
        city,
        street,
        postalCode,
        country
      }, {
        where: {
          id
        }
      })
        .then(Contact => res.status(201).json({
          success: true,
          message: 'Contact has been updated.'
        }))
        .catch(err => {
          res.status(400).json({
            error: true,
            message: err.message
          });
        });

    } else {
      return res.status(404).json({
        success: false,
        message: 'Make sure you fill all inputs'
      });
    }
};


// Delete Contact by Id
exports.delete = (req, res) => {
  const { id } = req.params;
  Contact.destroy({
      where: { id},
  })
    .then(() => {
        res.status(200).json({success: true, message:"Contact has been deleted!"});
    })
    .catch((err) => {
        res.status(400).json({ error: true, message: "Fail to delete!" });
    });
};
