function removeBttn(id) {
    swal({
        title: "¿Desea eliminar el produdcto?",
        text: "Esta acción es permanente",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("El articulo ha sido eliminado", {
            icon: "success",
          });
          
          remove(id);
        } else {
          swal("Acción cancelada");
        }
      });
}
function editBttn(id, id2) {
    swal("¿Qué elemento desea editar?", {
        buttons: {
          cancel: "Cancelar",
          nombre: "Nombre",
          imagen: "Imagen",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "imagen":
            swal("Ingresa la fuente de la nueva imagen:", {
                content: "input",
              })
              .then((value) => {
                swal(`La imagen ha sido cambiada con exito`);
                cambiarImagen(value, id2);
              });
            break;
       
          case "nombre":
            
            swal("Ingresa el nuevo nombre:", {
                content: "input",
              })
              .then((value) => {
                swal(`El nuevo nombre es: ${value}`);
                cambiarNombre(value, id);
              });
            break;
       
          default:
            swal("La acción fue cancelada");
        }
      });
}

function remove(id) 
	 {
     var element = document.getElementById(id);
     return element.parentNode.removeChild(element);
	 }

function cambiarNombre(value, id)
     {
        document.getElementById(id).innerHTML = value;
     }

function cambiarImagen(value, id)
    {
        document.getElementById(id).src = value;
    }