const express = require("express")
const router = new express.Router()
const Message = require("../models/message")
const { authenticateJWT, ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");
const ExpressError = require("../expressError");

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
router.get(
  "/:id",
  authenticateJWT,
  ensureLoggedIn,
  async (req, res, next) => {
      try {
      
          const message = await Message.get(req.params.id);

          if (req.user.username === message.to_user.username ||
              req.user.username === message.from_user.username){
              return res.json(message);
              }
           throw new ExpressError('Unauthorized', 401)
      
    } catch (error) {
      return next(error);
    }
  }
);

/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
router.post("/", authenticateJWT, ensureLoggedIn, async (req, res, next) => {
  try {
      let { to_username, body } = req.body
      
      const result = await Message.create({
          "from_username": req.user.username,
          "to_username": to_username,
          "body": body
      })

      return res.json(result);
    }
  catch (error) {
      if (error.code === '23503') {
          return next(new ExpressError('To Username Not Valid', 400))
      }
      return next(error);
    }
});

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
router.post("/:id/read", authenticateJWT, ensureLoggedIn, async (req, res, next) => {
    try {
        let message = await Message.get(req.params.id)
        

        if (req.user.username === message.to_user.username) {
            let response = await Message.markRead(req.params.id);
            
            return res.json(response);
        }
        throw new ExpressError("Unauthorized", 401);
        
    } catch (error) {
        return next(error);
    }
})



module.exports = router;