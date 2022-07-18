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

function addBttn() {
      swal("Ingresa el nombre del producto:", {
        content: "input",
      })
      .then((value) => {
        var nombre = value
        swal("Ingresa la imagen del producto:", {
          content: "input",
        })
        .then((value) => {
          swal("El producto ha sido creado");
          agregarProducto(nombre, value);
        });
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

var contador;
contador = 1;
function agregarProducto(nombre, value)
    {
      let newProduct=document.createElement("div");
      newProduct.className = "card mb-3 shadow-sm";
      newProduct.style = "width: 40rem;";
      var ContenedorNuevo = contador++;
      newProduct.id = ContenedorNuevo;
      let Contenedor = document.getElementById("theContainer");
      Contenedor.appendChild(newProduct);
      
      let newRow=document.createElement("div");
      newRow.className = "row g-0";
      var RowNuevo = contador++;
      newRow.id = RowNuevo;
      let Row = document.getElementById(ContenedorNuevo)
      Row.appendChild(newRow);

      let newSecondRow=document.createElement("div");
      newSecondRow.className = "col-md-4";
      var SecondRowNuevo = contador++;
      newSecondRow.id = SecondRowNuevo;
      let SecondRow = document.getElementById(RowNuevo);
      SecondRow.appendChild(newSecondRow);

      let newImagen=document.createElement("img");
      newImagen.className = "img-fluid rounded-start";
      newImagen.style = "height: 9rem;";
      newImagen.src = value;
      var ImagenNuevo = contador++;
      newImagen.id = ImagenNuevo;
      let Imagen = document.getElementById(SecondRowNuevo);
      Imagen.appendChild(newImagen);

      let newThirdRow=document.createElement("div");
      newThirdRow.className = "col-md-8";
      var ThirdRowNuevo = contador++;
      newThirdRow.id = ThirdRowNuevo;
      let ThirdRow = document.getElementById(RowNuevo);
      ThirdRow.appendChild(newThirdRow);

      let newCardBody=document.createElement("div");
      newCardBody.className = "card-body";
      var CardBodyNuevo = contador++;
      newCardBody.id = CardBodyNuevo;
      let CardBody = document.getElementById(ThirdRowNuevo);
      CardBody.appendChild(newCardBody);

      let newCardTitle=document.createElement("h5");
      newCardTitle.className = "card-title";
      newCardTitle.innerHTML = nombre;
      var CardTitleNuevo = contador++;
      newCardTitle.id = CardTitleNuevo;
      let CardTitle = document.getElementById(CardBodyNuevo);
      CardTitle.appendChild(newCardTitle);

      let newEditBttn=document.createElement("button");
      newEditBttn.className = "btn btn-success";
      newEditBttn.innerHTML = "Editar";
      newEditBttn.onclick = "editBttn(CardTitleNuevo, ImagenNuevo)";
      var EditBttnNuevo = contador++;
      newEditBttn.id = EditBttnNuevo;
      let EditBttn = document.getElementById(CardBodyNuevo);
      EditBttn.appendChild(newEditBttn);
      
      let newDeleteBttn=document.createElement("button");
      newDeleteBttn.className = "btn btn-success";
      newDeleteBttn.innerHTML = "Remover";
      newDeleteBttn.onclick = "removeBttn(ContenedorNuevo)";
      var DeleteBttnNuevo = contador++;
      newDeleteBttn.id = DeleteBttnNuevo;
      let DeleteBttn = document.getElementById(CardBodyNuevo);
      DeleteBttn.appendChild(newDeleteBttn);
    }