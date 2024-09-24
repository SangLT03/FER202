//1
var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

//Find the first person off the people array is teenager (age >=10 and age <=20)
console.log(people.find(p => p.age >= 10 && p.age <= 20));

//Find the all person of the people array is teenager (age >=10 and age <=20)

people.forEach(p => {
    if (p.age >= 10 && p.age <= 20) {
        console.log(p);
    }
})

//Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
let check1 = true;
people.forEach(p => {
    if (p.age < 10 || p.age > 20) {
        check1 = false;
    }
});
console.log(check1);
//Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
let check2 = false;
people.forEach(p => {
    if (p.age >= 10 && p.age <= 20) {
        check2 = true;
    }
});
console.log(check2);

//2
var array = [1, 2, 3, 4]

let sum = array.reduce((sum, a) => sum + a, 0);
console.log(sum);

//3
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


const person = {
    name: "Costas",
    address: {
        street: "Lalaland 12"
    }
};
//Print the name of each company using forEach
companies.forEach(c => {
    console.log(c.name);
})
console.log("");
//Print the name of each company that started after 1987
companies.forEach(c => {
    if (c.start > 1987) {
        console.log(c.name);
    }
})

//Get only the companies that have category Retail, increment their start by 1 and append in
//the DOM a div that has the name, the category, the start and the end in paragraphs elements
let listCompanies = companies.filter(c => c.category === "Retail").map(
    a => {
        a.start += 1;
        return a;
    }
);
console.log(listCompanies)
console.log("");
console.log("Sort the companies");
//Sort the companies based on their end date in ascending order
console.log(companies.sort((a, b) => a.end - b.end));
//Sort the ages array in descending order
console.log("");
console.log("Sort the ages");
console.log(ages.sort((a, b) => b - a))
//Print the sum if you add all the ages using reduce
let sumAge = ages.reduce((a, b) => a + b, 0);
console.log(`Sum age: ${sumAge}`);

//Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS

//vì companies đã bị sắp xếp nên companies[0].name là "Company Nine"
const { name, category } = companies[0];

const newObject = {
    name,
    category,
    print() {
        console.log(`Name: ${this.name}`);
    }
};
newObject.print();

//Create a function that takes an unknown number of arguments that are numbers and return 
//their sum;
function sumAge2(...args) {
    return args.reduce((sum, a) => sum + a, 0);
}

console.log(`Sum Age: ${sumAge2(...ages)}`)

//Make a function that takes an unknown number of arguments of any type and adds them in 
//an array and returns the array, if the argument is an array, it should add its values to the 
//array that will be returned by the function
function addToArray(...args) {
    let resultArray = [];

    args.forEach(arg => {
        if (Array.isArray(arg)) {
            resultArray.push(...arg);
        } else {
            resultArray.push(arg);
        }

    });

    return resultArray;
}
console.log(addToArray(1, [2, 3], 'hello', [4, 5], 6));

//Destructuring the property street in a variable named street from the object person
const { address: { street } } = person;
console.log(street)
//Write a function that every time you call it, it returns a number that increments starting from 0
let count = 0;
function countNum() {
    return count++;
}

console.log(countNum())
console.log(countNum())
console.log(countNum())
console.log(countNum())
//Create a function that destructors the query parameters of a URL and adds them 
//in an object as key value pairs and then returns the object
function getQueryParams(url) {
    const paramsObj = {};

    const urlObj = new URL(url);

    urlObj.searchParams.forEach((value, key) => {
        paramsObj[key] = value;
    });

    return paramsObj;
}

const url = 'https://aaa.com/page?name=John&age=30&city=NewYork';
const queryParams = getQueryParams(url);

console.log(queryParams);


//4 

// Base class Shape
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getArea() {
      throw new Error('getArea() must be implemented by subclass');
    }
  
    toString() {
      return `Color: ${this.color}`;
    }
  }
  
  // Subclass Rectangle extends Shape
  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  
    toString() {
      return `Rectangle - ${super.toString()}, Length: ${this.length}, Width: ${this.width}, Area: ${this.getArea()}`;
    }
  }
  
  // Subclass Triangle extends Shape
  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
  
    toString() {
      return `Triangle - ${super.toString()}, Base: ${this.base}, Height: ${this.height}, Area: ${this.getArea()}`;
    }
  }
  
  // Testing the classes
  const rectangle = new Rectangle('Red', 10, 5);
  console.log(rectangle.toString());
  
  const triangle = new Triangle('Blue', 8, 6);
  console.log(triangle.toString());
  