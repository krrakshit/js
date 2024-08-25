// let a =  ()=>{
//   return  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(456)
//     },4000)
// })
// }
// (async ()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// })()

let arr = [3,5]
let [a,b] = arr

console.log(a,b)

let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))