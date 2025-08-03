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

