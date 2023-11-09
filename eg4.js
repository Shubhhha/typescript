function eg4() {
    var a;
    a = "Good";
    console.log('a: ', a);
    if (typeof a == "string")
        console.log("data type of a is string");
    else
        console.log("data type of a is not string");
    a = 20;
    console.log('a: ', a);
    if (typeof a == 'number')
        console.log("data type of a is number");
    else
        console.log("data type of a is not number");
    var b = null;
    if (typeof b == 'null')
        console.log("datatype of b is null");
    else
        console.log("datatype of b is not null");
}
eg4();
