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
      equity: '0.5',
      company_handle: "c1",
  };
    
  test("works", async function () {
    let job = await Job.create(newJob);
    
    expect(job).toEqual(newJob);
    const result = await db.query(
      `SELECT title, salary, equity, company_handle
      FROM jobs
      WHERE company_handle = 'c1' AND title = 'mrManager'`
    );
    expect(result.rows).toEqual([
      {
        title: "mrManager",
        salary: 100000,
        equity: '0.5',
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
      expect(err instanceof BadRequestError).toBeTruthy();
    }
  });
});

/************************************** findAll */

describe("findAll", function () {
  test("works: no filter", async function () {
    let jobs = await Job.findAll();
    expect(jobs).toEqual([
      {
        company_handle: "c1",
        salary: 100000,
        title: "j1",
        equity: '0.1',
      },
      {
        company_handle: "c2",
        salary: 200000,
        title: "j2",
        equity: '0.2',
      },
      {
        company_handle: "c3",
        salary: 300000,
        title: "j3",
        equity: '0.3',
      },
    ]);
  });
});

// /************************************** get */

describe("get", function () {
  test("works", async function () {
    let job = await Job.get(title="j1", company_handle="c1");
    expect(job).toEqual({
      company_handle: "c1",
      title: "j1",
      salary: 100000,
      equity: "0.1",
    });
  });

  test("not found if no such job", async function () {
    try {
      await Job.get("nope");
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});

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

describe("update", function () {
  const updateData = {
    title: "New",
    salary: 555,
    equity: '0.1'                  ,
  };

  test("works", async function () {
    let job = await Job.update(title='j1',company_handle="c1", updateData);
    expect(job).toEqual({
      company_handle: "c1",
      ...updateData,
    });

    const result = await db.query(
      `SELECT title, salary, equity, company_handle
           FROM jobs
           WHERE title = 'New' AND company_handle = 'c1'`
    );
    expect(result.rows).toEqual([
      {
        company_handle: "c1",
        title: "New",
        salary: 555,
        equity: "0.1",
      },
    ]);
  });

  test("works: null fields", async function () {
    const updateDataSetNulls = {
      title: 'New',
      salary: null,
      equity: null,
    };

    let job = await Job.update(title='j1', company_handle="c1", updateDataSetNulls);
    expect(job).toEqual({
      company_handle: "c1",
      title:'j1',
      ...updateDataSetNulls,
    });

    const result = await db.query(
      `SELECT title, salary, equity, company_handle
           FROM jobs
           WHERE title = 'New' AND company_handle = 'c1'`
    );
    expect(result.rows).toEqual([
      {
        title: "New",
        company_handle: "c1",
        salary: null,
        equity: null,
      },
    ]);
  });

  test("not found if no such job", async function () {
    try {
      await Job.update(title="nope", company_handle='nope', updateData);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });

  test("bad request with no data", async function () {
    try {
      await Job.update(title='j1', company_handle="c1", {});
      fail();
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy();
    }
  });
});

// /************************************** remove */

describe("remove", function () {
  test("works", async function () {

    await Job.remove(title="j1", company_handle="c1");
    const res = await db.query(
      "SELECT company_handle FROM jobs WHERE title='j1' AND company_handle='c1'"
    );
    
    expect(res.rows.length).toEqual(0);
  });

  test("not found if no such job", async function () {
    try {
      await Job.remove("nope", "nope");
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});
