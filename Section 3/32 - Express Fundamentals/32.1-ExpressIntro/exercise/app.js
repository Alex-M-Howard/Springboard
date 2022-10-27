const express = require("express");
const { mean, median, mode } = require('./mathFuncs')
const ExpressError = require('./errors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/mean', (request, response , next) => {

  try {
    if (!request.query.nums) throw new ExpressError("Make sure to query in this format: '/mean?nums=1,2,3'", 400);
    let nums = request.query.nums.split(",");

    nums.forEach((num, index) => {
        if (!Number.isInteger(parseInt(num))) throw new ExpressError(`${num} is not a number!`, 400)
        nums[index] = parseInt(num);      
    });

    return response.json({
      'operation': 'mean',
      'mean': mean(nums)
    });

  } catch (error) {
    return next(error);
  }
})

app.get('/api/median', (request, response , next) => {

  try {
    if (!request.query.nums) throw new ExpressError("Make sure to query in this format: '/median?nums=1,2,3'", 400);
    let nums = request.query.nums.split(",");

    nums.forEach((num, index) => {
        if (!Number.isInteger(parseInt(num))) throw new ExpressError(`${num} is not a number!`, 400)
        nums[index] = parseInt(num);      
    });

    return response.json({
      'operation': 'median',
      'median': median(nums)
    });

  } catch (error) {
    return next(error);
  }
})

app.get('/api/mode', (request, response , next) => {

  try {
    if (!request.query.nums) throw new ExpressError("Make sure to query in this format: '/mode?nums=1,2,3'", 400);
    let nums = request.query.nums.split(",");

    nums.forEach((num, index) => {
        if (!Number.isInteger(parseInt(num))) throw new ExpressError(`${num} is not a number!`, 400)
        nums[index] = parseInt(num);      
    });

    return response.json({
      'operation': 'mode',
      'mode': mode(nums)
    });

  } catch (error) {
    return next(error);
  }
})

app.get('/api/all', (request, response , next) => {

  try {
    if (!request.query.nums) throw new ExpressError("Make sure to query in this format: '/all?nums=1,2,3'", 400);
    let nums = request.query.nums.split(",");

    nums.forEach((num, index) => {
        if (!Number.isInteger(parseInt(num))) throw new ExpressError(`${num} is not a number!`, 400)
        nums[index] = parseInt(num);      
    });

    return response.json({
      'operation': 'all',
      'mean': mean(nums),
      'median': median(nums),
      'mode': mode(nums)
    });

  } catch (error) {
    return next(error);
  }
})


app.use(function errors(error, request, response, next) {
  let status = error.status || 500;
  let message = error.message;
  
  // set the status and alert the user
  return response.status(status).json({
    error: { message, status },
  });
})


app.listen(3000, function () {
  console.log("App on port 3000");
});
