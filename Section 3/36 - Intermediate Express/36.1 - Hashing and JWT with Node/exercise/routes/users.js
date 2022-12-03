const express = require('express');
const User = require('../models/user');
const router = new express.Router();


/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
router.get("/", async (req, res, next) => {
    try {
        users = await User.all();
        return res.json(users);
    }
    catch (error) {
        return next(err)
    }
});



/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/


/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

/** POST / - create new user.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

router.post("/", async function (req, res, next) {
    try {
      const { username, password, first_name, last_name, phone } = req.body; 
        
      if (!username || !password || !first_name || !last_name || !phone) {
        throw new ExpressError("Username, password, first/last name, and phone required", 400);
      }
        let user = await User.register(req.body)
        return res.send(user);

    } catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username already taken. Pick another!", 400))
        }
        return next(e)
    }

})

module.exports = router;
