function eg24() {
    type Student = {
        rollNumber: number;
        name: string
    }
    interface Employee {
        id: string,
        name: string
    }
    let a: Student;
    let b: Employee;
    a = {
        rollNumber: 101,
        name: "Ramesh"
    }
    b = {
        id: "A1001",
        name: "raam"
    }
    console.log(a)
    console.log(b)
}
eg24();