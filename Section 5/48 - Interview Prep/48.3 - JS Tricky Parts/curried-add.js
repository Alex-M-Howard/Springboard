function curriedAdd(total) {
  if (!total) {
    return 0
  }
  
  return function add(secondTotal){
    if(secondTotal === undefined){
      return total;
    }
    total += secondTotal;
    return add;
  }
}

module.exports = { curriedAdd };
