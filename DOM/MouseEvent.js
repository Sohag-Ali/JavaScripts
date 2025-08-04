console.clear();
const div = document.querySelector("div");

div.addEventListener("click", function () {
    console.log("Single click");
});

div.addEventListener("dblclick", function () {
    console.log("Double click");
});
div.addEventListener("mousedown", function () {
    console.log("mousedown");
});
div.addEventListener("mouseup", function () {
    console.log("mouseup");
});
div.addEventListener("dblclick", function () {
    console.log("Double click");
});
