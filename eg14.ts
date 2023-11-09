function eg14() {
    type Cake = {
        name: string;
        price: number;
    }
    type IceCream = {
        price: number;
        flavour: string;
    }
    type IceCreamCake = Cake & IceCream;
    let i: IceCreamCake
    i = {
        name: "cool cake",
        price: 200,
        flavour: "chocklate"
    }
}
eg14();