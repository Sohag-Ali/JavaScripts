// // Problem 03:
// একটি নতুন কোম্পানি, "AlphaCorp", তাদের employee দেরকে তাদের ডেটাবেজে একসেস দেওয়ার জন্য স্বয়ংক্রিয়ভাবে একটি Unique Employee username তৈরি করতে চায়। এই username employee দের কিছু ব্যক্তিগত তথ্যের উপর ভিত্তি করে তৈরি হবে।

// আপনাকে একটি প্রোগ্রাম লিখতে হবে যা একটি employee নামে অবজেক্ট ইনপুট নেবে, যেখানে কর্মীদের তথ্য নিম্নলিখিতভাবে থাকবে:
// { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// // Output:
// username: doe101@alphacorp.com

// নিয়মাবলী:
// 👉 প্রথমে lastName এর প্রথম তিনটি অক্ষর ছোট হাতের হবে।
// 👉 তারপরে employeeId হবে।
// 👉 এরপরে @ হবে
// 👉 এরপরে কোম্পানি নাম ছোট হাতের হবে
// 👉 সর্বশেষে .com হবে।



// ADVANCED: username পাশাপাশি একটি Temporary Password বানাবে
// 👉 যদি lastName তিন অক্ষরের কম হয়, তাহলে lastName এর সব অক্ষর ব্যবহার করা হবে।
// 👉 for Password generate use firstname last 3 char + # + departmentCode

// // Output:
// ID: doe101@alphacorp.com, TempPass: jn1#AC

var employee = 
{
	firstName: 'Sohag',
	lastName: 'Ali',
	employeeId: 101,
	departmentCode: 'Engineer',
	companyName: 'Alphacorp',
}
var lastThreeCh
if (employee.lastName.length < 3) {
	lastThreeCh = employee.lastName
} else {
	lastThreeCh = employee.lastName.slice(0, 3).toLowerCase()
}

var result =
	lastThreeCh +
	employee.employeeId +
	'@' +
	employee.companyName.toLowerCase() +
	'.com'


var firstThreeCh
if (employee.firstName.length < 3) {
	firstThreeCh = employee.firstName
} else {
	firstThreeCh = employee.firstName.slice(-3).toLowerCase();
}

var pass =
	firstThreeCh +
	'#' +
	employee.departmentCode.toLowerCase()

console.log("Gmail : " + result +"," + " ID pass : "+pass);