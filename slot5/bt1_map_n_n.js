const students = [
    {
        id: 1,
        FullName: "Nguyen Van A",
        Dob: "2000-05-21"
    },
    {
        id: 2,
        FullName: "Le Thi B",
        Dob: "1999-11-30"
    },
    {
        id: 3,
        FullName: "Tran Van C",
        Dob: "2001-02-15"
    }
];
const classes = [
    {
        id: 1,
        Code: "CS101",
        Name: "Introduction to Computer Science"
    },
    {
        id: 2,
        Code: "MATH201",
        Name: "Calculus II"
    },
    {
        id: 3,
        Code: "PHY301",
        Name: "General Physics"
    }
];
const student_class = [
    {
        StudentId: 1,
        ClassId: 1
    },
    {
        StudentId: 1,
        ClassId: 2
    },
    {
        StudentId: 2,
        ClassId: 1
    },
    {
        StudentId: 3,
        ClassId: 3
    },
    {
        StudentId: 2,
        ClassId: 3
    }
];

let rs = students.map(s => {
    const  listClass = student_class.filter(sc => s.id == sc.StudentId).map(a => a.ClassId)
    const listStudent = classes.filter(c => listClass.includes(c.id));
    console.log(listStudent)
})

