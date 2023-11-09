interface AdderCallSignature {
    (e: number, f: number): number
}
function just_do_it(x: number, y: number, z: number): number {
    return x + y + z;
}
function eg34() {
    let adder: AdderCallSignature;
    adder = just_do_it; // incorrect
    let result: number;
    result = adder(10, 20, 30);  // incorrect
    console.log('result: ', result);

}
eg34();