function eg28_some(np) {
    console.log('np: ', np);
    np.headline = "cool place"; // incorrect
    console.log('np: ', np);
}
function eg5() {
    var k;
    k = {
        headline: "God is Great"
    };
    eg28_some(k);
}
