//cart
let addToCarts = document.querySelectorAll(".button-cart");
let cartCountNumber = document.getElementById("cartCountNumber");
let cartSound = document.getElementById("cart-sound");
let cartCount = 0;

addToCarts.forEach(function(addToCart) {
    addToCart.addEventListener("click", () => {
        cartCountNumber.style.display = "block";
        cartCount++;
        cartCountNumber.textContent = cartCount;
        cartSound.play();
    });
})

//wishlist
let addToWishlists = document.querySelectorAll(".button-wishlist");
let wishlistCountNumber = document.getElementById("wishlistCountNumber");
let wishlistSound = document.getElementById("wishlist-sound");
let wishlistCount = 0;

addToWishlists.forEach(function(addToWishlist) {
    addToWishlist.addEventListener("click", () => {
        wishlistCountNumber.style.display = "block";
        wishlistCount++;
        wishlistCountNumber.textContent = wishlistCount;
        wishlistSound.play();
    });
})