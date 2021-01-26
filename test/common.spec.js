/**
 * Required External Modules and Interfaces
 */
const should = require("should");
const request = require("supertest");

/**
 * App Variables
 */
const app = require("../src/app");
const BASE_URL = "/api";

/**
 * Test
 */
describe("유효하지 않는 요청할 경우", () => {
  describe("GET /wrong_request", () => {
    it("404 를 반환한다.", (done) => {
      request(app)
        .get(`${BASE_URL}/wrong_request`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
  });
});
