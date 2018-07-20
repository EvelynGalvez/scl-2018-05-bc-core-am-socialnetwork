const signUp = document.getElementById('btn_signUp'); // botón o enlace "Regístrate"
const createAccount = document.getElementById('btn_registrar'); // botón "Registrar" en pantalla de registro
const ingresar = document.getElementById('btn_login'); // botón para ingresar en pantalla de login
  
signUp.addEventListener('click', () => {
  document.getElementById('screen1').style.display = 'none';
  document.getElementById('screen2').style.display = 'block';
});


function toShowScreenAlimentacion() {
  document.getElementById('screen3').style.display = 'none';
  document.getElementById('screenCuidados').style.display = 'none';
  document.getElementById('screenDirectorio').style.display = 'none';
  document.getElementById('screenAdopciones').style.display = 'none';
  document.getElementById('screenAlimentacion').style.display = 'block';
  closeMenu();
}

function toShowScreenCuidados() {
  document.getElementById('screen3').style.display = 'none';
  document.getElementById('screenDirectorio').style.display = 'none';
  document.getElementById('screenAlimentacion').style.display = 'none';
  document.getElementById('screenAdopciones').style.display = 'none';
  document.getElementById('screenCuidados').style.display = 'block';
  closeMenu();
}

function toShowScreenDirectorio() {
  document.getElementById('screen3').style.display = 'none';
  document.getElementById('screenAlimentacion').style.display = 'none';
  document.getElementById('screenCuidados').style.display = 'none';
  document.getElementById('screenAdopciones').style.display = 'none';
  document.getElementById('screenDirectorio').style.display = 'block';
  closeMenu();
}

function toShowScreenAdopciones() {
  document.getElementById('screen3').style.display = 'none';
  document.getElementById('screenAlimentacion').style.display = 'none';
  document.getElementById('screenCuidados').style.display = 'none';
  document.getElementById('screenDirectorio').style.display = 'none';
  document.getElementById('screenAdopciones').style.display = 'block';
  closeMenu();
}

function toShowScreenMuro() {
  document.getElementById('screen3').style.display = 'block';
  document.getElementById('screenAlimentacion').style.display = 'none';
  document.getElementById('screenCuidados').style.display = 'none';
  document.getElementById('screenDirectorio').style.display = 'none';
  document.getElementById('screenAdopciones').style.display = 'none';
  closeMenu();
}