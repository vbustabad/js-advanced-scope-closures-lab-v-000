function produceDrivingRange(blockRange) {
  return function(beginning_point, end_point) {

    let start = parseInt(beginning_point);
    let finish = parseInt(end_point);
    let difference = (finish - start);
    let out_of_range = (difference - blockRange);

    if (difference > blockRange) {
      return "${} blocks out of range";
    }
    else {
      return "within range by $";
    }
  };
}

function produceTipCalculator(percentage) {
  return function(bill_amount) {
    return (bill_amount * percentage);
  };
}

function createDriver() {
  let driverId = 0;

  return Driver {
      constructor(name) {
        this.id = ++driverId;
        this.name = name;
      }
  };
}
