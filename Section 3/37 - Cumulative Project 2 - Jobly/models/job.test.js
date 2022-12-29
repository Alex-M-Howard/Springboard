"use strict";

const db = require("../db.js");
const {
  BadRequestError,
  NotFoundError,
  ExpressError,
} = require("../expressError");
const Job = require("./job.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  const newJob = {
      title: "mrManager",
      salary: 100000,
      equity: 0.5,
      company_handle: "c1",
  };
    
  test("works", async function () {
      let job = await Job.create(newJob);
    console.log('*'.repeat(80));
    console.log(job);
    console.log('*'.repeat(80));
    expect(job).toEqual(newJob);
    console.log(job);
    const result = await db.query(
      `SELECT title, salary, equity, company_handle
      FROM jobs
      WHERE company_handle = 'c1' AND title = 'mrManager'`
    );
    expect(result.rows).toEqual([
      {
        title: "mrManager",
        salary: 100000,
        equity: 0.5,
        company_handle: "c1",
      },
    ]);
  });

  test("bad request with dupe", async function () {
    try {
      await Job.create(newJob);
      await Job.create(newJob);
      fail();
    } catch (err) {
      console.log(err);
      expect(err instanceof BadRequestError).toBeTruthy();
    }
  });
});

/************************************** findAll */

// describe("findAll", function () {
//   test("works: no filter", async function () {
//     let jobs = await Job.findAll();
//     expect(jobs).toEqual([
//       {
//         handle: "c1",
//         name: "C1",
//         description: "Desc1",
//         numEmployees: 1,
//         logoUrl: "http://c1.img",
//       },
//       {
//         handle: "c2",
//         name: "C2",
//         description: "Desc2",
//         numEmployees: 2,
//         logoUrl: "http://c2.img",
//       },
//       {
//         handle: "c3",
//         name: "C3",
//         description: "Desc3",
//         numEmployees: 3,
//         logoUrl: "http://c3.img",
//       },
//     ]);
//   });
// });

// /************************************** get */

// describe("get", function () {
//   test("works", async function () {
//     let job = await Job.get("c1");
//     expect(job).toEqual({
//       handle: "c1",
//       name: "C1",
//       description: "Desc1",
//       numEmployees: 1,
//       logoUrl: "http://c1.img",
//     });
//   });

//   test("not found if no such job", async function () {
//     try {
//       await Job.get("nope");
//       fail();
//     } catch (err) {
//       expect(err instanceof NotFoundError).toBeTruthy();
//     }
//   });
// });

// /************************************** get with filters*/

// describe("get with filters", function () {
//   test("works with all filters finding something", async function () {
//     let jobs = await Job.getFilteredJobs({
//       minEmployees: 1,
//       maxEmployees: 10,
//       nameLike: "c",
//     });
//     expect(jobs.length).toEqual(3);
//   });

//   test("works with all filters with nothing found", async function () {
//     let jobs = await Job.getFilteredJobs({
//       minEmployees: 10,
//       maxEmployees: 20,
//       nameLike: "c",
//     });
//     expect(jobs.length).toEqual(0);
//   });

//   test("works with 2 filters finding something", async function () {
//     let jobs = await Job.getFilteredJobs({
//       minEmployees: 2,
//       maxEmployees: 3,
//     });
//     expect(jobs.length).toEqual(2);
//   });

//   test("works with 2 filters with nothing found", async function () {
//     let jobs = await Job.getFilteredJobs({
//       minEmployees: 10,
//       nameLike: "DAVE",
//     });
//     expect(jobs.length).toEqual(0);
//   });

//   test("works with 1 filter finding something", async function () {
//     let jobs = await Job.getFilteredJobs({
//       nameLike: "1",
//     });
//     expect(jobs.length).toEqual(1);
//   });

//   test("works with 1 filter with nothing found", async function () {
//     let jobs = await Job.getFilteredJobs({
//       minEmployees: 10,
//     });
//     expect(jobs.length).toEqual(0);
//   });

//   test("works with no data passed", async function () {
//     try {
//       let jobs = await Job.getFilteredJobs();
//     } catch (err) {
//       expect(err instanceof ExpressError).toBeTruthy();
//     }
//   });

//   test("minEmployees > maxEmployees should error", async function () {
//     try {
//       await Job.getFilteredJobs({ minEmployees: 10, maxEmployees: 0 });
//     } catch (err) {
//       expect(err instanceof ExpressError).toBeTruthy();
//     }
//   });
// });

// /************************************** update */

// describe("update", function () {
//   const updateData = {
//     name: "New",
//     description: "New Description",
//     numEmployees: 10,
//     logoUrl: "http://new.img",
//   };

//   test("works", async function () {
//     let job = await Job.update("c1", updateData);
//     expect(job).toEqual({
//       handle: "c1",
//       ...updateData,
//     });

//     const result = await db.query(
//       `SELECT handle, name, description, num_employees, logo_url
//            FROM jobs
//            WHERE handle = 'c1'`
//     );
//     expect(result.rows).toEqual([
//       {
//         handle: "c1",
//         name: "New",
//         description: "New Description",
//         num_employees: 10,
//         logo_url: "http://new.img",
//       },
//     ]);
//   });

//   test("works: null fields", async function () {
//     const updateDataSetNulls = {
//       name: "New",
//       description: "New Description",
//       numEmployees: null,
//       logoUrl: null,
//     };

//     let job = await Job.update("c1", updateDataSetNulls);
//     expect(job).toEqual({
//       handle: "c1",
//       ...updateDataSetNulls,
//     });

//     const result = await db.query(
//       `SELECT handle, name, description, num_employees, logo_url
//            FROM jobs
//            WHERE handle = 'c1'`
//     );
//     expect(result.rows).toEqual([
//       {
//         handle: "c1",
//         name: "New",
//         description: "New Description",
//         num_employees: null,
//         logo_url: null,
//       },
//     ]);
//   });

//   test("not found if no such job", async function () {
//     try {
//       await Job.update("nope", updateData);
//       fail();
//     } catch (err) {
//       expect(err instanceof NotFoundError).toBeTruthy();
//     }
//   });

//   test("bad request with no data", async function () {
//     try {
//       await Job.update("c1", {});
//       fail();
//     } catch (err) {
//       expect(err instanceof BadRequestError).toBeTruthy();
//     }
//   });
// });

// /************************************** remove */

// describe("remove", function () {
//   test("works", async function () {
//     await Job.remove("c1");
//     const res = await db.query(
//       "SELECT handle F`ROM jobs WHERE handle='c1'"
//     );
//     expect(res.rows.length).toEqual(0);
//   });

//   test("not found if no such job", async function () {
//     try {
//       await Job.remove("nope");
//       fail();
//     } catch (err) {
//       expect(err instanceof NotFoundError).toBeTruthy();
//     }
//   });
// });
