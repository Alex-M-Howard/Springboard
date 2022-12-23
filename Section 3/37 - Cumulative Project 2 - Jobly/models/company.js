"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError, ExpressError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(
          `SELECT handle
           FROM companies
           WHERE handle = $1`,
        [handle]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`);

    const result = await db.query(
          `INSERT INTO companies
           (handle, name, description, num_employees, logo_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
        [
          handle,
          name,
          description,
          numEmployees,
          logoUrl,
        ],
    );
    const company = result.rows[0];

    return company;
  }


  /** Find all companies.
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  static async findAll() {
    const companiesRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           ORDER BY name`);
    return companiesRes.rows;
  }


  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const company = companyRes.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }


  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {

    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          numEmployees: "num_employees",
          logoUrl: "logo_url",
        });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }


  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
          `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
        [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }


  /** Get companies that match query string variables
   * minEmployees
   * maxEmployees
   * nameLike
   * 
   * Throws error if minEmployees > maxEmployees
   * 
   * This will be a similar method to the helper
   * sqlForPartialUpdate
   */

  static async getFilteredCompanies(data) {
    
    if (data["minEmployees"] > data["maxEmployees"]) {
      return new ExpressError("minEmployees cannot be greater than maxEmployees", 400)
    }

    const keys = Object.keys(data);
    const values = Object.values(data);
    
    let cols = keys.map((column, idx) => {
      if (column === "minEmployees") {
         return `num_employees >= $${idx + 1}`;
      }
      
      if (column === "maxEmployees") {
        return `num_employees <= $${idx + 1}`;
      }
      
      if (column === "nameLike"){
        values[idx] = `%${values[idx].toLowerCase()}%`;
        return `name LIKE $${idx + 1}`;
      }
    });

    
    cols = cols.join(" AND ")

    // // If min and max specified, replace the comma with AND
    // if (cols.split("num_employees").length - 1 > 1) {
    //   cols = cols.replace("num_employees >= $1, num_employees <= $2", "num_employees >= $1 AND num_employees <= $2");
    // }

    const querySql = `SELECT handle,
                             name,
                             description,
                             num_employees AS "numEmployees",
                             logo_url AS "logoUrl" 
                      FROM companies
                      WHERE ${cols}
                      `;
    
    console.log(values)
    console.log(querySql);
    const result = await db.query(querySql, [...values]);
    
    return result.rows;

  }

}


module.exports = Company;
