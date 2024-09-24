//object 
let person = {
    name: "Nguyen Van A",
    age: 30,
    hobbies: ["cooking", "listening", "drinking"],
    address: {
        city: "HaNoi",
        street: "HBT",
    },

}

console.log(person.name);
console.log(person.hobbies[0]);

//function
let greet = (name) => {
    console.log(`Hello ${name}`);
}

greet(person.name);

function greet1(name) {
    console.log(`Hello ${name}`);
}
greet1(person.name);

//map, foreach,....
const students = [
    {
        id: 1,
        FullName: "Nguyen Van A",
        Dob: "2003-12-1",
    },
    {
        id: 2,
        FullName: "Tran Van B",
        Dob: "2003-2-11",
    },
    {
        id: 3,
        FullName: "Tran Van C",
        Dob: "2003-3-12",
    }

];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].FullName);
}

//cach1
for (let i = 0; i < students.length; i++) {
    if (students[i].id == 2) {
        console.log(students[i].FullName);
    }
}
//cach 2
console.log(students.find(e => e.id == 2).FullName)
//e(lamda) la tung phan tu trong array
//ham file tra ve 1 doi tuong

//tim ten bat dau bang "..."
console.log(students.find(e => e.FullName.startsWith("Tran")).FullName)


//filter tra ve 1 danh sach thoa man 1 dieu kien
console.log(students.find(e => e.FullName.startsWith("Tran")))// 1 object
console.log(students.filter(e => e.FullName.startsWith("Tran"))) //1 danh sach array

//foreach
students.forEach(s => console.log(s.FullName))