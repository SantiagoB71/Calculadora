
//CAPTURAMOS LOS ELEMENTOS DEL DOM 
const procesoDisplay = document.getElementById('procesoCalculadora');
const respuestaDisplay = document.getElementById('respuestaCalculadora');
const botones = document.querySelectorAll('.calculadora__buttons');
document.addEventListener('keydown', manejarTeclado);

//ADD EVENT LISTENER PARA CADA BOTON QUE SE PRESIONA 
botones.forEach(boton => {
    boton.addEventListener('click', manejarClick);
});

function manejarClick(event) {
    const valor = event.target.value;

    //si se presiona C borra todo lo que hay en pantalla 
    if (valor === 'C') {
        procesoDisplay.textContent = '';
        respuestaDisplay.textContent = '';
    } else if (valor === '=') {
        try {
            //reemplazamos la X por el * para que se realize la multiplicacion 
            const resultado = eval(procesoDisplay.textContent.replace(/X/g, '*'));
            respuestaDisplay.textContent = resultado;

            //procesoDisplay.textContent = '';
        } catch (error) {
            respuestaDisplay.textContent = 'Error';
        }
    } else {
        procesoDisplay.textContent += valor;
    }
}
function manejarTeclado(event) {
    const key = event.key; // Obtiene la tecla presionada

    // Mapea las teclas del teclado a las funcionalidades de la calculadora
    if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' ||
        key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || 
        key === '.') {
        // Si la tecla presionada es un número o un punto, añade su valor al proceso
        procesoDisplay.textContent += key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Si la tecla presionada es un operador, añade su valor al proceso
        procesoDisplay.textContent += key;
    } else if (key === 'Enter') {
        // Si la tecla presionada es 'Enter', evalúa la expresión
        try {
            const resultado = eval(procesoDisplay.textContent);
            respuestaDisplay.textContent = resultado;
        } catch (error) {
            respuestaDisplay.textContent = 'Error';
        }
    } else if (key === 'Backspace') {
        // Si la tecla presionada es 'Backspace', elimina el último carácter del proceso
        procesoDisplay.textContent = procesoDisplay.textContent.slice(0, -1);
    } else if (key === 'Escape') {
        // Si la tecla presionada es 'Escape', limpia las pantallas
        procesoDisplay.textContent = '';
        respuestaDisplay.textContent = '';
    }
}
