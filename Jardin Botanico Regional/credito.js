
function validarnombre(){
    let x = document.forms["frml"]["Nombre"].value;
    if(x ===""){
        document.getElementById("error").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}


function validarcp(){
    let x = document.forms["cp1"]["cp"].value;
    if(x ===""){
        document.getElementById("llama").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}

function validarcod(){
    let x = document.forms["code"]["cod"].value;
    if(x ===""){
        document.getElementById("maste").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}

function validardir(){
    let x = document.forms["dir"]["direc"].value;
    if(x ===""){
        document.getElementById("error3").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}

function validarpa(){
    let x = document.forms["country"]["land"].value;
    if(x ===""){
        document.getElementById("error4").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}

function validarest(){
    let x = document.forms["yuc"]["tan"].value;
    if(x ===""){
        document.getElementById("error5").innerHTML='Tiene que completar todos los campos';
        return false;
    }
   
}

function validarfech(){
    let x = document.forms["dat"]["fech"].value;
    if(x ===""){
        document.getElementById("error6").innerHTML='Tiene que completar todos los campos';
        return false;
    }
 
}

function validartargeta(){
    let x = document.forms["tar"]["geta"].value;
    if(x ===""){
        document.getElementById("error7").innerHTML='Tiene que completar todos los campos';
        return false;
    }

}



