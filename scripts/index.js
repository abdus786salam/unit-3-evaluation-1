//store the products array in localstorage as "products"
document.getElementById('show_products').addEventListener('click',gotoInven)
function gotoInven(){
   window.location.href="inventory.html"
}

let productDetail= JSON.parse(localStorage.getItem('products')) || []

function products(t,d,p,i){
    
        this.type=t ,
        this.desc=d ,
        this.price=p ,
        this.image=i 
        
}

document.getElementById('add_product').addEventListener('click',addProductFun)
function addProductFun(){
    event.preventDefault()
    
let type=document.getElementById('type').value
let desc=document.getElementById('desc').value
let price=document.getElementById('price').value
let image=document.getElementById('image').value
product1= new products(type,desc,price,image)
productDetail.push(product1)
localStorage.setItem('products',JSON.stringify(productDetail))

document.getElementById('type').value=null
document.getElementById('desc').value=null
document.getElementById('price').value=null
document.getElementById('image').value=null
// console.log(productDetail)
}