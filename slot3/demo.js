const students = [
    { id: 1, name: "Nguyen Van A", age: 20, gender: "male", grades: [7.5, 8, 9] },
    { id: 2, name: "Tran Thi B", age: 22, gender: "female", grades: [8, 8.5, 9] },
    { id: 3, name: "Le Van C", age: 19, gender: "male", grades: [6, 7.5, 8] },
    { id: 4, name: "Pham Thi D", age: 21, gender: "female", grades: [9, 9, 9.5] },
    { id: 5, name: "Bui Van E", age: 23, gender: "male", grades: [7, 7, 7.5] }
];

//1
let graderAve = (lst_grade) => {
    const sumGrade = lst_grade.reduce((sum, g) => sum + g, 0);
    return sumGrade / (lst_grade.length);
}

let printStudent = (lst_Student) => {
    lst_Student.forEach(s => {
        console.log(`ID: - ${s.id} - Name: ${s.name} - Age: ${s.age} - Gender: ${s.gender} - Grades: ${graderAve(s.grades)}`)        
    });

}


//2 

function filterByGender(lst_Student, gender) {
    return lst_Student.filter(s => s.gender == gender)
}
printStudent(filterByGender(students, "male"))


//3
function sortByGrade(lst_Student) {
    return lst_Student.sort((a, b) => graderAve(b.grades) - graderAve(a.grades)); 

}

function countByGender(lst_Student) {
    const rs = {male: 0, female: 0}
    lst_Student.forEach(s => {
        if(s.gender == "male")
            rs.male++;
        else if(s.gender == "female")
            rs.female++;
    });
    return rs;
}

//console.log(countByGender(students));





//printStudent(sortByGrade(students)[0]);

//printStudent(filterByGender(students, "male"));


