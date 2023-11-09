function eg23() {
    let a = [10, "good"] as const;
    let b = a;
    console.log('a: ', a);
    console.log('b: ', b);
    //b[0] = 20  incorrect
    let c = 20
    // c = a; incorrect s
    let d: [number, string];
    // d = a; incorrect
    // const e:[number,string]=a; incorrect 
    // console.log('e: ', e);
    // means ek bar const declare kr diya to vo read only property ho jaega change nhi hoga vo 
}
eg23();