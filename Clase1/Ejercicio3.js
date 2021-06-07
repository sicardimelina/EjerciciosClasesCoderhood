// Día de paga

var amountDeliveryMen = 5;
var isHollidayDay = false;
var dayIncome = 30000;
var salaryPercentage;
var netSalary;
var finalBusinessIncome;
var hollidayDayPercentage = 80;
var normalDayPercentage = 65;

if (isHollidayDay === true) {
  salaryPercentage = hollidayDayPercentage;
  console.log("Today is a holliday day");
} else {
  salaryPercentage = normalDayPercentage;
  console.log("Today is a normal day");
}

netSalary = (dayIncome * (salaryPercentage / 100)) / amountDeliveryMen;
console.log("The net salary for each employee is $", netSalary);
finalBusinessIncome = dayIncome - netSalary * amountDeliveryMen;
console.log("The final income for the business is $", finalBusinessIncome);