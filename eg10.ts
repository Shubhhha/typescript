function eg10() {
    type Student = {
        firstName: string;
        lastName?: string;     // here we put lastname optional using ? 
    }
    let a: Student = {
        firstName: "rahul",
    }
}
eg10();