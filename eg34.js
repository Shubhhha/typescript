function just_do_it(x, y, z) {
    return x + y + z;
}
function eg34() {
    var adder;
    adder = just_do_it;
    var result;
    result = adder(10, 20, 30);
    console.log('result: ', result);
}
eg34();
