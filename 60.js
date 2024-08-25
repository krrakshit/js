const a = (text)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(text)
        })
    })
}
(
async ()=>{
    let text = await a("hello")
    console.log(text)
   text =  await a("hello2")
   console.log(text)
}
)() 