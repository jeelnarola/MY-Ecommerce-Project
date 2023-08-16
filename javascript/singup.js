const show=()=>{
    let a=document.getElementById("pass")
    if(a.type==="password"){
        a.type="text"
    }
    else{
        a.type="password"
    }
}
document.getElementById("checkbox").addEventListener("click",show)

document.getElementById("sing-up-form").addEventListener("submit",(e)=>{
e.preventDefault()
    let singupdata ={
        first:document.getElementById("first").value,
        last:document.getElementById("last").value,
        email:document.getElementById("email").value,
        password:document.getElementById("pass").value,
    }    
    let nameregex= /^[A-Za-z. ]{3,30}$/;
    let emailregerx=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
    let passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!(nameregex.test(singupdata.first)) ){
        document.getElementById("first").style.border="2px solid red"
    }
    else{
        document.getElementById("first").style.border="2px solid green"

    }
    if(!(nameregex.test(singupdata.last)) ){
        document.getElementById("last").style.border="2px solid red"
    }
    else{
        document.getElementById("last").style.border="2px solid green"

    }
    if(!(emailregerx.test(singupdata.email))){
        document.getElementById("email").style.border="2px solid red"
    }
    else{
        document.getElementById("email").style.border="2px solid green"
    }
    if(!(passregex.test(singupdata.password))){
        document.getElementById("pass").innerHTML="first characters capital"
        document.getElementById("pass").style.border="2px solid red"
    }
    else{
        document.getElementById("pass").style.border="2px solid green"
    }
    if((nameregex.test(singupdata.first))&&(nameregex.test(singupdata.last))&&(emailregerx.test(singupdata.email))&&(passregex.test(singupdata.password))){
        fetch(`http://localhost:3000/singup?email=${singupdata.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.length>0){
                alert("same")
            }
            else{
                fetch(`http://localhost:3000/singup`,{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(singupdata)
                })
            }
        })
    }  
})

//NAME

document.getElementById("first").addEventListener("keypress",()=>{
    let first=document.getElementById("first").value
    let nameregex=/^[A-Za-z. ]{3,30}$/;
    if(!(nameregex.test(first))){
        document.getElementById("first").style.border="2px solid red"
    }
    else{
        document.getElementById("first").style.border="2px solid green"
    }
})

// last name
document.getElementById("last").addEventListener("keypress",()=>{
    let last=document.getElementById("last").value
    let nameregex=/^[A-Za-z. ]{3,30}$/;
    if(!(nameregex.test(last))){
        document.getElementById("last").style.border="2px solid red"
    }
    else{
        document.getElementById("last").style.border="2px solid green"
    }
})

// EMAIL 
document.getElementById("email").addEventListener("keypress",()=>{
    let email=document.getElementById("email").value
    let emailregerx=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
    if(!(emailregerx.test(email))){
        document.getElementById("email").style.border="2px solid red"
    }
    else{
        document.getElementById("email").style.border="2px solid green"
    }
})

//PASSWORD

document.getElementById("pass").addEventListener("keypress",()=>{
    let password=document.getElementById("pass").value
    let passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!(passregex.test(password))){
        document.getElementById("pass").style.border="2px solid red"
    }
    else{
        document.getElementById("pass").style.border="2px solid green"
    }
})

