function eg22_some(x: number): [string, number] {
    return ["square", x * x];
}

function eg22() {
    let a: [string, number]; // touple 
    a = eg22_some(5);
    console.log('a: ', a);
    let b = eg22_some(10);
    console.log('b: ', b);
    let c = ["god", 20]
    b = c  // wrong 
}

eg22();