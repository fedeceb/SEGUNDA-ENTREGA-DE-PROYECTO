// ----- F1 - SHOP -------

/*class Producto{
    constructor (id, model, image, precio)
    {
        this.id = id;
        this.model = model;
        this.image = image;
        this.precio = precio;
    }
}*/

const prod1 = new Producto(1, "Alfa Romeo", "", "");
const prod2 = new Producto(2, "Aston Martin", "", "");
const prod3 = new Producto(3, "McLaren", "", "");
const prod4 = new Producto(4, "Williams", "", "");
const prod5 = new Producto(5, "Alfa Tauri", "", "");
const prod6 = new Producto(6, "Ferrari", "", "");
const prod7 = new Producto(7, "Mercedes", "", "");
const prod8 = new Producto(8, "Alpine", "", "");
const prod9 = new Producto(9, "Haas", "", "");
const prod10 = new Producto(10, "Red Bull", "", "");


const productos = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10];

/*mostrarMenu();

function mostrarMenu()
{
    let opcion = 0;

    while (opcion !==4)
    {
        opcion = Number(prompt(`ELIGA SU ACCIÓN:
                                1. SHOP
                                2. TICKETS
                                3. FILTAR PRODUCTOS
                                4. SALIR`));
        
        switch (opcion)
        {
            case 1:
            {
                listaShop ();
                break;
            }
            
            case 2:
            {
                listaTickets ();
                break;
            }
            case 3:
                {
                    filtrarProds ();
                    break;
                }
            case 4:
                {
                    alert ("Gracias por la visita!");
                    break;
                }
            default:
                {
                    alert ("Opción invalida.");
                    break;
                }
        }
    }
}
*/
inicializarApp ();

function inicializarApp()
{
    crearTitulo ();
    crearMenu ();
}


function listaShop ()
{
    const liShop = document.createElement("ul");

    productos.forEach((producto) =>{
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${producto.producto}`;
        liShop.appendChild(nodoli);
    });
    document.body.appendChild(liShop);
}

/*filtroProds ()
{
    let nombre = prompt("ingresar nombre");

    let
}*/


// ------- EVENTOS --------

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "F1 store";

    tituloH1.classList.add("miTitulo");

    document.body.appendChild(tituloH1);
}

function crearMenu()
{
    let opciones = ["SHOP", "TICKETS", "FILTRO PRODUCTOS"]
    opciones.forEach((opcion)=>{
        const boton = document.createElement("button");

        if (opcion === "SHOP")
        {
            boton.addEventListener("click", ()=>{
                listaShop ();
            })
        }
        
        /*if (opcion === "TICKETS")
        {
            boton.addEventListener("click", ()=>{
                listaTickets ();
            })
        }*/

        /*else if (opcion === "FILTRO PRODUCTOS")
        {
            boton.addEventListener("click", () =>{
            let filProd = filtroProds ();

            listaShop(filProd);
            listaTickets(filProd);
            })
        }*/

        boton.innerHTML = opcion;
        document.body.appendChild(boton);
    })
}

