"use strict";

const request = require("supertest");

const db = require("../db");
const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);




/************************************** POST /jobs */

describe("POST /jobs", function () {
  const newJob = {
    company_handle: "c1",
    title: "New",
    salary: 100000,
    equity: 0.5,
  };

  test("ok for admin", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send(newJob)
      .set("authorization", `Bearer ${u1Token}`);
    console.log(resp.body);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      job:
        {
            company_handle: "c1",
            title: "New",
            salary: 100000,
            equity: "0.5",
        }
    });
  });

  test("bad request with missing title", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send({
        company_handle: "c1"
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with missing company", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send({
        title: "c1"
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with invalid data", async function () {
    newJob.equity = 2;
    const resp = await request(app)
      .post("/jobs")
      .send(newJob)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});




/************************************** GET /jobs */

describe("GET /jobs", function () {
  test("ok for anon", async function () {
    const resp = await request(app).get("/jobs");
    expect(resp.body).toEqual({
      jobs: [
        {
          title: "j1",
          salary: 100,
          equity: "0.1",
          company_handle: "c1",
        },
        {
          title: "j2",
          salary: 200,
          equity: "0.2",
          company_handle: "c2",
        },
        {
          title: "j3",
          salary: 300,
          equity: "0.3",
          company_handle: "c3",
        },
      ],
    });
  });

  test("fails: test next() handler", async function () {
    // there's no normal failure event which will cause this route to fail ---
    // thus making it hard to test that the error-handler works with it. This
    // should cause an error, all right :)
    await db.query("DROP TABLE jobs CASCADE");
    const resp = await request(app)
      .get("/jobs")
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(500);
  });
});




/************************************** GET /jobs/:company_handle */

describe("GET /jobs/:company_handle", function () {
  test("works for anon", async function () {
    const resp = await request(app).get(`/jobs/c1`);
    expect(resp.body).toEqual({
      jobs: [
            {
                title: "j1",
                salary: 100,
                equity: "0.1",
            }
        ]
    });
  });

  test("works for anon: company w/o jobs", async function () {
    const newComp = await request(app)
      .post("/companies")
      .send({
        handle: "c4",
        name: "C4",
        description: "Desc4",
        numEmployees: 4,
        logoUrl: "http://c4.img",
      })
      .set("authorization", `Bearer ${u1Token}`);
    const resp = await request(app).get(`/jobs/c4`);
    expect(resp.body).toEqual({
      jobs: []
    });
  });

  test("not found for no such company", async function () {
    const resp = await request(app).get(`/jobs/nope`);
    console.log(resp);
    expect(resp.statusCode).toEqual(404);
  });
});




/************************************** PATCH /jobs/:handle */

describe("PATCH /jobs/:company_handle/:title", function () {
  test("works for admin", async function () {
    const resp = await request(app)
      .patch(`/jobs/c1/j1`)
      .send({
        equity: 0.55,
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.body).toEqual({
      job: {
        company_handle: "c1",
        title: "j1",
        salary: 100,
        equity: "0.55",
      },
    });
  });

  test("unauth for anon", async function () {
    const resp = await request(app).patch(`/jobs/c1/j1`).send({
      salary: 800,
    });
    expect(resp.statusCode).toEqual(401);
  });

  test("not found on no such company", async function () {
    const resp = await request(app)
      .patch(`/jobs/nope`)
      .send({
        name: "new nope",
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(404);
  });

  test("bad request on invalid data", async function () {
    const resp = await request(app)
      .patch(`/jobs/c1/j1`)
      .send({
        equity: 2,
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});




/************************************** DELETE /jobs/:handle */

describe("DELETE /jobs/:company_handle/:title", function () {
  test("works for admin", async function () {
    const resp = await request(app)
      .delete(`/jobs/c1/j1`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.body).toEqual({ deleted: "c1 - j1" });
  });

  test("unauth for anon", async function () {
    const resp = await request(app).delete(`/jobs/c1/j1`);
    expect(resp.statusCode).toEqual(401);
  });

  test("not found for no such company", async function () {
    const resp = await request(app)
      .delete(`/jobs/nope/clerk`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(404);
  });
});
