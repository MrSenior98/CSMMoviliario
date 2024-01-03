/* import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; */
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
// Referencia a la base de datos
var database = firebase.database();
// Referencia al formulario
var form = document.getElementById('Formu');
// Evento de envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
    try {
        // Obtener los valores del formulario
        var nombre = document.getElementById('Nombre').value;
        var telefono = document.getElementById('Telefono').value;
        var correo = document.getElementById('Mail').value;
        var mensaje = document.getElementById('Mensaje').value;

        // Enviar los datos a Firebase
        database.ref('Cliente').push({
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            mensaje: mensaje
        });
        alert('Formulario enviado');
        console.log('Formulario enviado');
    } catch (error) {
        // Mostrar el error en una alerta
        alert('Ha ocurrido un error: ' + error.message);
    }
});