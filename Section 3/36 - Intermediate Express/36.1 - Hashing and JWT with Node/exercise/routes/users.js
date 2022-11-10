const express = require("express");
const db = require("../db")

const User = require("../models/user")
const ExpressError = require("../expressError")
const router = new express.Router()

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
router.get("/", async function (req, res, next) {
    console.log(await User.all());
    return res.send('hello')
})



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
        return next(e)
    }

})

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

module.exports = router;