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

