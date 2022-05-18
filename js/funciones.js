/**
 * Funciones Auxiliares
 */

function buscaProducto(id) {
    // Devuelve un producto
    for (producto of products) {
        if (producto.id == id) {
            return (producto);
        }
        return (false);
    }
}


function buscaEnCarrito(id) {
    // Devuelve un producto
    for (producto of cart) {
        if (producto.id == id) {
            return (producto);
        }
    }
    return (false);
}


function controlBtnModal() {
    // Activar / Desactivar los botones del modal
    if (total) {
        cleanCart_btn.disabled = false;
        checkOut_btn.disabled = false;
    } else {
        cleanCart_btn.disabled = true;
        checkOut_btn.disabled = true;
    }
}


function restaCant(id) {
    producto = buscaEnCarrito(id);
    //alert(`id=${id}\n id=${producto.id}\n name=${producto.name}`);
    if (producto && producto.quantity) {
        producto.quantity--;
        producto.subtotal = calculaSubtotal(producto).subtotal;
        countProduct--;
        count_product.innerHTML = countProduct;
        if (!countProduct) cleanCart();
    }
    if (!producto.quantity) cart = cart.filter(item => !(item.id == id));

    actualizaCarrito();
    printCart();

}

function sumaCant(id) {
    producto = buscaEnCarrito(id);
    //alert(`id=${id}\n id=${producto.id}\n name=${producto.name}`);
    if (producto) {
        producto.quantity++;
        producto.subtotal = calculaSubtotal(producto).subtotal;
        countProduct++;
        count_product.innerHTML = countProduct;
    }

    actualizaCarrito();
    printCart();

}


function actualizaCarrito() {
    applyPromotionsCart();
    calculateTotal();
    controlBtnModal();
}
