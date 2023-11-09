function eg30_some(np) {
    console.log('np: ', np);
    np.headline = "cool place"; // incorrect
    console.log('np: ', np);
}
function eg5() {
    var k = {
        headline: "God is Great"
    };
    eg30_some(k);
}
eg5();
