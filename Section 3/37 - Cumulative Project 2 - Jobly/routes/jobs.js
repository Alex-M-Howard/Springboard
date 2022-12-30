"use strict";

/** Routes for companies. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError, ExpressError } = require("../expressError");
const {
  authenticateJWT,
  ensureLoggedIn,
  ensureAdmin,
} = require("../middleware/auth");
const Job = require("../models/job.js");

const jobNewSchema = require("../schemas/jobNew.json");
const jobUpdateSchema = require("../schemas/jobUpdate.json");

const router = new express.Router();

/** POST / { job } =>  { job }
 *
 * job should be { handle, name, description, numEmployees, logoUrl }
 *
 * Returns { handle, name, description, numEmployees, logoUrl }
 *
 * Authorization required: login
 */

router.post(
  "/",
  authenticateJWT,
  ensureLoggedIn,
  ensureAdmin,
  async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, jobNewSchema);
      if (!validator.valid) {
        const errs = validator.errors.map((e) => e.stack);
        throw new BadRequestError(errs);
      }

      const job = await Job.create(req.body);
      return res.status(201).json({ job });
    } catch (err) {
      return next(err);
    }
  }
);



/** GET /  =>
 *   { companies: [ { handle, name, description, numEmployees, logoUrl }, ...] }
 *
 * Can filter on provided search filters:
 * - minEmployees
 * - maxEmployees
 * - nameLike (will find case-insensitive, partial matches)
 *
 * Authorization required: none
 */

router.get("/", async function (req, res, next) {
  try {
    let results;

    //if (!Object.keys(req.query).length) {
      results = await Job.findAll();
    //} else {
    //  results = await Job.getFilteredCompanies(req.query);
    //}

    return res.json({ jobs: results });
  } catch (err) {
    return next(err);
  }
});



/** GET /[company_handle]  =>  { job }
 *
 *  Get all jobs from a company
 *
 * Authorization required: none
 */

router.get("/:company_handle", async function (req, res, next) {
  try {
    const jobs = await Job.getCompanyJobs(req.params.company_handle);
    return res.json({ jobs });
  } catch (err) {
    return next(err);
  }
});



/** PATCH /[handle] { fld1, fld2, ... } => { job }
 *
 * Patches job data.
 *
 * fields can be: { name, description, numEmployees, logo_url }
 *
 * Returns { handle, name, description, numEmployees, logo_url }
 *
 * Authorization required: login
 */

router.patch("/:company_handle/:title", ensureLoggedIn, async function (req, res, next) {
  try {
    
    const validator = jsonschema.validate(req.params, jobUpdateSchema);
    
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    
    if (req.body.equity) {       // JSON validation not detecting equity being below 0 or above 1?
      if (req.body.equity < 0 || req.body.equity > 1) throw new ExpressError("Equity must be between 0 and 1", 400);
    }

    const job = await Job.update(req.params.title, req.params.company_handle, req.body);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});



/** DELETE /[handle]  =>  { deleted: handle }
 *
 * Authorization: login
 */

router.delete(
  "/:company_handle/:title",
  authenticateJWT,
  ensureLoggedIn,
  ensureAdmin,
  async function (req, res, next) {
    try {
      await Job.remove(req.params.title, req.params.company_handle);
      return res.json({ deleted: `${req.params.company_handle } - ${req.params.title}` });
    } catch (err) {
      return next(err);
    }
  }
);



module.exports = router;
