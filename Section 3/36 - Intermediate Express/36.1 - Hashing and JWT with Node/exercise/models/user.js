/** User class for message.ly */

const db = require("../db.js");
const bcrypt = require('bcrypt')
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config.js');
const ExpressError = require("../expressError.js");
const jwt = require("jsonwebtoken");
const Message = require("./message")


/** User of the site. */

class User {
  
  constructor({ username, password, first_name, last_name, phone }) {
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }


  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({ username, password, first_name, last_name, phone }) {
    //hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `
        INSERT INTO users (
                username,
                password,
                first_name,
                last_name,
                phone,
                join_at,
                last_login_at)
        VALUES ($1, $2, $3, $4, $5, current_timestamp, current_timestamp)
        RETURNING username, first_name, last_name, phone`,

      [username, hashedPassword, first_name, last_name, phone]
    );
    let user = new Object(result.rows[0])
    user.password = hashedPassword;
    
    return user;
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const result = await db.query(
      `SELECT password
       FROM users
       WHERE username = $1`, [username]
    )
    
    let user = result.rows[0];

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        let token = User.getNewToken(username);
        return token
      }
    }
    throw new ExpressError("Invalid user/password", 400);
  }


  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { 
    const results = await db.query(`
    UPDATE users
    SET last_login_at = current_timestamp
    WHERE username = $1`, [username]
    );

  }
  

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const results = await db.query(`
    SELECT
      username,
      first_name,
      last_name,
      phone
    FROM users;`);

    return results.rows.map((u) => new User(u));
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const results = await db.query(`
    SELECT username, first_name, last_name, phone, join_at, last_login_at
    FROM users
    WHERE username = $1`, [username]    
    )

    if (results.rows[0]) {
      return results.rows[0]
    }

    throw new ExpressError(`User ${username} not found`, 400);

  }


  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    const result = await db.query(
      `SELECT *
       FROM users
       WHERE username = $1`,
      [username]
    );

    let user = result.rows[0];

    if (user) {
      const results = await db.query(
        `
      SELECT id
      FROM messages
      WHERE from_username = $1`,
        [username]
      );

      if (!results.rows[0]) {
        return { message: "No messages" };
      }

      const promises = results.rows.map(async (message) => {
        const m = await Message.get(message.id);
        return m;
      });

      const messages = await Promise.all(promises);

       messages.map((m) => {
         delete m.from_user;
       });

      return messages;
    }

    throw new ExpressError(`User ${username} not found`, 400);
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) {
    const result = await db.query(
      `SELECT *
       FROM users
       WHERE username = $1`,
      [username]
    );

    let user = result.rows[0];

    if (user) {
      const results = await db.query(
        `
      SELECT id
      FROM messages
      WHERE to_username = $1`,
        [username]
      );
      
      if (!results.rows[0]) {
        return { message: "No messages" };
      }

      const promises = results.rows.map(async message => {
        const m = await Message.get(message.id);
        return m
      })

      const messages = await Promise.all(promises)

      messages.map(m => {
        delete m.to_user
      })

      return messages;
      
    }

    throw new ExpressError(`User ${username} not found`, 400);

  }


  /**
   * 
   * Gets new JWT token and returns to user 
   * 
   */
  static async getNewToken(username) {
    let token = jwt.sign({ username }, SECRET_KEY);
    return token
  }
    
}

  

module.exports = User;