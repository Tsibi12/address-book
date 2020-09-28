const Contact = require('../Models').Contact;

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();
chai.use(chaiHttp)

describe('/GET contacts', () => {
    it('it should Get all contacts', (done) => {
        chai.request(app)
        .get('/api/v1/contact')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/GET contact', () => {
    it('it should Get single contact', (done) => {
        chai.request(app)
        .get('/api/v1/contact/23')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/POST contact', () => {
    it('it sould post the contact infor', (done) => {
        const user = {
            firstName:"Lite",
            lastName:"Masiteng",
            phone:"0799527306",
            email:"lite@gmail.com",
            city:"Alberton",
            street:"1431 first avenue",
            postalCode:1427,
            country:"South Africa"
        };
        chai.request(app)
        .post('/api/v1/contact')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            res.body.should.have.property('success');
            done();
        });
    });
});

describe('/PUT/:id contact', () => {
    it("it should  update the contact infor", (done) => {
        const user = {
            firstName:"Lindiwe",
            lastName:"Masiteng",
        }
        const userId = 1;
         chai.request(app)
         .put('/api/v1/contact/'+ userId)
         .send(user)
         .end((err, res) => {
             res.should.have.status(201);
             res.body.should.have.property('message');
             done();
         });
    });
});

describe('Remove contact', () => {
    it("it should remove contact infor", (done) => {
        const userId = 37;
        chai.request(app)
        .del('/api/v1/contact/'+ userId)
        .send()
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message');
            done();
        });
    });
});