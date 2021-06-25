// void:- function does not return any value then you can specify void as return type.
function test() {
    var msg;
    msg = "return something";
    console.log("void function which will not return any value");
    document.write("Hi every one void type here");
    //return msg  we can't return any thing in this function
}
test();
var a; // if data type is of void then we only assign null and undefined in it
console.log(a); // undefined
console.log(typeof (a)); // undefined
// a=10
// a="str"
a = null;
console.log(a);
console.log("type of a is ", typeof (a));
a = undefined;
console.log(a); //undefined
