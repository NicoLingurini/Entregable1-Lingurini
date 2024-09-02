
let impresorasDisponibles = 20;
let ventasTotales = 0;

const PRECIO_TINTA = 150;
const MAX_IMPRESORAS = 50;

const impresorasTinta = ['Impresora Tinta A', 'Impresora Tinta B', 'Impresora Tinta C'];

function venderImpresora(tipo) {
    if (impresorasDisponibles > 0) {
        if (tipo === 'tinta') {
            console.log(`Vendiendo ${impresorasTinta.shift()} por $${PRECIO_TINTA}`);
            ventasTotales += PRECIO_TINTA;
        }
        else {
            console.log('Tipo de impresora no reconocido.');
            return;
        }

        impresorasDisponibles--;
        console.log(`Impresoras restantes en inventario: ${impresorasDisponibles}`);
    } 
    else {
        console.log('No hay impresoras disponibles para la venta.');
    }
}

function mostrarVentasTotales() {
    console.log(`Ventas totales: $${ventasTotales}`);
}

function añadirImpresoras() {
    const cantidad = parseInt(prompt('¿Cuántas impresoras quieres añadir al inventario?'), 10);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    if (impresorasDisponibles + cantidad <= MAX_IMPRESORAS) {
        impresorasDisponibles += cantidad;
        alert(`Se han añadido ${cantidad} impresoras al inventario. Total disponible: ${impresorasDisponibles}`);
    } else {
        alert('No se puede añadir más impresoras. El inventario máximo se ha alcanzado.');
    }
}

añadirImpresoras()
venderImpresora('tinta'); 
mostrarVentasTotales(); 
