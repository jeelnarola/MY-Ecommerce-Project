import header from "../componant/header.js";
document.getElementById("nav").innerHTML=header()

document.getElementById("singin").addEventListener("submit",(e)=>{
    e.preventDefault();
    // alert("a")

    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value

    fetch(`http://localhost:3000/singup?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.length>0){
           if(data[0].password==password){
            localStorage.setItem("login",true)
           } 
           else{
            alert("password worng !")
            setTimeout(() => {
                window.location.href="/peags/singup.html"
            }, 1000);
           }          
        }
        else{
            alert("user not found !")
            setTimeout(()=>{
                window.location.href="/peags/singup.html"
            },1000)
        }
    })

})