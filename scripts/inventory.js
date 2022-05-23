document.getElementById('add_more_product').addEventListener('click',gotoInven)
function gotoInven(){
   window.location.href="index.html"
}
let productDetail= JSON.parse(localStorage.getItem('products')) || []
let all_products=document.getElementById('all_products')
productDetail.map(function(el,indx){
    let div=document.createElement('div')
    let type=document.createElement('p')
        type.innerHTML=el.type
    let desc=document.createElement('p')
        desc.innerHTML=el.desc
    let price=document.createElement('p')
        price.innerHTML=el.price 
    let image=document.createElement('img')
        image.src=el.image
    let btn=document.createElement('button')
        btn.innerText='Remove'
        btn.setAttribute('id','remove_product') 
    // btn.addEventListener('click',remove)
    // function remove(indx){
    //      productDetail.filter(indx)  
    // }            
        div.append(image,type,desc,price,btn)
      all_products.append(div)  
})