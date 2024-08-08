let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        alert("Hey it is resolved")
        resolve(1)
    },2000)
})

p1.then(()=>{

    console.log("hurray")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        }, 6000)
    })
}).then((value)=>{
    console.log(value)
})

p1.then(()=>{
    alert("hurray")
})