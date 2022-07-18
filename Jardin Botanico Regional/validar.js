function validarCorreo(){
    let x = document.forms["frml"]["Correo"].value;
    if(x ===""){
        alert("se debe completar el Correo") ;
        return false;
    }
}


function validarContraseña(){
    let x = document.forms["frm2"]["Contraseña"].value;
    if(x ===""){
        alert("se debe completar el Contraseña") ;
        return false;
    }
}

