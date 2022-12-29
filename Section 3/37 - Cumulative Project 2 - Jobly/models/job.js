"use strict";

const db = require("../db");
const {
  BadRequestError,
  NotFoundError,
  ExpressError,
} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Job {
  /** Create a job (from data), update db, return new job data.
   *
   * data should be { title, salary, equity, company_handle }
   *
   * Returns { title, salary, equity, company_handle }
   *
   * More than one job/position can exist at a company, but
   * only need one job board posting for each position.
   * */

  static async create({ title, salary, equity, company_handle }) {
    const duplicateCheck = await db.query(
      `SELECT title, company_handle
           FROM jobs
           WHERE title = $1, company_handle = $2`,
      [title, company_handle]
    );

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate job: ${company_handle} - ${title}`);

    const result = await db.query(
      `INSERT INTO jobs
           (title, salary, equity, company_handle)
           VALUES ($1, $2, $3, $4)
           RETURNING title, salary, equity, company_handle AS "companyHandle"`,
      [title, salary, equity, company_handle]
    );
    const job = result.rows[0];

    return job;
  }

  /** Find all jobs.
   *
   * Returns [{ title, salary, equity, companyHandle }, ...]
   * */

  static async findAll() {
    const jobsResponse = await db.query(
      `SELECT title,
              salary,
              equity,
              company_handle AS "companyHandle"
        FROM jobs
        ORDER BY companyHandle`
    );

    return jobsResponse.rows;
  }

  /** Given a job title and copmany handle, return data about job.
   *
   * Returns { title, salary, equity, companyHandle }
   *
   ** Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const jobResponse = await db.query(
      `SELECT title,
              salary,
              equity,
              company_handle AS "companyHandle"
        FROM jobs
        WHERE title=$1 AND companyHandle=$2`,
      [title, companyHandle]
    );

    const job = jobResponse.rows[0];

    if (!job) throw new NotFoundError(`No job: ${companyHandle} - ${title}`);

    return job;
  }

  /** Update job data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {title, salary, equity, companyHandle}
   *
   * Returns {title, salary, equity, companyHandle}
   *
   * Throws NotFoundError if not found.
   */

  static async update(title, companyHandle, data) {
    const { setCols, values } = sqlForPartialUpdate(data, {
      salary: "salary",
      equity: "equity",
    });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE jobs
                      SET ${setCols} 
                      WHERE title = ${handleVarIdx} AND company_handle = ${handleVarIdx + 1} 
                      RETURNING title, 
                                salary, 
                                equity, 
                                company_handle AS "companyHandle"`;
                                
    const result = await db.query(querySql, [title, companyHandle, ...values]);
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job: ${companyHandle} - ${title}`);

    return job;
  }

  /** Delete given job from database; returns undefined.
   *
   * Throws NotFoundError if job not found.
   **/

  static async remove(title, companyHandle) {
    const result = await db.query(
      `DELETE
           FROM jobs
           WHERE title = $1 AND company_handle = $2
           RETURNING undefined`,
      [title, companyHandle]
    );
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job: ${companyHandle} - ${title}`);
  }

}

module.exports = Job;
