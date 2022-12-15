const { BadRequestError } = require("../expressError");

/**
 * data with columns to update is received, along with 'default'
 * values to use for those columns if they are not sent.
 * 
 * Data is mapped and a string is returned with parameterized values
 * $1, $2, etc. 
 * 
 * Also returned are the values to update in an array
 * 
 * This will lead to a query like:
 * UPDATE companies
 * SET name=$1, num_employees=$2, [name, num_employees]] 
 * 
 * */
function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
