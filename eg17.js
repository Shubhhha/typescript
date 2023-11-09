function eg18() {
    var a = [100, 200, 300];
    var b = a;
    console.log(a);
    console.log(b);
    b[3] = 999;
    console.log(a);
    console.log(b);
    var student1;
    var student2;
    student1 = [101, "saam"];
    student2 = student1;
    student2[0] = 102;
    console.log('student1: ', student1);
    console.log('student2: ', student2);
}
eg18();
