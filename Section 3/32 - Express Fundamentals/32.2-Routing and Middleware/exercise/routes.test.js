process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("./app");
let items = require("./fakeDb");

let item = { item: "popsicle", cost: 1.49 };

beforeEach(async () => {
  items.push(item);
});

afterEach(async () => {
  items.length = 0;
});


describe("GET /items", function () {
  test("Gets a list of items", async function () {
      await request(app).get(`/items`).then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toHaveLength(1);
      })
  });
});

describe("POST /items", function () {
  test("Adds new item to list of items", async function () {
    newItem = { "item": "cheerios", "cost": 3.99 }
    
    await request(app)
        .post(`/items`)
        .send(newItem)
        .then((response) => {
           expect(response.statusCode).toBe(200);
           expect(response.body).toEqual({
             added: { item: "cheerios", cost: 3.99 },
           }); 
        })
  })
});

describe(`GET /items/:name`, function () {
  test("Get specific item from list", async function () {      
    await request(app)
        .get(`/items/${item.item}`)
        .then((response) => {
           expect(response.statusCode).toBe(200);
           expect(response.body).toEqual({ item: `${item.item}`, cost: item.cost })
        })
    })
    
    test("Get an invalid item from list", async function () {
        await request(app)
            .get('/items/popcycles')
            .then((response) => {
                expect(response.statusCode).toBe(400);
            })
    })
});

describe(`PATCH /items/:name`, function () {
  test("Update item in list", async function () {      
    await request(app)
        .patch(`/items/${item.item}`)
        .send({"item": "new popsicle", "cost": 1.59})
        .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                {
                    "old": {
                        "item": item.item,
                        "cost": item.cost
                    }, "updated": {
                        "item": "new popsicle",
                        "cost": 1.59
               }}
           )
        })
    })
    
    test("Try to update an invalid item from list", async function () {
        await request(app)
            .patch('/items/popcycles')
            .send({"item":"new popsicle", "cost": 1.59})
            .then((response) => {
                expect(response.statusCode).toBe(400);
            })
    })
});

describe(`DELETE /items/:name`, function () {
  test("Delete item from list", async function () {      
    await request(app)
        .delete(`/items/${item.item}`)
        .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ "message": "deleted"})
        })
      
    await request(app)
        .get("/items")
        .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveLength(0);
        })
      
    })
    
    test("Try to delete an invalid item from list", async function () {
        await request(app)
            .delete('/items/popcycles')
            .then((response) => {
                expect(response.statusCode).toBe(400);
            })
    })
});
