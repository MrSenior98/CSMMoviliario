const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart')
    })
    /* aqui comienza firebase */
var database = firebase.database();
var ref = database.ref('https://csmmobiliario-default-rtdb.firebaseio.com');
/* envio de info a firebase */
document.getElementById('Formulario').addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();
    var datos = {
        campo1: document.getElementById('campo1').value,
        campo2: document.getElementById('campo2').value,
        // ...
    };
    firebase.database().ref('ruta/a/tus/datos').set(datos);
});