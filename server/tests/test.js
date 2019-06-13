import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Canteen api", () => {
  describe("GET /api/", () => {
    // Test to get all drink records
    it("should get all drink records", done => {
      chai
        .request(app)
        .get("/api/drinks")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("should get all food records", done => {
      chai
        .request(app)
        .get("/api/foods")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("should get all event records", done => {
      chai
        .request(app)
        .get("/api/events")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
