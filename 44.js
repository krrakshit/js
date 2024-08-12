const loadScript  = async (src)=>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src =src
        script.onload=()=>{
            resolve(src)
        }
        document.head.append(script)
    })
}
let a = loadScript("https://google.com")
a.then((value)=>{
    console.log(value)
})

const main1 = async ()=>{ 
    console.log(new Date().getMilliseconds())
    let a = loadScript("https//google.com")
    console.log(new Date().getMilliseconds())
    console.log(a)
}
main1()

let p = ()=>{
   return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(new Error("error found"))
        },3000)
    })
}

let a1 = async()=>{
    try {
        let c = await p()
        console.log(c)  
    } catch (error) {
        console.log(error)
    }
    
}

a1()


let p1 = async()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(10)
       },2000)
        
    })
}

let p2 = async()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(20)
       },1000)
        
    })
}

let p3 = async()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(30)
       },3000)
        
    })
}

const run = async ()=>{
    console.time("run")
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log(a1,a2,a3)
    console.timeEnd("run")
}

run()