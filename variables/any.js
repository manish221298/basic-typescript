// if a variable can not be represented in any of the basic data-types, then it can be declared using "Any"
var x;
x = 10;
x = "string";
x = false;
function add(p, q) {
    var z;
    z = p + q;
    return z;
}
console.log(add(5, 7));
console.log(add("manish", 67));
