var dataset = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var search = "computer";

var count = dataset.reduce(function(n, val) {
    return n + (val === search);
}, 0);

console.log(count);
