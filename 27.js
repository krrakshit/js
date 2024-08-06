// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(x)
// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)



// first.innerHTML
// 'Hey i am a span '
// first.outerHTML
// '<span id="first">Hey i am a span </span>'
// first.outerHTML = <div>hey</div>
// VM153:1 Uncaught SyntaxError: Unexpected token '<'Understand this error
// first.outerHTML = "<div>hey</div>"
// '<div>hey</div>'
// document.body.firstChild
// " Hello world! "
// document.body.firstChild.nodeValue
// '\n    Hello world!\n   
//  console.log(document.body.textContent)
//   first.hidden=false




let first = document.getElementById("first")
let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
//first.setAttribute("hidden","true")
//first.removeAttribute("class")
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
