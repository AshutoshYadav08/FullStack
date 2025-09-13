// let promise = new Promise((resolve,reject)=>setTimeout(()=>reject("Promise i rejected"),300))
// let promise = new Promise((resolve,reject)=>setTimeout(()=>resolve("Promise is resolved"),300))

// .then((res)=>(console.log(res),"a+b"))
// .then((res)=>console.log(res))
// .catch((err)=>console.log("error",err))


async function getUserData(){

    let res = await fetch("https://jsonplaceholder.typicode.com/users/5")
    let data = res.json()
    return data;



}


let data = await getUserData()

console.log("Name :",data.name)
console.log("Email :",data.email)
console.log("City",data.address.city)