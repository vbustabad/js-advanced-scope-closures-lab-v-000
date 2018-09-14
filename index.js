function produceDrivingRange(blockRange) {
  return function(beginning_point, end_point) {

    let start = parseInt(beginning_point);
    let finish = parseInt(end_point);
    let distance = (finish - start);
    let out_of_range = (distance - blockRange);

    if (distance > blockRange) {
      return `${out_of_range} blocks out of range`;
    }
    else {
      return `within range by ${blockRange - distance}`;
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

  return class Driver {
      constructor(name) {
        this.name = name;
        this.id = ++driverId;
      }
  };
}
