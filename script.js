 // ===================================
// LUME CAT CAFE - script.js
// ===================================


// ---------- 1. BOOKING FORM (booking.html) ----------

function bookVisit(event) {
    // Form submit hone par page reload na ho
    event.preventDefault();

    // Form se values lena
    let name   = document.getElementById("name").value;
    let date   = document.getElementById("date").value;
    let time   = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    // Thank you message screen par dikhana
    let message = document.getElementById("booking-message");
    message.style.color = "#65432c";
    message.innerHTML = `
        Thank you, ${name}! ฅ^._.^ฅ<br>
        Your booking request is ready.<br>
        Date: ${date}<br>
        Time: ${time}<br>
        Guests: ${guests}<br>
        We look forward to welcoming you to Lume Cat Café! 𑄝੭`;
}


// ---------- 2. CART (menu.html) ----------

// Cart ek khali list hai, jisme items jama honge
let cart = [];

// "Add to Cart" button dabane par chalta hai
function addToCart(item, price) {
    cart.push({ item: item, price: price });
    showCart();
}

// Cart ki list aur total screen par dikhata hai
function showCart() {
    let list = document.getElementById("cart-items");
    let total = 0;

    list.innerHTML = "";

    for (let product of cart) {
        list.innerHTML += `<li>${product.item} - Rs. ${product.price}</li>`;
        total += product.price;
    }

    document.getElementById("cart-total").innerText = "Total: Rs. " + total;
}

// "Place Order" button dabane par chalta hai
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add something first.");
        return;
    }

    alert("Thank you for your order! ^. .^₎⟆");

    cart = [];     // Cart khali kar do
    showCart();    // Screen update karo
}
