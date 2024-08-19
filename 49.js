let p = fetch("https://google.com")
p.then((value1) =>{
    console.log(value1.status)
    connsole.log(value1.ok)
        return value1.json()}).then((value2)=>{
            console.log(value2)
        })
    