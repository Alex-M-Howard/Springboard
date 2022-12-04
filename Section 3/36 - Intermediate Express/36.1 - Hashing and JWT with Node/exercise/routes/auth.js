const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const ExpressError = require('../expressError');

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
router.post("/login", async function (req, res, next) {
    try {
        const { username, password } = req.body;
        let token = await User.authenticate(username, password);
        let response = await User.updateLoginTimestamp(username);

        return res.json({ "token": token })

    } catch (error) {
        return next(error);
    }

})


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
router.post("/register", async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, phone } = req.body;

    if (!username || !password || !first_name || !last_name || !phone) {
      throw new ExpressError(
        "Username, password, first/last name, and phone required",
        400
      );
    }
      let user = await User.register(req.body);
      let token = await User.getNewToken(username);
    
      
      return res.json({ 'token': token });
      
  } catch (e) {
    if (e.code === "23505") {
      return next(
        new ExpressError("Username already taken. Pick another!", 400)
      );
    }
    return next(e);
  }
});

module.exports = router;