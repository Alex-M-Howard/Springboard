/** User class for message.ly */

const db = require("../db")
const bcrypt = require("bcrypt");
const ExpressError = require("../expressError");
const { BCRYPT_WORK_FACTOR } = require("../config");


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
                join_at)
        VALUES ($1, $2, $3, $4, $5, current_timestamp)
        RETURNING username, first_name, last_name, phone, join_at`,

        [username, hashedPassword, first_name, last_name, phone]);

      return new Object(result.rows[0])
   }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const results = await db.query(
      `SELECT
        username,
        first_name,
        last_name,
        phone
      FROM users`
    );
    return results.rows.map(u => new User(u))
   }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) { }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) { }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) { }
}


module.exports = User;