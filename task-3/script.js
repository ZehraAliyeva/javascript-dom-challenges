const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 }
];
const productContainer = document.querySelector("#productContainer");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCount");
const totalPrice = document.querySelector("#totalPrice");
const cart = [];
function updateCart(){
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        const info = document.createElement("div");
        info.textContent = `${item.name} - $${item.price}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });
        li.append(info, removeBtn);
        cartList.append(li);
    });
    cartCount.textContent = `Cart: ${cart.length} items`;
    totalPrice.textContent = `Total: $${total}`;
}
products.forEach((product) =>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = product.id;
    const title = document.createElement("h3");
    title.textContent = product.name;
    const price = document.createElement("p");
    price.textContent=`$${product.price}`;
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () =>{
        cart.push(product);
        updateCart();
    });
    card.append(title,price,button);
    productContainer.append(card);
});