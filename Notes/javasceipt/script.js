// var a = 12;



if(true){
    let a = 12;
}

// console.log(a);


// console.log(false == undefined)


// console.log(true == 1)
// console.log(x)
let x = 12

// console.log(add(5,6))

function add(a,b) {
    return a+b;
}

// const add = (a,b) => a+b

const greet = (name) => "Hello, " + name;

const square =(num) => num * num;

// console.log(greet("akash"))
// console.log(square(5))

const arr = [2,4,5,6,7,8,9,12,23,34,45,56];
// let red = arr.reduce((x,y)=>{ console.log(x);return x+y },1);

// let red = arr.filter((x)=> { return 23 } )

let red = arr.splice(-5,2,5,6,7,99)




// arr.pop();
// arr.shift();
// arr.unshift(10);
// console.log(arr)
console.log(red)
console.log(arr)
