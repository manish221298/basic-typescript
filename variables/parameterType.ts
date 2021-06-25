// default parameter 

function show(greet: string, name: string = "manish"){
    return `${greet}  ${name}`
}

console.log(show("hi"))


// Optional parameter
function display(greet: string, name?: string){
    console.log("optional parameter", greet)
}
display( "manish kumar")

// rest parameter  (if i don't know how many parameter we need to pass then we use)

function dikhao(name: string, ...msg: string[]){
    console.log(name + '' + msg.join(","))
}
dikhao("manish", "kumar", "chaurasia", "chaurasia")