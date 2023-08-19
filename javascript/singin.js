import header from "../componant/header.js";
document.getElementById("nav").innerHTML=header()

document.getElementById("singin").addEventListener("submit",(e)=>{
    e.preventDefault();

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

    // PASSWORD WRONG TO FROGET PASSWORD

document.getElementById("password-cheng").addEventListener("click",(e)=>{
    e.preventDefault();
    // one popup box open in email cheak 
    // input value enter
    // email right to two popup box open 
    // password enter to patech 
    // alert("froget password")
    document.querySelector(".conform-box").style.display="block"
})

    // EMAIL MATCH TO POPUP BOX

document.querySelector("#email-from").addEventListener("submit",(e)=>{
    e.preventDefault()
    let i=document.getElementById("email-2").value
    document.querySelector(".conform-box").style.display="none"
   fetch(`http://localhost:3000/singup?email=${i}`)
   .then((res)=>res.json())
   .then((data)=>{
    if(data.length>0){
        alert("yes")
        document.querySelector(".confrom-pass").style.display="block"
    }
    else{
        document.querySelector(".confrom-pass").style.display="none"
        alert("no")
    }
   })
    console.log(i);
})

    // CONFROM PASSWORD

document.getElementById("confrom-btn").addEventListener("click",()=>{
    let passd=document.getElementById("pass-con").value

    console.log(passd);
    // fetch(`http://localhost:3000/singup?email=${emailss}`,{
    //     method:"PATCH",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(passd)
    // })

})

document.querySelector(".fa-xmark").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector(".conform-box").style.display="none"
})
