var lastDay = 6;
for (var i = 1; i <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(i + " - medicine");
  } else {
    console.log(i + " - rest");
  }
}
