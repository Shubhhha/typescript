function eg25() {
    interface Employee {
        id: string;
        name: string;
        mobileNumber?: string;
    }
    let a: Employee;
    let b: Employee;
    let c: Employee;
    a = {
        id: "A1001",
        name: "shubham",
        mobileNumber: "7857493444"
    }
    b = {
        id: "A1002",
        name: "Ramesh"
    }

    console.log('b: ', b);
    console.log('a: ', a);
    c = {
        name: "vikas"
    }
    console.log('c: ', c);

}
eg25();