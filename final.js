// Problem - 01 solution..............

// veriable declation here....
var area = 15;
// output store in the result variable
var result = area / 2;  

console.log(result);

// Problem 02 solution.......

var money = 9999;

if (money >= 25000) {
    console.log("Laptop");
  } else if (money >= 10000) {
    console.log("Cycle");
  } else {
    console.log("Chocolate");
  }

  
// problem 03 solution...........
var lastDay = 4;
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " - medicine");
  }
  else {
    console.log(i + " - rest");
  }
}


// Problem 04 .............

var fileName = "slipdf.txt";

if (fileName.slice(0, 1) === "#") {
  console.log("Store");
} 
else if (fileName.slice(-4) === ".pdf") {
  console.log("Store");
} 
else if (fileName.slice(-5) === ".docx") {
  console.log("Store");
} 
else {
  console.log("Delete");
}



// Problem 05 solution .............

var student = {
  name: "jhanku",
  roll: 1014,
  department: "cse"
};

var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);



// Problem -06 solution.............
var experience = 30 ;
var startingSalary = 45000;
var salary = startingSalary;

for (var i = 1; i <= experience; i++) {
var incrementPerYear = salary*0.05;
    salary = salary + incrementPerYear;
}

console.log(salary.toFixed(2));  


