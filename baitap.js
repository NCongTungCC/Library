//bai1
const bai1 = [1,2,3,4,5];
const bai1_1 = bai1.map((item) => {
    return item * item;
});
console.log(bai1_1);
//bai2 
const bai2 = [1,-4,12,0,-3,29,-150];
const bai2_1 = bai2.filter((item) => {
    return item > 0;
});
const sum = bai2_1.reduce((sum,item) => sum + item, 0);
console.log(sum);
//bai3
const bai3 = [12, 46, 32, 64];

const mean = bai3.reduce((mean, item) => mean + item, 0) / bai3.length;
console.log("Mean:", mean);
const bai3_1 = bai3.sort((a, b) => a - b);
const vitrigiua = Math.floor(bai3_1.length / 2);
const median = bai3_1.length % 2 !== 0 ? bai3_1[vitrigiua] : (bai3_1[vitrigiua - 1] + bai3_1[vitrigiua]) / 2;
console.log("Median:", median);
//bai4
const bai4 = "George Raymond Richard Martin";
const bai4_1 = bai4.split(" "); //hàm split tách chuỗi thành mảng
const bai4_2 = bai4_1.map((item) => {
    return item.charAt(0);
});
console.log(bai4_2.join("")); // hàm join nối lại thành chuỗi
//bai5
const bai5 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
const tuoi = bai5.map((item) => {
    return item.age;
});
const max = Math.max(...tuoi); 
const min = Math.min(...tuoi);
const chenhlech = max - min;
console.log([max , min, chenhlech]);
//bai6
const bai6 = "Every developer likes to mix kubernetes and javascript";
const bai6_1 = bai6.split(" ");
const bai6_2 = bai6_1.map((item) => {
    if(item.length <= 3) {
        return item;
    }
    return item.charAt(0) + (item.length - 2) + item.slice(item.length - 1);
});
console.log(bai6_2.join(" "));
// const n = prompt("Nhập số nguyên dương n: ");
// const giaithua = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * giaithua(n - 1);
//     }
// }
// let gt = 1;
// for(let i = 1; i <= n; i++) {
//     gt = gt * i;
// }
// console.log(gt);
// console.log(`Giai thừa của ${n} là: ${giaithua(n)}`);
//bai8
const bai8 = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];
const bai8_1 = bai8.flat();
const count = {};
bai8_1.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
})
console.log(count);
//bai9
const bai9 = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ]; 

const bai9_1 = bai9.map((item) => {
    const tongdiem = item.scores.reduce((sum, score) => sum + score, 0) / item.scores.length;
    return { name: item.name, average: tongdiem };
});
const bai9_2 = bai9_1.filter((item) => {
    return item.average > 90;
});
console.log(bai9_2);
//bai10
const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

const groupedcategory = products.reduce((group, item) => {
    const key = item.category;
    if (!group[key]) {
        group[key] = [];
    }
    group[key].push(item.price);
    return group;
  }, {});
const output = Object.entries(groupedcategory)
    .map(([category, prices]) => {
      const average = prices.reduce((a, b) => a + b, 0) / prices.length;
      return { category, average };
    })
    .filter(item => item.average > 50);
  
  console.log(output);
//bai11
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];
const groupedEmployees = employees.reduce((group, employee) => {
    const key = employee.department;
    if (!group[key]) {
        group[key] = [];
    }
    group[key].push(employee.salary);
    return group;
  }, {});
const output1 = Object.entries(groupedEmployees)
    .map(([department, salaries]) => {
      const average = salaries.reduce((a, b) => a + b, 0) / salaries.length;
      return { department, average };
    })
    .filter(item => item.average > 65000);
    console.log(output1);

