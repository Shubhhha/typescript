function eg4() {
    let a: string | number;
    a = "Good";
    console.log('a: ', a);
    if (typeof a == "string") console.log("data type of a is string");
    else console.log("data type of a is not string");
    a = 20;
    console.log('a: ', a);
    if (typeof a == 'number') console.log("data type of a is number");
    else console.log("data type of a is not number");
    let b = null;
    if (typeof b == 'null') console.log("datatype of b is null") // js me null koi type nhi hota tsc me hota hai null type , js me as an object rehta hai vo 
    else console.log("datatype of b is not null");
}
eg4()