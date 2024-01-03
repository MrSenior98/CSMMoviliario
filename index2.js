import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyB3AJBzqkZE8zVLZ8gJAVRkOeLyBl1aKao",
    authDomain: "csmmobiliario.firebaseapp.com",
    databaseURL: "https://csmmobiliario-default-rtdb.firebaseio.com",
    projectId: "csmmobiliario",
    storageBucket: "csmmobiliario.appspot.com",
    messagingSenderId: "465303066360",
    appId: "1:465303066360:web:a46b8d62debb65b78b4d0d"
};

const app = initializeApp(firebaseConfig);
/// Referencia a la base de datos
const db = getFirestore(app)

// Referencia al formulario
const form = document.querySelector('#Formu');

// Evento de envío del formulario

const firestoreSave = async (e) => {

    e.preventDefault()
    // valores a obtener del formulario 
    const nombre = form.nombre.value
    const telefono = form.telefono.value
    const correo = form.correo.value
    const mensaje = form.mensaje.value

    const timeStamp = new Date()

    console.table({ nombre, telefono, correo, mensaje })

    try {
        console.log('ok')
        await addDoc(collection(db, 'cliente'),
            { nombre, telefono, correo, mensaje, timeStamp }
        );
        console.log('Datos enviados correctamente');
        formulario.reset(); 
    } catch (error) {
        console.error('Error al enviar datos:', error);
        alert('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.');
    }
    console.log('fin')
}

form.addEventListener('submit', firestoreSave)

/* form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('escucha en formulario activa')
  /*   try {
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
    } */