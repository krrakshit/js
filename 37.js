// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolve after 2 seconds")
//         resolve(56)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         resolve("Promise 2")
//        },2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
//     return 2
// }).then((value)=>{
//     console.log("now it is done")
// })





const loadScript = (src)=>{
    return new Promise((resolve,reject) => {
        
    
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve(1)
      
    }
    script.onerror = ()=>{
        reject(0)
    }
})
}
let p1 = loadScript("https://google.com")


p1.then((value)=>{
    console.log(value)
    return loadScript("google.com")
}).then((value)=>{
    console.log("second script ready")
}).catch((error)=>{
    console.log("we are having problems loading the script")
})