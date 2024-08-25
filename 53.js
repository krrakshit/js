sessionStorage.setItem("name","Rakshit")
sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")

document.onstorage =()=>{
    alert("changed")
}

let url = "https://google.com"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((v)=>{
    console.log(v)
})
