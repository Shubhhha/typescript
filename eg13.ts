function eg13() {
    type Student = {
        name: string;
        city: string;
        dataType: "Student";
    }
    let s: Student;
    s = {
        name: "ramesh",
        city: "ujjain",
        dataType: 'Student'
    }
    console.log('s: ', s);
    console.log(typeof s);
    if (s.dataType == "Student") console.log("s is of type Student");
    else console.log("s is not of type student");

}
eg13();