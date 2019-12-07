/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(array) {
  const employeeObject = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employeeObject;
};

let createEmployeeRecords = function(array) {
  return array.map(employee => {
    return createEmployeeRecord(employee);
  });
};

let createTimeInEvent = function(dateString) {
  const date = dateString.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date[1], 10),
    date: date[0]
  });
  return this;
};

let createTimeOutEvent = function(dateString) {
  const date = dateString.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date[1], 10),
    date: date[0]
  });
  return this;
};

let hoursWorkedOnDate = function(dateString) {
  let inTime = this.timeInEvents.find(time => time.date === dateString).hour;
  let outTime = this.timeOutEvents.find(time => time.date === dateString).hour;
  return (outTime - inTime) / 100;
};

let wagesEarnedOnDate = function(date) {
  let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return parseFloat(wage.toString(), 10);
};

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
};

let calculatePayroll = function(array) {
  return array.reduce(function(accumulator, employeeIterator) {
    return accumulator + allWagesFor.call(employeeIterator);
  }, 0);
};

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  return payable;
};
