// F1 store

const productos = [];  //completar array de productos

altaProducto ();
cardProducto();

function altaProducto()
{

    productos.forEach((dato) =>{
        const producto = new Producto(
            dato.id,
            dato.model,
            dato.image,
            dato.precio,
        )
    });
    productos.push(producto);
}

console.table(productos); //especificado en class y array


function cardProducto()
{
    const contenedor = document.createElement("div");
    contenedor.classList.add("mainContainer");



    document.body.appendChild(contenedor);
}