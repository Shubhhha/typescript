    // interface Bulb {
    //     wattage:number;
    //     printWattage():void
    // }

    // // following is a call signature interface
    // interface BulbFactory {
    //     productionCount : number;
    //     (wattage:number):Bulb;
    // }
    // function  philipsBulbFactory(w:number):Bulb
    // {
    //     if(w<0 || w>240) return  null;
    //     let b:Bulb;
    //     b={
    //         wattage:w,
    //         printWattage():void{
    //             console.log(`Wattage is ${this.wattage}`);
    //         }
    //     }
    //     philipsBulbFactory.productionCount++ 
    //     return b;
    // }