import header from "./componant/header.js";
document.getElementById("haders").innerHTML=header()

let stro=JSON.parse(localStorage.getItem("login"))
console.log(stro);
const home =()=>{
    let last=document.createElement("h4")
    last.innerHTML=stro.last
    last.setAttribute("class", "last")
    let first=document.createElement("h2")
        first.innerHTML=stro.first
        first.setAttribute("class", "first")
        let email=document.createElement("p")
        email.innerHTML=stro.email
        email.setAttribute("class", "email")
    
        let div=document.createElement("div")
        div.setAttribute("class","aside-div")
        div.append(first,last,email)
    document.getElementById("div").append(div)

}
home()
