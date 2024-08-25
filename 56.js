class rform{
    constructor(){
        console.log("constructor called")
    }
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert(this.name + "this form is cancelled")
    }
    fill(gname){
        this.name = gname
    }
}

let rak = new rform()
rak.fill("rakshit")
let roh = new rform()
roh.fill("rohan")

rak.submit()
roh.submit()
roh.cancel()