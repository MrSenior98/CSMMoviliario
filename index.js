/* const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart')
    }) */
/* aqui comienza firebase */


/* envio de info a firebase */

const firebaseConfig = {
    apiKey: "AIzaSyB3AJBzqkZE8zVLZ8gJAVRkOeLyBl1aKao",
    authDomain: "csmmobiliario.firebaseapp.com",
    databaseURL: "https://csmmobiliario-default-rtdb.firebaseio.com",
    projectId: "csmmobiliario",
    storageBucket: "csmmobiliario.appspot.com",
    messagingSenderId: "465303066360",
    appId: "1:465303066360:web:a46b8d62debb65b78b4d0d"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref('https://csmmobiliario-default-rtdb.firebaseio.com');
document.getElementById('Formu').addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();
    var datos = {
        Nombre: document.getElementById('Nombre').value,
        Telefono: document.getElementById('Telefono').value,
        Mail: document.getElementById('Mail').value,
        Mensaje: document.getElementById('Mensaje').value
            // ...
    };
    firebase.database().ref('Cliente').set(datos)
});