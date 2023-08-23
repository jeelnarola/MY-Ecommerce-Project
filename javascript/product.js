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
        let btn=document.createElement("button")
        btn.innerHTML="Buy Now"
        let btn2=document.createElement("button")
        btn2.innerHTML="Add To Cart"

        btn2.addEventListener("click",()=>{
console.log("id",ele.id);
            let cart=localStorage.getItem("sing")
            if(cart){
                fetch(`http://localhost:3000/cart?id=${ele.id}`)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data);
                    if(data.length>0){
                        alert("yes")
                        data[0].qyt=data[0].qyt+1
                        fetch(`http://localhost:3000/cart/${data[0].id}`,{
                            method:"PATCH",
                            headers:{"Content-type":"application/json"},
                            body:JSON.stringify(...data)
                        })
                    }
                    else{
                        // alert("no")
                        let pro=data[0]
                        console.log(pro);

                        fetch(`http://localhost:3000/cart`,{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body:JSON.stringify({...ele,qyt:1})
                        })
                    }
                })
            }
            else{
                alert("Plz Login || Sing-up")
                setTimeout(() => {
                    window.location.href="/peags/singup.html"
                }, 1000);
            }

        })


        let div=document.createElement("div")
        div.append(img,title,category,description,price,btn,btn2)
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


const get=()=>{
    fetch(`http://localhost:3000/product`)
.then((res)=>res.json())
.then((data)=>{
    display(data)
    arr=data
})
}
get()
document.getElementById("all").addEventListener("click",get)
document.getElementById("htl").addEventListener("click",htl)
document.getElementById("lth").addEventListener("click",lth)