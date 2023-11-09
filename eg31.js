function eg31_some(np) {
    console.log('np: ', np);
    np.headline = "cool place"; // incorrect
    console.log('np: ', np);
}
function eg31() {
    var m = {
        headline: "Ujjain is the city of GODS",
    };
    eg31_some(m);
    var k;
    k = {
        headline: "God is Great"
    };
    eg31_some(k);
}
eg31();
