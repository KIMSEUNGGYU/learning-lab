const should = require("should");
const request = require("supertest");
const app = require("../src/app");

exports.testPostMehod = (url, sendData, statusCode, done) => {
  return request(app)
    .post(url)
    .send(sendData)
    .expect(statusCode)
    .end((err, res) => {
      if (err) return done(err);
      res.body.should.have.property("message");
      res.body.should.have.property("result");
      // res.body.result.should.be.eql(sendData);
      return done();
    });
};
exports.testPatchMehod = (url, sendData, statusCode, done) => {
  return request(app)
    .patch(url)
    .send(sendData)
    .expect(statusCode)
    .end((err, res) => {
      if (err) return done(err);
      res.body.should.have.property("message");
      res.body.should.have.property("result");
      // res.body.result.should.be.eql(sendData);
      return done();
    });
};

exports.testDeleteMethod = (url, statusCode, done) => {
  return request(app)
    .delete(url)
    .expect(statusCode)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
};
