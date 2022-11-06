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
  test("'GET /' -> Should get all companies", async function () {
    const response = await request(app).get("/companies");
    expect(response.body).toEqual({
      companies: [
        { code: "apple", name: "Apple", description: "Maker of OSX."},
        { code: "ibm", name: "IBM", description: "Big blue." },
      ],
    });
  });

  test("'GET /apple' -> Should get Apple", async function () {
    const response = await request(app).get("/companies/apple");
    expect(response.body).toEqual({
      company: {
          code: "apple",
          name: "Apple",
          description: "Maker of OSX.",
          invoices: [1, 2]
        }
    });
  });

  test("GET /msoft1234 -> Return 404", async function () {
    const response = await request(app).get("/companies/msoft1234");
    expect(response.status).toEqual(404);
  });
});

describe("POST ROUTE", function () {
  test("'POST /' -> Should add company", async function () {
    const response = await request(app).post("/companies").send({"name": "Microsoft", "code": "msoft", "description": "Competition for Apple."});
    expect(response.body).toEqual({"company":[{ "code": "msoft", "name": "Microsoft", "description": "Competition for Apple."}]});
  });
});

describe("PATCH ROUTE", function () {
  test("'PATCH /' -> Should add company", async function () {
    const response = await request(app).patch("/companies/apple").send({"name": "AppleCom", "description": "Bar for geniuses"});
    expect(response.body).toEqual({
      company: [
        { code: "apple", name: "AppleCom", description: "Bar for geniuses" },
      ],
    });
  });

  test("PATCH /msoft1234 -> Return 404", async function () {
    const response = await request(app)
      .patch("/companies/msoft1234")
      .send({ name: "AppleCom", description: "Bar for geniuses" });
    expect(response.status).toEqual(404);
  });
});

describe("DELETE ROUTE", function () {
  test("'DELETE /apple' -> Should delete Apple", async function () {
    const response = await request(app).delete("/companies/apple");
    expect(response.body).toEqual({
      message: "Deleted",
    });
  });

  test("DELETE /msoft1234 -> Return 404", async function () {
    const response = await request(app).delete("/companies/msoft1234");
    expect(response.status).toEqual(404);
  });
});
