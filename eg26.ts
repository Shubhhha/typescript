function eg26() {
    interface NewsPaper {
        headline: string;
    };
    let k: NewsPaper;
    k = {
        headline: "God is Great"
    }
    console.log('k: ', k);
    k.headline = "Ujjain is the city of God";
    console.log('k: ', k);
}
eg26();