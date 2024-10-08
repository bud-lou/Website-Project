//badge start number
document.getElementById("badgeNum").innerHTML = sessionStorage.getItem("itemsCart");
amountInCart = parseInt(sessionStorage.getItem("itemsCart"));
//Initial text in cart modal
document.getElementById("modalText").innerHTML = "Click this button in order to purchase items in cart."

//changes icon and badgeNum - all glyphicons courtesy of https://glyphicons.bootstrapcheatsheets.com/
function iconChange(button,clicked_id) {
  if (document.getElementById(clicked_id).title == "Add to cart") {
    $(button).find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-check");
    document.getElementById(clicked_id).title = "Remove from cart";
    amountInCart += 1;
    document.getElementById("badgeNum").innerHTML = amountInCart;
    sessionStorage.setItem("itemsCart", amountInCart);
  } else {
    $(button).find(".glyphicon").removeClass("glyphicon-check").addClass("glyphicon-plus");
    document.getElementById(clicked_id).title = "Add to cart";
    amountInCart -= 1;
    document.getElementById("badgeNum").innerHTML = amountInCart;
    sessionStorage.setItem("itemsCart", amountInCart);
  }
}

function purchaseItems() {
  document.getElementById("modalText").innerHTML = "Items Purchased Successfully! They will be ready to pick up at a nearby store at 4pm tomorrow.";
  amountInCart = 0;
  document.getElementById("badgeNum").innerHTML = amountInCart;
  sessionStorage.setItem("itemsCart", amountInCart);
}

function clearCart() {
  amountInCart = 0;
  document.getElementById("badgeNum").innerHTML = amountInCart;
  sessionStorage.setItem("itemsCart", amountInCart);
}


