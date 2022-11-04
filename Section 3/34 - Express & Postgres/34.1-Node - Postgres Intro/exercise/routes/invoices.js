const express = require("express");
const router = new express.Router();
const db = require("../db");

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(`
        SELECT * FROM invoices`);

    return res.json({ invoices: results.rows });
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const results = await db.query(
      `
        SELECT 
            i.id, 
            i.comp_code,
            i.amt,
            i.paid,
            i.add_date,
            i.paid_date,
            c.name,
            c.description
        FROM invoices AS i
        INNER JOIN companies AS c ON (i.comp_code=c.code)
        WHERE id=$1`,
      [req.params.id]
    );

    if (results.rows.length < 1) {
      return res.status(404).json([{ message: "Invoice Not Found" }]);
    }
    return res.status(200).json({ invoice: results.rows });
  } catch (err) {
    return next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { comp_code, amt } = req.body;

    const results = await db.query(
      `
        INSERT INTO invoices (comp_code, amt) 
        VALUES ($1, $2)
        RETURNING *`,
      [comp_code, amt]
    );

    return res.status(201).json({ invoice: results.rows });
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const { amt } = req.body;

    const results = await db.query(
      `
        UPDATE invoices SET amt=$1
        WHERE id=$2
        RETURNING *`,
      [amt, req.params.id]
    );

    if (results.rows.length < 1) {
      return res.status(404).json([{ message: "Invoice Not Found" }]);
    }
    return res.status(200).json({ invoice: results.rows });
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const results = await db.query(
      `
        DELETE FROM invoices 
        WHERE id=$1`,
      [req.params.id]
    );

    if (results.rowCount === 0) {
      return res.status(404).json([{ message: "Invoice Not Found" }]);
    }
    return res.status(200).json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
