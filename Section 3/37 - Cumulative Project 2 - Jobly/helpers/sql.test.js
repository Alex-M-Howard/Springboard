const { sqlForPartialUpdate } = require("../helpers/sql");

const testUserData = {
    firstName: "Alex",
    lastName: "Smith",
    isAdamin: "is_admin"
    

}

describe("sqlForPartialUpdate", function () {
  test("Get parameterized string back and values that need updated", function () {
    const payload = sqlForPartialUpdate(testUserData, {first_name: "first_name", last_name: "last_name", is_admin: "is_admin"})
    const {setCols, values} = payload;
    
    expect(setCols).toEqual('"firstName"=$1, "lastName"=$2, "isAdamin"=$3');
    expect(values).toEqual(expect.arrayContaining(['Alex', 'Smith', 'is_admin']));
  });

  test("No data sent, throw error", function () {
    expect(() => {
      const payload = sqlForPartialUpdate({}, {
        first_name: "first_name",
        last_name: "last_name",
        is_admin: "is_admin"
      }).toThrow('No data');
    })
    
    expect(() => {
      const payload = sqlForPartialUpdate(testUserData, {})
        
        
        .toThrow('No data');
    })




  })

});
 