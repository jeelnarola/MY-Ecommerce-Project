import header from "../componant/header.js";

document.getElementById("nav").innerHTML=header()


const display=(data)=>{
    document.getElementById("product-box").innerHTML=""
    data.map((ele)=>{
        let img=document.createElement("img")
        img.src=ele.image
        let title=document.createElement("h3")
        title.innerHTML=ele.title
        let category=document.createElement("h5")
        category.innerHTML=ele.category
        let description=document.createElement("p")
        description.innerHTML=ele.description
        let price=document.createElement("h1")
        price.innerHTML=`Price = ${ele.price}`
        let div=document.createElement("div")
        div.append(img,title,category,description,price)
        document.getElementById("product-box").append(div)
    })
}


let arr=[]
const htl=()=>{
    let htld=arr.sort((a,b)=>b.price-a.price)
    display(htld)
}
const lth=()=>{
    let lthd=arr.sort((a,b)=>a.price-b.price)
    display(lthd)
}

document.getElementById("htl").addEventListener("click",htl)
document.getElementById("lth").addEventListener("click",lth)

fetch(`http://localhost:3000/product`)
.then((res)=>res.json())
.then((data)=>{
    display(data)
    arr=data
    console.log(arr);
})