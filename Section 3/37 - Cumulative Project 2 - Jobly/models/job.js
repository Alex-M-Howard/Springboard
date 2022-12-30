"use strict";

const db = require("../db.js");
const {BadRequestError,NotFoundError,ExpressError } = require("../expressError");
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
           WHERE title = $1 AND company_handle = $2`,
      [title, company_handle]
    );

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate job: ${company_handle} - ${title}`);

    const result = await db.query(
      `INSERT INTO jobs
           (title, salary, equity, company_handle)
           VALUES ($1, $2, $3, $4)
           RETURNING title, salary, equity, company_handle`,
      [title, salary, equity, company_handle]
    );
    const job = result.rows[0];

    return job;
  }

  /** Find all jobs.
   *
   * Returns [{ title, salary, equity, company_handle }, ...]
   * */

  static async findAll() {
    const jobsResponse = await db.query(
      `SELECT title,
              salary,
              equity,
              company_handle
        FROM jobs
        ORDER BY company_handle`
    );

    return jobsResponse.rows;
  }

  /** Given a job title and copmany handle, return data about job.
   *
   * Returns { title, salary, equity, company_handle }
   *
   ** Throws NotFoundError if not found.
   **/

  static async get(title, company_handle) {
    const jobResponse = await db.query(
      `SELECT title,
              salary,
              equity,
              company_handle
        FROM jobs
        WHERE title=$1 AND company_handle=$2`,
      [title, company_handle]
    );

    const job = jobResponse.rows[0];

    if (!job) throw new NotFoundError(`No job: ${company_handle} - ${title}`);

    return job;
  }

  /** Update job data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {title, salary, equity, company_handle}
   *
   * Returns {title, salary, equity, company_handle}
   *
   * Throws NotFoundError if not found.
   */

  static async update(title, company_handle, data) {
    let oldTitle = title;

    if (data.title) title = data.title;

    const { setCols, values } = sqlForPartialUpdate(data, {
      title: "title",
      salary: "salary",
      equity: "equity",
    });
    
    const oldTitleIdx = "$" + (values.length + 1);
    const companyHandleVarIdx = "$" + (values.length + 2);

    const querySql = `UPDATE jobs
                      SET ${setCols} 
                      WHERE title = ${oldTitleIdx} AND company_handle = ${companyHandleVarIdx}
                      RETURNING title, 
                                salary, 
                                equity, 
                                company_handle`;
       
    const result = await db.query(querySql, [...values, oldTitle, company_handle]);
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job: ${company_handle} - ${oldTitle}`);

    return job;
  }

  /** Delete given job from database; returns undefined.
   *
   * Throws NotFoundError if job not found.
   **/

  static async remove(title, company_handle) {
    const result = await db.query(
      `DELETE
           FROM jobs
           WHERE title = $1 AND company_handle = $2
           RETURNING NULL
          `,
      [title, company_handle]
    );
    const job = result.rows[0];
    
    if (!job) throw new NotFoundError(`No job: ${company_handle} - ${title}`);
    
  }
 

}

module.exports = Job;
