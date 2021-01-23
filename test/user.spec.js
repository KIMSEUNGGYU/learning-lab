const { exist } = require("should");
const should = require("should"); // ! 검증 라이브러리 (node에서 권장하는 써드파티 라이브러리)
const request = require("supertest");

const app = require("../src/app");
// const models = require("../models");
const BASE_URL = "/api";

// before(() => models.sequelize.sync({ force: true }));

describe("POST /user/signup 는", () => {
  describe("성공시", () => {
    it("데이터를 생성한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signup`)
        .send({
          userId: "gyuu6",
          password: "password",
        })
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");

          return done();
        });
    });
  });
  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우 (userId 누락), 400을 반환한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signup`)
        .send({
          password: "password",
        })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });
    it("요청 파라미터가 잘못된 경우 (password 누락), 400을 반환한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signup`)
        .send({
          userId: "gyuu6",
        })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });
    it("id가 중복된 경우 409를 반환한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signup`)
        .send({
          userId: "gyuu6",
          password: "password",
        })
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });
  });
});

describe("POST /user/signin 는", () => {
  describe("성공시", () => {
    it("쿠키가 할당 됨", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signin`)
        .send({
          userId: "gyuu6",
          password: "password",
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");

          return done();
        });
    });
  });
  describe("실패시", () => {
    it("요청 파라미터가 잘못된 경우 (userId 누락), 400을 반환한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signin`)
        .send({
          password: "password",
        })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });
    it("요청 파라미터가 잘못된 경우 (password 누락), 400을 반환한다.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signin`)
        .send({
          userId: "gyuu6",
        })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });

    it("로그인 실패, 401 반환.", (done) => {
      request(app)
        .post(`${BASE_URL}/user/signin`)
        .send({
          userId: "gyuu6",
          password: "wrong_password",
        })
        .expect(401)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property("message");
          res.body.should.have.property("result");
          return done();
        });
    });
  });
});
