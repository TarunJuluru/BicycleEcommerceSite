/*global document*/

var cartNumber = 0;

function viewer(imagesourse) {
    document.getElementById("product-viewer").src = imagesourse;
}

function cartIns() {
    cartNumber = cartNumber + 1;
    document.getElementById("result").innerHTML = cartNumber;
}

function cartDes() {
    cartNumber = cartNumber - 1;
    document.getElementById("result").innerHTML = cartNumber;
}

function cartResult() {
    document.getElementById("add-cart").innerHTML = cartNumber;
}
