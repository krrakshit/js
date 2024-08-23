alert(document.cookie)
document.cookie = "fuyvberivb"
document.cookie = "cjibefibckjc"
document.cookie = "efnfeff"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)