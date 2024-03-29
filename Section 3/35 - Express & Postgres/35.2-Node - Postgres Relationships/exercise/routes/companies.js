const express = require("express");
const ExpressError = require("../expressError")
const slugify = require("slugify")
const router = new express.Router();
const db = require("../db")

router.get("/", async function (req, res, next) {
    try {
        const results = await db.query(`
        SELECT * FROM companies`);

        return res.json({ companies: results.rows });
    }
    catch (err) {
        next(err);
    }
})

router.get("/:code", async function (req, res, next) {
    try {
        const compResult = await db.query(`
        SELECT * FROM companies WHERE code=$1`, [req.params.code]);
        
        const invResult = await db.query(`
        SELECT id FROM invoices WHERE comp_code=$1`, [req.params.code]);

        if (compResult.rows.length < 1) { throw new ExpressError(`No such company: ${req.params.code}`, 404); }
        
        const company = compResult.rows[0];
        const invoices = invResult.rows;

        company.invoices = invoices.map(inv => inv.id)
        return res.status(200).json({ "company": company });
    }
    catch (err) {
        next(err);
    }
})

router.post("/", async function (req, res, next) {
    try {
        const { name, description } = req.body;
        let code = slugify(name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
            strict: true,
        });

        const results = await db.query(
          `
        INSERT INTO companies (code, name, description) 
        VALUES ($1, $2, $3)
        RETURNING *`,
          [
            code,
            name,
            description,
          ]
        );

        return res.status(201).json({ company: results.rows });
    }
    catch (err) {
        next(err);
    }
})

router.patch("/:code", async function (req, res, next) {
    try {
        const { name, description } = req.body;
        
        const results = await db.query(
          `
        UPDATE companies SET name=$1, description=$2
        WHERE code=$3
        RETURNING *`,
            [name, description, req.params.code]
        );

        if (results.rows.length < 1) {throw new ExpressError(`No such company: ${req.params.code}`, 404);}
        return res.status(200).json({ company: results.rows });
    }
    catch (err) {
        next(err);
    }
})

router.delete("/:code", async function (req, res, next) {
    try {
        const results = await db.query(
          `
        DELETE FROM companies 
        WHERE code=$1`,
            [req.params.code]
        );

        if (results.rowCount === 0) { throw new ExpressError(`No such company: ${req.params.code}`, 404);}
        return res.status(200).json({ message: "Deleted" });
    }
    catch (err) {
        next(err);
    }
})


module.exports = router;