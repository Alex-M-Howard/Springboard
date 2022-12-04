const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const ExpressError = require('../expressError')
const {authenticateJWT, ensureLoggedIn} = require('../middleware/auth')

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
router.get("/", authenticateJWT, ensureLoggedIn, async (req, res, next) => {
  try {
    users = await User.all();
    return res.json(users);
  } catch (error) {
    return next(err);
  }
});



/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
router.get(
  "/:username",
  authenticateJWT,
  ensureLoggedIn,
  async (req, res, next) => {
    try {
      const user = await User.get(req.params.username);
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  }
);

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
router.get(
  "/:username/to",
  authenticateJWT,
  ensureLoggedIn,
  async (req, res, next) => {
    try {
      const messages = await User.messagesTo(req.params.username);

      return res.json(messages);
    } catch (error) {
      return next(error);
    }
  }
);

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
router.get("/:username/from", authenticateJWT, ensureLoggedIn, async (req, res, next) => {
  try {
    const messages = await User.messagesFrom(req.params.username);
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
