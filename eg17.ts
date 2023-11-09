function eg18() {
    let a = [100, 200, 300];
    let b = a;
    console.log(a);
    console.log(b);
    b[3] = 999;
    console.log(a);
    console.log(b);
    let student1: [number, string];
    let student2: [number, string];
    student1 = [101, "saam"];
    student2 = student1
    student2[0] = 102;
    console.log('student1: ', student1);
    console.log('student2: ', student2);
}
eg18();