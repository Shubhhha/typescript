function eg8() {
    type Bulb = {    // ye typescript ka syntax hai . ham ek type bna hai Bulb or ye specify kr rhe hai 
        //  ki uske against ye elements hone chahiye or string number unka type hona chahiye
        wattage: number;
        brand: string;
    }
    let b: Bulb;
    b = {
        wattage: 60,
        brand: "philips"
    }
    console.log('b: ', b);

    let c: Bulb;
    c = {
        wattage: 13,
    }
    console.log('    c: ', c);  // incorrect 

    let d: Bulb;
    d = {
        wattage: 44,
        brand: "philips",
        price: 333                  // incorrect
    }
    console.log('d: ', d);

}

eg8();