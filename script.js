let pName = document.getElementById("product-name")
let pPrice = document.getElementById("product-price")
let submit = document.getElementById("btn")
let prod = document.getElementById("products")
let cart = document.querySelector(".cart");
let none = document.querySelector("#none");

 
 let total = 0 ;
 let totalDisplay = document.createElement("p");
 totalDisplay.textContent = `Total : Rs ${total}`;


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let name = pName.value;
    let price = parseInt(pPrice.value);

    if( name && price ) {  //add only when input is filled
         // Adding products dynamically to the product list
         none.style.display = "none";
         let productItem = document.createElement("li");
         productItem.style.listStyle = "none";
         productItem.style.display = "flex";
         productItem.style.justifyContent = "space-between"; // Align items evenly
         productItem.style.padding = "10px"; // Add some padding for aesthetics
         productItem.style.borderBottom = "1px solid #ccc"; // Add a subtle border for separation
         productItem.textContent = `${name} - Rs ${price}`; // Display name and price
         prod.appendChild(productItem);

  

    // adding buttons for adding and subtracting quantity
    let addBtn = document.createElement("button");
    addBtn.textContent = "+";
    let subBtn = document.createElement("button")
    subBtn.textContent = "-";
    let num = document.createElement("p")
    num.textContent = 1;
     
   

    let value = 1;
    total+=price ;
    totalDisplay.textContent = `Total : Rs ${total}`
    
    let cartItems = document.createElement("li");
    cartItems.style.alignSelf = "center";
    cartItems.style.listStyle = "none" ;
    cartItems.textContent = `${name} ${price} x ${value}`;
    cart.appendChild(cartItems);

    addBtn.addEventListener("click", function () {
        value++
        num.textContent = value;
        cartItems.textContent = `${name} ${price} x ${value}`;
        total+=price;
        totalDisplay.textContent = `Total : Rs ${total}`
      
    })

    subBtn.addEventListener("click", function () {
        value-- ;
        if (value < 1) {
            num.textContent = value;
            prod.removeChild(productItem);
            cart.removeChild(cartItems);
            total-=price;
            none.style.display = "block";

        }
        else{
        num.textContent = value;
        cartItems.textContent = `${name} ${price} x ${value}`;
       total-=price;
        
    }
    totalDisplay.textContent = `Total : Rs ${total}`
    })

    productItem.appendChild(subBtn);
    productItem.appendChild(num);
    productItem.appendChild(addBtn);
    

    pName.value = "";
    pPrice.value = "";

    //Total
    cart.appendChild(totalDisplay);

}
else{
    alert("Please fill correct values")
    
}
   
});
