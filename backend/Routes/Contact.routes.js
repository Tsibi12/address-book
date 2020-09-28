const swaggerJSDoc = require('swagger-jsdoc');
const Contact = require("../controllers/contact.controller");

module.exports = app => {
    

    // Create a new Contact
    
    /**
     * @swagger
     * /api/v1/contact:
     *  post:
     *      description: Create new contact
     *      parameters:
     *        - name: reqBody
     *          description: request body
     *          in: body
     *          schema:
     *            type: object
     *            properties:
     *              firstName:
     *                type: string
     *              lastName:
     *                type: string
     *              phone:
     *                type: string
     *              email:
     *                type: string
     *              city:
     *                type: string
     *              street:
     *                type: string
     *              postalCode:
     *                type: integer
     *              country:
     *                type: string
     *            required: 
     *               - firstName
     *               - lastName
     *               - phone
     *               - email
     *               - city
     *               - street
     *               - postalCode
     *               - country
     *      responses: 
     *        '201':
     *            description: A successful response
     */

    app.post("/api/v1/contact", Contact.create);

    // Retrieve all Contact
    /**
     * @swagger
     * /api/v1/contact:
     *  get:
     *      description: Get all address book
     *      responses: 
     *        '200':
     *            description: A successful response
     */

    app.get("/api/v1/contact", Contact.findAll);

    // Retrieve a single address book by Id
    /**
     * @swagger
     * /api/v1/contact/{id}":
     *  get:
     *      tags:
     *        - ID params
     *      description: Get address book  by id
     *      parameters:
     *        - name: id
     *          description: Id for single address book
     *          in: path
     *          type: integer
     *          required: true
     *      responses: 
     *        '200':
     *            description: A successful response
     */

    app.get("/api/v1/contact/:id", Contact.findByPk);

    // Update Contact 
    /**
     * @swagger
     * /api/v1/contact/{id}:
     *  put:
     *      tags:
     *        - ID params
     *      description: Update address book
     *      parameters:
     *        - name: id
     *          description: Id to update address book
     *          in: path
     *          type: integer
     *          required: true
     *        - name: reqBody
     *          description: request body
     *          in: body
     *          schema:
     *            type: object
     *            properties:
     *              firstName:
     *                type: string
     *              lastName:
     *                type: string
     *              phone:
     *                type: integer
     *              email:
     *                type: string
     *              postalCode:
     *                type: integer
     *              country:
     *                type: string
     *            required: 
     *               - firstName
     *               - lastName
     *               - phone
     *               - email
     *               - city 
     *               - street
     *               - postalCode
     *               - country
     *      responses: 
     *        '200':
     *            description: A successful response
     */

    app.put("/api/v1/Contact/:id", Contact.update);

    // Delete a Addres book with Id
    /**
     * @swagger
     * /api/v1/contact/{id}:
     *  delete:
     *      tags:
     *        - ID params
     *      description: Delete by id
     *      parameters:
     *        - name: id
     *          description: Id to delete
     *          in: path
     *          type: integer
     *          required: true
     *      responses: 
     *        '200':
     *            description: A successful response
     */

    app.delete("/api/v1/Contact/:id", Contact.delete);
};
