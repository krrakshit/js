let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("it is a promise and it is resolved")
        resolve (true)
        
    },5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(()=>{
       // console.log("it is a promise and it is rejected")
        
        reject(new Error("it is a error"))
    },5000)
})
p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("spme error occured in p2")
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
},)
