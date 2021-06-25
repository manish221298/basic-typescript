// Generic data type in type-script

function show<T>(arg: T): T{
    return arg
}

let output1 = show<string>("generic data type check at run time")
let output2 = show<number>(9176)

console.log(output1)
console.log(output2)