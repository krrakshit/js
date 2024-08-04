const changebgred = ( ) =>{
    document.body.firstElementChild.style.background = "red"
}
let b = document.body
console.log("first child of b is" , b.firstChild)
console.log("first child of b is" , b.firstElementChild)



let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.thead.firstElementChild)
console.log(t.tfoot)
console.log(t.tbodies)
console.log(t.rows[0])
