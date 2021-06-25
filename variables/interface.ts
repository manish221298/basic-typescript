interface employee {
    key: number;
    name: string;
}

let Employee : employee = {
    key: 1,
    name: "manish"
}

console.log("interface employee", Employee)

// inetrface as function type

interface keyValuePair {
    (key: number,
    value: string): void
    
}

function addKeyValue(key: number, value: string):void{
    console.log( key + "" + value)
}

let kvp : keyValuePair = addKeyValue;
kvp(5, "manish")