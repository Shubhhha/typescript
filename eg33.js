function just_do_it(x, y) {
    return x + y;
}
function eg1() {
    var adder;
    adder = just_do_it;
    // let result: number;
    // result = adder(10, 20);
    // console.log('result: ', result);
    console.log(adder(10, 20));
    console.log(just_do_it(10, 20));
}
eg1();
