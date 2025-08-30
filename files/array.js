//   Array length

var fruits = ["apple", "banana", "orange"]; //Array use
console.log(fruits);
console.log(fruits[1]);

for (var i = 0; i < fruits.length; i++) {               //loop use
console.log(fruits[i]);
}


fruits.forEach((fruits, index) => {                      //forEach use
  console.log(`${index}=>${fruits}`);
});


fruits.forEach((fruit, index) => {                           //forEach use karun Uppercase 
  console.log(`${index}=>${fruit.toUpperCase()}`);
});

fruits.map((fruit) => fruit.toUpperCase());               //map use karun uppercase
console.log(fruits);




//  array assinment - 1

let studends = ["kunta", "shreya", "minal", "anjali", "roshani"];
console.log(studends);

console.log(studends[0]);


//  loop use

let students = ["kunta", "shreya", "minal", "anjali", "roshani"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// 2.map()- 

var number = [1, 2, 3, 4];                             // use addition

var addNumber = number.map((num) => num + 2);

console.log(addNumber);



var number = [1, 2, 3, 4];                           // map() use multiplication

var addNumber = number.map((num) => num * 2);
console.log(addNumber);

var num = [1, 2, 3, 4];

var spl = num.map((num) => num + 2);

console.log(addNumber);

let student = [
  { name: "abc", age: 30 },
  { name: "xyz", age: 30 },
];

let ages = student.map((user) => user.age);
console.log(ages);



//assinment - 2



let price = [100, 200, 300]; //map use
let totalPrice = price.map((x) => `Rs${x.toFixed(2)}`);
console.log(totalPrice);



let prices = [100, 200, 300]; //for each use
price.forEach((x) => {
  console.log(`Rs${x.toFixed(2)}`);
});



var amount = [100, 200, 300]; //for each use
var totalAmount = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});



amount.forEach((p) => {
  console.log(totalAmount.format(p));
});



// 3.sort()


let name = ["orange", "banana", "apple", "dry"];
name.sort();
console.log(name)


var name1 = ["Orange", "banana", "apple", "dry"];
name1.sort();
console.log(name1)






       // assinment sort()
let names = ["Orange", "banana", "apple", "dry"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);



names.map((name) => name.toUpperCase());           //map use yekdam easy way //
console.log(names);




// 4.filter()

let marks =[45,60,50,32];
let passed =marks.filter(mark=>mark >= 50);
console.log(passed);



// 5.find()

let products = [
 {id:1, name:"Mobile"},
 {id:2, name:"Laptop"}
];
// let data = products.find(product => product.id ==3);
let data = products.find(product => product.id ==2);
console.log(data);



// 6.findIndex()

let nums = [30,15,19,48];
let index=nums.findIndex(n => n == 19);
console.log(index);



// 7.includes()

let hasNum = nums.includes(15);
// let hasNum = nums.includes(66);
console.log(hasNum);




        //assinment includes

 let string = "predrag@gmail.com";
 let value = string.includes("@gmail.com");
        
 if (value) {
console.log("user can be access");
 } else {
 console.log("user can not be access");
}
    



// Remove duplicate from array//

let arr = [1,1,3,4,5,3,5]
let unique =[];                           // without ES6
for(let i of arr){
        if(!unique.includes(i)){
                unique.push(i);
        }
}
console.log("without ES6:",unique);

let getunique = [...new Set(arr)];         //ES6
console.log("with ES6:",getunique);




        // assinment

let Studends =[
  {name :'A', score : 60},
  {name :'B', score : 70},
  {name :'C', score : 35},
  {name :'D', score : 52},
];




let StudentName = Studends.filter(student => student.score >= 50) 
  .map(student => student.name);

console.log(StudentName);

