function saludar ()

    {
    let nombre = prompt ("Ingrese su nombre");
    alert("Bienvenido" + "  "+  nombre + "!!");
    } 

saludar();

let trio  = 3000;
let riera = 4000;
let terepin = 2000;
let acumulador = 0;

let mensaje = prompt ("¿Desea realizar una compra? (S-SI / N-NO)");
    while (mensaje == "S" || mensaje == "s") 
    {
        let producto = prompt("1-Galletitas Trio \n2- Tostadas Riera \n3- Pepas Terepín");
                                    if (producto == "1")    
                                    {  
                                    alert("Galletitas Trio ---- $3000 + IVA por caja");
                                    let cantidad = prompt ("¿Cuantas cajas desea comprar?");
                                    acumulador= acumulador+(trio * cantidad);
                                    }
                                    else if (producto == "2")
                                    
                                    {
                                    alert("Tostadas Riera ---- $4000 + IVA por caja");
                                    let cantidad = prompt ("¿Cuantas cajas desea comprar?");
                                    acumulador= acumulador+(riera * cantidad);                   
                                    }

                                    else if (producto == "3")
                                    {
                                    alert("Pepas Terepín ---- $2000 + IVA por caja");
                                    let cantidad = prompt ("¿Cuantas cajas desea comprar?");
                                    acumulador= acumulador+(terepin * cantidad);
                                    }
                                    else 
                                    {
                                    alert("Producto inexistente")
                                    }
        mensaje = prompt ("¿Desea comprar otro producto? (S-SI / N-NO)");
        alert ("El valor de su compra es" + " $ " + acumulador + " +IVA");
    }

function calcularTotalConIva (totalCompra)
{
    let totalConIva = acumulador *1.21;
    alert ("El precio final de su compra es" + " $" +  totalConIva + " " + "Gracias por su elegirnos!!");
}
calcularTotalConIva();