// default parameter 
function show(greet, name) {
    if (name === void 0) { name = "manish"; }
    return greet + "  " + name;
}
console.log(show("hi"));
// Optional parameter
function display(greet, name) {
    console.log("optional parameter", greet);
}
display("manish kumar");
// rest parameter  (if i don't know how many parameter we need to pass then we use)
function dikhao(name) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    console.log(name + '' + msg.join(","));
}
dikhao("manish", "kumar", "chaurasia", "chaurasia");
