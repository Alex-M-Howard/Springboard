function curriedAdd(total) {
  return function add(secondTotal){
    if(secondTotal === undefined){
      return total;
    }
    total += secondTotal;
    return add;
  }
}

module.exports = { curriedAdd };
