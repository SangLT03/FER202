const suppliers = [
    {
        "id": 1,
        "name": "FPT Shop"
    },
    {
        "id": 2,
        "name": "Viettel Store"
    },
    {
        "id": 3,
        "name": "Pico"
    },
    {
        "id": 4,
        "name": "Media Mart"
    }
];
const products = [
    {
        "id": 1,
        "name": "iPhone 15 Pro Max 256GB",
        "price": 29690000,
        "supplier": 1,
        "status": true
    },
    {
        "id": 2,
        "name": "MacBook Air 13 inch M1 2020",
        "price": 18590000,
        "supplier": 1,
        "status": false
    },
    {
        "id": 3,
        "name": "Samsung Galaxy Tab S6 Lite",
        "price": 6990000,
        "supplier": 2,
        "status": false
    },
    {
        "id": 4,
        "name": "Tủ Lạnh Panasonic NR-YW590YMMV",
        "price": 57990000,
        "supplier": 3,
        "status": true
    },
    {
        "id": 5,
        "name": "Máy giặt lồng ngang Panasonic NA",
        "price": 13290000,
        "supplier": 3,
        "status": true
    }
]




/*
let rs = products.map(p => {
    let supInfo = suppliers.find(s => s.id == p.supplier)
    if (supInfo) {
        return { id: p.id, name: p.name, suppliersname: supInfo.name }
    }
})

rs.forEach(r => {
    console.log(`ID: ${r.id}, Name: ${r.name}, Supplier: ${r.suppliersname}`)
})

*/
//bai tap

const lst_students = [
    { id: 1, name: 'Alice', classid: 101 },
    { id: 2, name: 'Bob', classid: 102 },
    { id: 3, name: 'Charlie', classid: 101 }
];
const lst_classes = [
    { classid: 101, classname: 'Math' },
    { classid: 102, classname: 'Science' }
];

let rs = lst_students.map(s => {
    let subName = lst_classes.find(c => c.classid == s.classid)
    if(className) {
        return {id: s.id,
                name: s.name,
                className: subName.classname           
        }
    }
})

rs.forEach(r => {
    console.log(`ID: ${r.id}, Name: ${r.name}, Class: ${r.className}`)
})