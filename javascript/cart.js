import header from "/componant/header.js";

document.getElementById("nav").innerHTML=header()

const remove=(id)=>{
    fetch(`http://localhost:3000/cart/${id}`,{
        method:"DELETE"
    })
}
let sum=0
const de=(pera)=>{
    sum+=pera
    document.getElementById("allt").innerHTML=Math.round(sum)
}
const cartable=(data)=>{
    data.map((item)=>{
        let tr=document.createElement("tr")
        let icon=document.createElement("td")
        icon.innerHTML=`remove`
        icon.addEventListener("click",()=>{
            remove(item.id)
            console.log(item.id);
        })
        let td2=document.createElement("td")
        let img=document.createElement("img")
        img.src=item.image
        img.setAttribute("id","cart-img")
        td2.append(img)
        let name=document.createElement("td")
        name.innerHTML=item.title
        name.setAttribute("id","name")
        let qyt=document.createElement("td")
        qyt.innerHTML=item.qyt
        let price=document.createElement("td")
        price.innerHTML=item.price
        let totle=document.createElement("td")
        totle.innerHTML=`${item.qyt*item.price}`
        tr.append(icon,td2,name,qyt,price,totle)
        document.getElementById("carttable").append(tr)
        de(item.qyt*item.price)
        console.log(item.qyt*item.price);
    })
}




const get=()=>{
    fetch(`http://localhost:3000/cart`)
    .then((res)=>res.json())
    .then((data)=>cartable(data))
}
get()