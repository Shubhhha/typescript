function eg2() {
    let x = 10; // data type of x will be implisitily set to number 
    console.log(typeof x);
    let y = null // data type of y will be expilicity set to null
    console.log(typeof y)
    let z: null;
    z = null
    console.log(typeof z);
    let a = 10n // datatype of a will be  implicitily set to bigint 
    let b = true // datatype of b will be implicitily set to boolean 
    let c: any  // explicitily data type of  d set to string 
    // tsc will allow you to assign anything to c 
    let d: string; // expilicitly data type of d set to be string 
    d = "great"
    let e: boolean; // expilicitilty  data type of e set to boolean
}
eg2();
