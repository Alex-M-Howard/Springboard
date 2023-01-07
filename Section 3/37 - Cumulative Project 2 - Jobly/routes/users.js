"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");

const express = require("express");
const {authenticateJWT,ensureLoggedIn,ensureAdmin,} = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const Job = require("../models/job");
const { createToken } = require("../helpers/tokens");
const userNewSchema = require("../schemas/userNew.json");
const userUpdateSchema = require("../schemas/userUpdate.json");

const router = express.Router();


/** POST / { user }  => { user, token }
 *
 * Adds a new user. This is not the registration endpoint --- instead, this is
 * only for admin users to add new users. The new user being added can be an
 * admin.
 *
 * This returns the newly created user and an authentication token for them:
 *  {user: { username, firstName, lastName, email, isAdmin }, token }
 *
 * Authorization required: login
 **/

router.post("/", authenticateJWT, ensureLoggedIn, ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.register(req.body);
    const token = createToken(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    return next(err);
  }
});


/** GET / => { users: [ {username, firstName, lastName, email }, ... ] }
 *
 * Returns list of all users.
 *
 * Authorization required: login
 **/

router.get(
  "/",
  authenticateJWT,
  ensureLoggedIn,
  ensureAdmin,
  async function (req, res, next) {
    try {
      const users = await User.findAll();
      const applications = await User.getAllApplications();
      
      users.map(user => {
        const apps = []
        applications.filter(app => {
          if(app.username === user.username){
            apps.push(app.jobId)
          }
        })
        user.applications = apps
    })
        
      

      return res.json({ users });
    } catch (err) {
      return next(err);
    }
  }
);


/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName, isAdmin }
 *
 * Authorization required: login
 **/

router.get(
  "/:username",
  authenticateJWT,
  ensureLoggedIn,
  async function (req, res, next) {
    try {

      const user = await User.get(req.params.username);
      const applications = await User.getAllApplications();
      
      const apps = []
      applications.filter(app => {
          if(app.username === user.username){
            apps.push(app.jobId)
          }
        })
        user.applications = apps
    
      
      if (res.locals.user.username === user.username || res.locals.user.isAdmin) {
        return res.json({ user });
      }
      throw new UnauthorizedError();
    } catch (err) {
      return next(err);
    }
  }
);


/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { firstName, lastName, password, email }
 *
 * Returns { username, firstName, lastName, email, isAdmin }
 *
 * Authorization required: login
 **/

router.patch(
  "/:username",
  authenticateJWT,
  ensureLoggedIn,

  async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, userUpdateSchema);
      if (!validator.valid) {
        const errs = validator.errors.map((e) => e.stack);
        throw new BadRequestError(errs);
      }


      const user = await User.update(req.params.username, req.body);
      if (res.locals.user.username === user.username || res.locals.user.isAdmin) {
        return res.json({ user });
      }
      throw new UnauthorizedError();
    } catch (err) {
      return next(err);
    }
  }
);


/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: login
 **/

router.delete("/:username", authenticateJWT, ensureLoggedIn, async function (req, res, next) {
  try {
    if (res.locals.user.username === req.params.username || res.locals.user.isAdmin) {

      await User.remove(req.params.username);
      return res.json({ deleted: req.params.username });
    }
    throw new UnauthorizedError();
  } catch (err) {
    return next(err);
  }
});



/** POST /[username]/jobs/[id] => {applied: [id]} 
* 
* 
**/

router.post("/:username/jobs/:id", authenticateJWT, ensureLoggedIn, async function (req, res, next) {
    try {
      let user = await User.get(req.params.username);
      if (!user) throw new BadRequestError(`No such user: ${req.params.username}`);

      if(res.locals.user.username !== req.params.username){
        if (!res.locals.user.isAdmin) {
          return next(new UnauthorizedError());
        }
      }

      const username = req.params.username;
      const id = req.params.id;
      const applied = await User.applyToJob(username, id);
      return res.json({ applied });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
