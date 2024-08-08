async function rak(){
let delhiweather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("27 degree")
    },1000)
})

let bangweather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("17 degree")
    },6000)
})

// delhiweather.then(alert)
// bangweather.then(alert)
console.log("fetching delhi weather please wait")
let delhiw = await delhiweather
console.log("fetched delhi weather"+delhiw)
console.log("fetching bangalore weather please wait")
let bw = await bangweather
console.log("fetched bangalore weather"+bw)
return(delhiw,bw)

}
const kum = async ()=>{
    console.log("hey the function is not waiting")
}

const main1 = async()=>{
    console.log("HEllo, welcome to weather control room")
    let b = kum()
    let a = rak()
    
}
main1()

