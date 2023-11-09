function eg11() {
    type Address = {
        line1: string;
        line2: string;
    };
    type Student = {
        name: string;
        address?: Address;
    };
    let s1: Student;
    s1 = {
        name: "Gopal",
        address: {
            line1: "whatever",
            line2: "something"
        }
    }
    console.log('s1: ', s1);
}
eg11();