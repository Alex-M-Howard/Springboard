const express = require("express")
const items = require("./fakeDb")
const ExpressError = require("./errors");
const { CLIENT_RENEG_LIMIT } = require("tls");

const router = new express.Router();

router.get("/", function (req, res) {
    res.send("HOME")
})

router.get("/items", function (req, res) {
    return res.json(items);
})

router.post("/items", function (req, res, next) {
    try {
        if (!Object.keys(req.body).length) throw new ExpressError('No data received in request', 400)

        items.push({"item": req.body.item, "cost": req.body.cost})
    
        return res.json({ 'added': { 'name': req.body.item, 'cost': req.body.cost } })
    } catch (err) {
        next(err)
    }
})

router.get("/items/:name", function (req, res, next) {
    try {
        let results = items.filter((element) => {
            if (element.item.toLowerCase() === req.params.name.toLowerCase()) {
                return res.json(element)
            }
        })
        if(!results.length) throw new ExpressError("Item not found", 400);
    
    } catch (err) {
        next(err)
    }
})

router.patch("/items/:name", function (req, res, next) {
    try {
      if (!Object.keys(req.body).length) throw new ExpressError("No data received in request", 400);
      
      let results = items.filter((element, index) => {
      if (element.item.toLowerCase() === req.params.name.toLowerCase()) {
        let oldItem = element.item;
        let oldCost = element.cost;

            items[index] = {"item": req.body.item, "cost": req.body.cost};
            return res.json(
                {
                    "old": {
                        "item": oldItem,
                        "cost": oldCost
                    },
                    "updated": {
                        "item": req.body.item,
                        "cost": req.body.cost
                }}
            )
        }
      });
      if (!results.length) throw new ExpressError("Item not found. Cannot update.", 400);
    } catch (err) {
      next(err);
    }
})

router.delete("/items/:name", function (req, res, next) {
    try {
      let results = items.filter((element, index) => {
      if (element.item.toLowerCase() === req.params.name.toLowerCase()) {
          items.splice(index, 1);
          return res.json({'message': 'deleted'})
        }
      });
        
      if (!results.length) throw new ExpressError("Item not found. Cannot delete.", 400);
    
    } catch (err) {
      next(err);
    }
})




router.use(function errors(error, request, response, next) {
  let status = error.status || 500;
  let message = error.message;

  // set the status and alert the user
  return response.status(status).json({
    error: { message, status },
  });
});

module.exports = router;

