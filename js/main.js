// ----- F1 - SHOP -------

const prod1 = new Producto(1, "Alfa Romeo");
const prod2 = new Producto(2, "Aston Martin");
const prod3 = new Producto(3, "McLaren");
const prod4 = new Producto(4, "Williams");
const prod5 = new Producto(5, "Alfa Tauri");
const prod6 = new Producto(6, "Ferrari");
const prod7 = new Producto(7, "Mercedes");
const prod8 = new Producto(8, "Alpine");
const prod9 = new Producto(9, "Haas");
const prod10 = new Producto(10, "Red Bull");


const productos = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10];
console.log(productos);


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


// ------- EVENTOS --------

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "F1 store";

    tituloH1.classList.add("miTitulo");

    document.body.appendChild(tituloH1);
}

function crearMenu() //CREAR DIV ACA!!!
{
    const opciones = ["SHOP", "TICKETS", "FILTRO PRODUCTOS","REGISTRARSE"]
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

        if (opcion === "BUSCAR PRODUCTOS")
        {
            boton.addEventListener("click", () =>{
            let filProd = buscarProds ();

            listaShop(filProd);
            listaTickets(filProd);
            })
        }

        /*if (opcion === "REGISTRARSE")
        {

        }*/

        boton.innerHTML = opcion;
        document.body.appendChild(boton);
    })
}

function buscarProds ()
{
    let nombre = prompt("Ingresar producto");

    let encontrados = productos.filter((producto) => producto.model.toLowerCase().indexOf(model.toLocaleLowerCase())!==-1);
}
