var sum1=()=>{
    console.log("Hello World");
}
sum1();


//spread operator
var arr1=[1,2,3];
var arr2=[...arr1,4,5,6];
console.log(arr1);
console.log(arr2);


//Destructuring operator
var marks =[80,90,60,96,97];

var [m1,m2,m3,m4,m5]=marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);


//Callback function
function demo(){
    console.log("Hello from demo");
}

var callBack=(func)=>{
    console.log("Hello from callBack");
    func();
    demo();
}
callBack(demo);


//map function
var arr = [10,20,30,40,55];
var double = arr.map(num => num *2)
console.log(double);


//filter function
var odd = arr.filter(num => num%2!==0)
console.log(odd);


//reduce function
var total = arr.reduce((val,num) => val + num, 0)
console.log(total);


//
var arr3 = [1,2,3,4,5];
var result= arr3.map(num => num*2).filter(num => num>5)
console.log(result);




