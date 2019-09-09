function validarForm(forma) {

    //validacion nombre
    var nombre = document.getElementById("nombre").value;
    var txtNombre = document.getElementById("nombre");

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        nombre.focus();
        nombre.select();
        txtNombre.classList.add('error');
        return false;
    } else {
        txtNombre.classList.remove('error');
    }

    //validacion correo
    var correo = document.getElementById("mail").value;
    var txtCorreo = document.getElementById("mail");

    //Test correo
    if (correo == null || correo.length == 0 || !(/\S+@\S+\.\S+/.test(mail))) {
        alert('ERROR: Debe escribir un correo válido');
        txtCorreo.classList.add('error');
    } else {
        txtCorreo.classList.remove('error');
    }

    //validacion fono
    var telefono = document.getElementById("fono").value;
    var txtTelefono = document.getElementById("fono");

    if (telefono == null || telefono.lenght == 3 || !(isNaN)) {
        alert("El campo telefono no debe ir vacío y deben ser valores numericos ");
        telefono.focus();
        telefono.select();
        txtTelefono.classList.add('error');
        return false;
    } else {
        txtTelefono.classList.remove('error');
    }

    //validacion mensaje
    var msj = document.getElementById("mensaje").value;
    var txtMsj = document.getElementById("mensaje");

    if (msj == null || msj.lenght == 3) {
        alert("El campo telefono no debe ir vacío y deben ser valores numericos ");
        msj.focus();
        msj.select();
        txtMsj.classList.add('error');
        return false;
    } else {
        txtMsj.classList.remove('error');
    }

    alert("Formulario Valido, envinado datos...");
    return true;

}