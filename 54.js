let a = [
"a","B","c","d","e","f","g","h","i","j","k","l","m","n"
]

const sleep = async (seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(true)
        }, seconds *1000)
    })
}
const show = async (message) =>{
   await sleep(2)
    console.log(message)
}

(async ()=>{
    for (let i = 0; i < a.length; i++) {
       await  show(a[i]);
        
    }
}) ()