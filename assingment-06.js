
// Problem -06 solution.............
var experience = 30 ;
var startingSalary = 45000;
var salary = startingSalary;

for (var i = 1; i <= experience; i++) {
var incrementPerYear = salary*0.05;
    salary = salary + incrementPerYear;
}

console.log(salary.toFixed(2));  
