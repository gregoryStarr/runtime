const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');

const {expect} = chai;
chai.use(chaiHttp);

describe('Auth API', () => {
  describe('POST /login', () => {
    it('should return a cookie and welcome message for a valid login', (done) => {
      chai.request(server)
        .post('/login')
        .send({username: 'john', password: 'doe'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.cookie('user');
          expect(res.text).to.equal('Welcome!');
          done();
        });
    });

    it('should return an error for an invalid login', (done) => {
      chai.request(server)
        .post('/login')
        .send({username: 'john', password: 'wrong'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(401);
          expect(res.text).to.equal('Invalid username or password');
          done();
        });
    });
  });

  describe('POST /register', () => {
    it('should create a new user and return a success message', (done) => {
      chai.request(server)
        .post('/register')
        .send({username: 'newuser', password: 'password'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).to.equal('User created');
          done();
        });
    });

    it('should return an error if the username is already taken', (done) => {
      chai.request(server)
        .post('/register')
        .send({username: 'john', password: 'password'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.text).to.equal('Username already exists');
          done();
        });
    });

    it('should return an error if the request is missing a username or password', (done) => {
      chai.request(server)
        .post('/register')
        .send({username: 'newuser'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.text).to.equal('Username and password are required');
          done();
        });
    });
  });
});
