



Object.prototype.n = "new prototyp"

const obj = {

    name:"Ashu",
    uid:"11"

}


console.log(obj.n)



Object.prototype.print = function(){
    console.log("I am from Object Prototype");
}


let b = {
    "name" : "Pranjal",
    "age" : 21
}

b.print()





let a1 = [1,2,3,4,5,6,]



Array.prototype.sum = function(){
    let sum = 0;
    for(let i = 0;i<this.length;i++){
        sum = sum + this[i]
    }
    return sum;
}




console.log(a1.sum())
console.log(a1.toString())