interface NewsPaper {
    readonly headline: string;
}
function eg29_some(np: NewsPaper) {
    console.log('np: ', np);
    np.headline = "cool place" // incorrect
    console.log('np: ', np);
}
function eg5() {
    let k: NewsPaper;
    k = {
        headline: "God is Great"
    };
    eg29_some(k);
}