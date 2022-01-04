$(document).ready(function () {
    // Aplicando lo aprendido 1
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaevnzjf7_ZrepNXTs_irEgllAStl0Lvo",
    authDomain: "fir-demo-d6ed4.firebaseapp.com",
    projectId: "fir-demo-d6ed4",
    storageBucket: "fir-demo-d6ed4.appspot.com",
    messagingSenderId: "874869253201",
    appId: "1:874869253201:web:cf9e02cf80c05b1d81c470",
    measurementId: "G-2S2WH76BP6"
  };

  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Inicializar Auth de Firebase
  const auth = firebase.auth();

  // Rergistrar los usuarios
  // Si no esta registrado, debe hacer click en boton registrar
  $("#btnRegistro").click(function (e) {
    e.preventDefault();
    // Esto hará que el login desaparezca
    $("#login").hide();
    // Esto hara que el formulario de registro aparezca
    $(".registro-usuario").show();
  })
  // Si se completa el formulario de registro y se envia, registra al nuevo usuario y se guarda la sesion
  $("#btnRegistrar").click(function (e) {
    e.preventDefault();
    // Capturamos los datos enviados por el formulario de registro
    // Campo email
    var email = $("#registroEmail").val();
    //Campo Password
    var password = $("#registroPassword").val();

    // Metodo de firebase que permite registro de usarios con email
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // ocultar formulario de registro
        $(".registro-usuario").hide();
        // limpiar formulario de registro
        $("#registroUsuario").trigger("reset");
      })
      .catch((error) => { // Esto permite capturar el error, se puede trabajar este catch con los codigos de error
        var errorCode = error.code;
        var errorMessage = error.message;
        // Muestro en la consola el codigo de error y el mensaje de error
        console.log(errorCode, errorMessage);
      });
  })

  // Acceso de usuarios
  // Ingresar por email
  $("#btnIngresoEmail").click(function (e) {
    e.preventDefault();
    // Mostramos formulario de ingreso por email
    $("#IngresoEmail").show();
    // Ocultamos boton de ingreso por email
    $("#btnIngresoEmail").hide();
  })

  // Si ingresamos por correo y password mostramos formulario de ingreso 
  $("#btnIngresoConEmail").click(function (e) {
    e.preventDefault();
    // Capturamos los datos enviados por el formulario de ingreso
    // Campo email
    var email = $("#ingresoEmail").val();
    // Campo Password
    var password = $("#ingresoPassword").val();

    // Metodo que permite ingreso de usarios con email
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {        
        // limpiar formualrio de ingreso
        $("#IngresoEmail").trigger("reset");
      })
      .catch((error) => {// Esto permite capturar el error, se puede trabajar este catch con los codigos de error
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  })

  // Desconexion de Usuarios
  // Boton LogOut
  $("#logout").click(function (e) {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log("Log Out");
    })
  })

  // Ver si sesion esta activa
  auth.onAuthStateChanged((user) => {
    if (user) {
      // Si usuario esta conectado
      // ocultamos el login
      $("#login").hide();
      // ocultamos el formulariod e registro
      $(".registro-usuario").hide();
      // mostramos el contenido
      $("#contenidoWeb").show();
    } else {
      // Si usuario esta desconectado
      // Se oculta formulario de registro
      $(".registro-usuario").hide();
      // Se oculta formulario de ingreso
      $("#IngresoEmail").hide();
      // Se muestra el boton de ingreso por email
      $("#btnIngresoEmail").show();
      // Se oculta contenido de la página
      $("#contenidoWeb").hide();
      // Se muestra el login
      $("#login").show()
    }
  });
});