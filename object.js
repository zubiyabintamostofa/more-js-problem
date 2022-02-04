const products=[
    {name:'laptop',price:55000},
    {name:'shirt',price:5000},
    {name:'watch',price:3600},
    {name:'phone',price:35000},
]
let totalprice=0;
for(const product of products){
    totalprice=totalprice+product.price;
}
//console.log (totalprice)

//onk product kinle tar niyom
const cart=[
    {name:'laptop',price:55000 ,quentity:1},
    {name:'shirt',price:5000,quentity:8},
    {name:'watch',price:3600,quentity:3},
    {name:'phone',price:35000,quentity:1}
]
let cartTotal=0;
for(const product of cart){
 console.log(product)  
 const productTotal=product.price*product.quentity; 
 cartTotal=cartTotal+productTotal;
}
console.log(cartTotal)