interface NewsPaper {
    readonly headline: string;
}
function eg31_some(np) {
    console.log('np: ', np);
    np.headline = "cool place"
    console.log('np: ', np);
}
function eg31() {
    let m = {
        headline: "Ujjain is the city of GODS",
    }
    eg31_some(m);
    let k: NewsPaper;
    k = {
        headline: "God is Great"
    };
    eg31_some(k);
}
eg31();