interface AdderCallSignature {
    (e: number, f: number): number
}
function just_do_it(x: number, y: number): number {
    return x + y;
}
function eg33() {
    let adder: AdderCallSignature;
    adder = just_do_it;
    // let result: number;
    // result = adder(10, 20);
    // console.log('result: ', result);
    console.log(adder(10, 20))
    console.log(just_do_it(10, 20))
}
eg33();