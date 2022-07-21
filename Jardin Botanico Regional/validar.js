function validarCorreo(){
    let x = document.forms["frml"]["Correo"].value;
    if(x ===""){
        document.getElementById("error").innerHTML='Complete su correo';
        return false;
    }
}

function validarContraseña(){
    let x = document.forms["frm2"]["Contraseña"].value;
    if(x ===""){
        document.getElementById("error2").innerHTML='Complete su contraseña';
        return false;
    }
}

