const chai = require ('chai');
const chaiHttp = require ('chai-http');
const app = require ('../index');

chai.use(chaiHttp);
chai.should();

describe("Plants", () => {
  describe("GET /plants", () => {
      // Test to get all students record
    it("should get all plants record", (done) => {
      chai.request(app)
        .get('/plants')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  }); 
  
});
  