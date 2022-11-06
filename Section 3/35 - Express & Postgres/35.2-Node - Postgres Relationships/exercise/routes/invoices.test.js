process.env.NODE_ENV = "test";

const { createData } = require("../test_data");
const request = require("supertest");
const app = require("../app");
let db = require("../db");

beforeEach(createData);

afterAll(async () => {
  await db.end();
});

describe("GET ROUTES", function () {
    test("'GET /' -> Should get all invoices", async function () {
        const response = await request(app).get("/invoices");
        expect(response.body).toEqual({
          invoices: [
            {
             
             
             "add_date": "2018-01-01T05:00:00.000Z",
             "amt": 100,
             "comp_code": "apple",
             "id": 1,
             
             "paid": false,
             "paid_date": null,
            },
            {
              
              
              "add_date": "2018-02-01T05:00:00.000Z",
              "amt": 200,
              "comp_code": "apple",
              "id": 2,
              
              "paid": true,
              "paid_date": "2018-02-02T05:00:00.000Z",
            },
            { 
           
            "add_date": "2018-03-01T05:00:00.000Z",
            "amt": 300,
            "comp_code": "ibm",
            "id": 3,
            
            "paid": false,
            "paid_date": null, },
          ],
        });
    })
})

describe("GET /1", function () {
  test("It return invoice info", async function () {
    const response = await request(app).get("/invoices/1");
    expect(response.body).toEqual({
      invoice: [
        {
          "amt": 100,
          "add_date": "2018-01-01T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "id": 1,
          "comp_code": "apple",
          "name": "Apple",
          "description": "Maker of OSX."
        },
      ],
    });
  });

  test("It should return 404 for no-such-invoice", async function () {
    const response = await request(app).get("/invoices/999");
    expect(response.status).toEqual(404);
  });
});

describe("POST /", function () {
  test("It should add invoice", async function () {
    const response = await request(app)
      .post("/invoices")
      .send({ amt: 400, comp_code: "ibm" });

    expect(response.body).toEqual({
      invoice: [{
        id: 4,
        comp_code: "ibm",
        amt: 400,
        add_date: expect.any(String),
        paid: false,
        paid_date: null,
      }],
    });
  });
});

describe("PATCH /", function () {
  test("It should update an invoice", async function () {
    const response = await request(app)
      .patch("/invoices/1")
        .send({ amt: 1000, paid: false });
      
      expect(response.body).toEqual(
          {
      invoice: [{
        id: 1,
        comp_code: "apple",
        paid: false,
        amt: 1000,
        add_date: expect.any(String),
        paid_date: null,
      }],
    });
  });

  test("It should return 404 for no-such-invoice", async function () {
    const response = await request(app)
      .put("/invoices/9999")
      .send({ amt: 1000 });

    expect(response.status).toEqual(404);
  });

  test("It should return 404 for missing data", async function () {
    const response = await request(app).put("/invoices/1").send({});

    expect(response.status).toEqual(404);
  });
});

describe("DELETE /", function () {
  test("It should delete invoice", async function () {
    const response = await request(app).delete("/invoices/1");

    expect(response.body).toEqual({ message: "Deleted" });
  });

  test("It should return 404 for no-such-invoices", async function () {
    const response = await request(app).delete("/invoices/999");

    expect(response.status).toEqual(404);
  });
});
  