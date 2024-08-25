let key = prompt("Enter the key")
let value = prompt("Enter the value")

localStorage.setItem(key,value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key === "Invalid" || key === "Unchecked"){
    localStorage.removeItem(key)
}
if(key == 0){
    localStorage.clear()
}
