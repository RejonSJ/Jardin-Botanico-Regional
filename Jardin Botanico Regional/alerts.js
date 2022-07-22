function removeBttn(id) {
  Swal.fire({
    title: '¿Desea eliminar el producto?',
    text: "Esta acción es permanente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#198754',
    cancelButtonColor: '#b8b8b8',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        confirmButtonColor: '#198754',
        title: 'Eliminado',
        text: 'El producto ha sido eliminado',
        icon: 'success',
      })
      remove(id)
    }
  })
}
function editBttn(idnombre, idimagen, idnombrealt, idfamilia, iddesc, idstock, idprice) {
  var nombre=document.getElementById(idnombre).innerHTML;
  var imagen=document.getElementById(idimagen).src;
  var nombrecient=document.getElementById(idnombrealt).innerHTML;
  var familia=document.getElementById(idfamilia).innerHTML;
  var desc=document.getElementById(iddesc).innerHTML;
  var stock=document.getElementById(idstock).innerHTML;
  var precio=document.getElementById(idprice).innerHTML;
  (async () => {

    const { value: formValues } = await Swal.fire({
      confirmButtonColor: '#198754',
      width: 800,
      title: 'Editar información',
      html:
        '<label class="col-10">Nombre</label><input id="swal-input1" class="swal2-input col-10" value="'+nombre+'">' +
        '<label class="col-10">Imagen</label><input id="swal-input2" class="swal2-input col-10" value="'+imagen+'">' +
        '<label class="col-10">Nombre cientifico</label><input id="swal-input3" class="swal2-input col-10" value="'+nombrecient+'">' +
        '<label class="col-10">Familia</label><input id="swal-input4" class="swal2-input col-10" value="'+familia+'">'+
        '<label class="col-10">Descripción</label><input id="swal-input5" class="swal2-input col-10" value="'+desc+'">'+
        '<label class="col-10">Stock</label><input id="swal-input6" class="swal2-input col-10" value="'+stock+'">'+
        '<label class="col-10">Precio</label><input id="swal-input7" class="swal2-input col-10" value="'+precio+'">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          newnombre=document.getElementById('swal-input1').value,
          newimagen=document.getElementById('swal-input2').value,
          newcient=document.getElementById('swal-input3').value,
          newfamilia=document.getElementById('swal-input4').value,
          newdesc=document.getElementById('swal-input5').value,
          newstock=document.getElementById('swal-input6').value,
          newprecio=document.getElementById('swal-input7').value,
        ]
      }
    })
    
    if (formValues) {
      Swal.fire({
        confirmButtonColor: '#198754',
        title: 'Los datos han sido guardados'})
      document.getElementById(idnombre).innerHTML=newnombre
      document.getElementById(idimagen).src=newnombre
      document.getElementById(idnombrealt).innerHTML=newnombre
      document.getElementById(idfamilia).innerHTML=newnombre
      document.getElementById(iddesc).innerHTML=newnombre
      document.getElementById(idstock).innerHTML=newnombre
      document.getElementById(idprice).innerHTML=newnombre
    }
    
    })()
}

function addBttn() 
  {
    (async () => {

      const { value: formValues } = await Swal.fire({
        confirmButtonColor: '#198754',
        width: 800,
        title: 'Agregar nuevo producto',
        html:
        '<label class="col-10">Nombre</label><input id="swal-input1" class="swal2-input col-10">' +
        '<label class="col-10">Imagen</label><input id="swal-input2" class="swal2-input col-10">' +
        '<label class="col-10">Nombre cientifico</label><input id="swal-input3" class="swal2-input col-10">' +
        '<label class="col-10">Familia</label><input id="swal-input4" class="swal2-input col-10">'+
        '<label class="col-10">Descripción</label><input id="swal-input5" class="swal2-input col-10">'+
        '<label class="col-10">Stock</label><input id="swal-input6" class="swal2-input col-10">'+
        '<label class="col-10">Precio</label><input id="swal-input7" class="swal2-input col-10">',
        focusConfirm: false,
        preConfirm: () => {
          return [
          regnombre=document.getElementById('swal-input1').value,
          regimagen=document.getElementById('swal-input2').value,
          regcient=document.getElementById('swal-input3').value,
          regfamilia=document.getElementById('swal-input4').value,
          regdesc=document.getElementById('swal-input5').value,
          regstock=document.getElementById('swal-input6').value,
          regprecio=document.getElementById('swal-input7').value,
          ]
        }
      })
      
      if (formValues) {
        Swal.fire({
          confirmButtonColor: '#198754',
          title: 'El producto ha sido registrado'})
        agregarProducto(regnombre, regimagen, regcient, regfamilia, regdesc, regstock, regprecio)
      }
      })()
  }

function remove(id) 
	 {
     var element = document.getElementById(id);
     return element.parentNode.removeChild(element);
	 }

function tarjeta()
    {
      (async () => {

        const { value: formValues } = await Swal.fire({
          confirmButtonColor: '#198754',
          width: 800,
          title: 'Agregar información de la tarjeta',
          html:
            '<label class="col-3">Número de tarjeta</label><input id="swal-input1" class="swal2-input col-6">' +
            '<label class="col-2">Fecha de expiración</label><input id="swal-input2" class="swal2-input col-2">' +
            '<label class="col-2">CVC</label><input id="swal-input3" class="swal2-input col-2">' +
            '<label class="col-3">Titular de la tarjeta</label><input id="swal-input4" class="swal2-input col-6">'+
            '<label class="col-3">Dirección</label><input id="swal-input5" class="swal2-input col-6">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              regNum=document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
              document.getElementById('swal-input4').value,
              document.getElementById('swal-input5').value
            ]
          }
        })
        
        if (formValues) {
          Swal.fire({
            confirmButtonColor: '#198754',
            title: 'Los datos han sido guardados'})
          regTarjeta(regNum);
        }
        
        })()
    }

  function regTarjeta(regNum)
    {
      document.getElementById("numTarjeta").innerHTML=regNum;
      document.getElementById("bttnPago").className="btn btn-success";
      let findPago = document.getElementById("bttnPago");
      findPago.setAttribute("onclick", "confirmarPago()");
    }

    function confirmarPago() {
      Swal.fire({
        title: 'Confirmar pago',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#b8b8b8',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            confirmButtonColor: '#198754',
            title: 'Compra realizada',
            text: 'Su compra se ha realizado exitosamente',
            icon: 'success',
          })
        }
      })
    }

  function verificarLogin()
  {
    let x = document.forms["frm1"]["Correo"].value;
    let y = document.forms["frm1"]["Contraseña"].value;
    var i;
    if (x===""){
      document.getElementById("alertCorreo").innerHTML="Ingrese un correo";
      return false;
    } else {
      document.getElementById("alertCorreo").innerHTML="";
    }
    if (y===""){
      document.getElementById("alertPass").innerHTML="Ingrese una contraseña";
      return false;
    } else {
      document.getElementById("alertPass").innerHTML="";
    }
  }

var contador;
contador = 1;
function agregarProducto(regnombre, regimagen, regcient, regfamilia, regdesc, regstock, regprecio)
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
      newRow.style = "height: 100%;";
      var RowNuevo = contador++;
      newRow.id = RowNuevo;
      let Row = document.getElementById(ContenedorNuevo)
      Row.appendChild(newRow);

      let newSecondRow=document.createElement("div");
      newSecondRow.className = "col-md-4 d-flex";
      var SecondRowNuevo = contador++;
      newSecondRow.id = SecondRowNuevo;
      let SecondRow = document.getElementById(RowNuevo);
      SecondRow.appendChild(newSecondRow);

      let newImagen=document.createElement("img");
      newImagen.className = "img-fluid rounded-start";
      newImagen.style = "object-fit: cover; max-height: 100%;";
      newImagen.src = regimagen;
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
      newCardTitle.innerHTML = regnombre;
      var CardTitleNuevo = contador++;
      newCardTitle.id = CardTitleNuevo;
      let CardTitle = document.getElementById(CardBodyNuevo);
      CardTitle.appendChild(newCardTitle);

      let newCardText=document.createElement("p");
      newCardText.className = "card-text";
      var CardTextNuevo = contador++;
      newCardText.id = CardTextNuevo;
      let CardText = document.getElementById(CardBodyNuevo);
      CardText.appendChild(newCardText);

      let newSmall=document.createElement("small");
      newSmall.innerHTML = "Nombre científico: "
      var SmallNuevo = contador++;
      newSmall.id = SmallNuevo;
      let Small = document.getElementById(CardTextNuevo);
      Small.appendChild(newSmall);
      let newCient=document.createElement("a");
      newCient.innerHTML = regcient;
      var CientNuevo = contador++;
      newCient.id = CientNuevo;
      let Cient = document.getElementById(SmallNuevo);
      Cient.appendChild(newCient);
      let newBreak=document.createElement("br");
      let Break = document.getElementById(SmallNuevo);
      Break.appendChild(newBreak);

      let newSmall2=document.createElement("small");
      newSmall2.innerHTML = "Familia de plantas: "
      var SmallNuevo2 = contador++;
      newSmall2.id = SmallNuevo2;
      let Small2 = document.getElementById(CardTextNuevo);
      Small2.appendChild(newSmall2);
      let newFam=document.createElement("a");
      newFam.innerHTML = regfamilia;
      var FamNuevo = contador++;
      newFam.id = FamNuevo;
      let Familia = document.getElementById(SmallNuevo2);
      Familia.appendChild(newFam);
      let newBreak2=document.createElement("br");
      let Break2 = document.getElementById(SmallNuevo2);
      Break2.appendChild(newBreak2);

      let newSmall3=document.createElement("small");
      newSmall3.style = "font-size: 10px;";
      newSmall3.innerHTML = regdesc;
      var SmallNuevo3 = contador++;
      newSmall3.id = SmallNuevo3;
      let Small3 = document.getElementById(CardTextNuevo);
      Small3.appendChild(newSmall3);

      let newCardText2=document.createElement("p");
      newCardText2.className = "card-text";
      newCardText2.innerHTML = "Stock: ";
      var CardTextNuevo2 = contador++;
      newCardText2.id = CardTextNuevo2;
      let CardText2 = document.getElementById(CardBodyNuevo);
      CardText2.appendChild(newCardText2);
      let newStock=document.createElement("a");
      newStock.innerHTML = regstock;
      var StockNuevo = contador++;
      newStock.id = StockNuevo;
      let StockProducto = document.getElementById(CardTextNuevo2);
      StockProducto.appendChild(newStock);

      let newCardText3=document.createElement("p");
      newCardText3.className = "card-text";
      newCardText3.innerHTML = "Precio: $";
      var CardTextNuevo3 = contador++;
      newCardText3.id = CardTextNuevo3;
      let CardText3 = document.getElementById(CardBodyNuevo);
      CardText3.appendChild(newCardText3);
      let newPrecio=document.createElement("a");
      newPrecio.innerHTML = regprecio;
      var PrecioNuevo = contador++;
      newPrecio.id = PrecioNuevo;
      let PrecioProducto = document.getElementById(CardTextNuevo3);
      PrecioProducto.appendChild(newPrecio);

      let newEditBttn=document.createElement("button");
      newEditBttn.className = "btn btn-success";
      newEditBttn.innerHTML = "Editar";
      var EditBttnNuevo = contador++;
      newEditBttn.id = EditBttnNuevo;
      let EditBttn = document.getElementById(CardBodyNuevo);
      EditBttn.appendChild(newEditBttn);
      newEditBttn.setAttribute("onclick", ("editBttn("+CardTitleNuevo+", "+ImagenNuevo+", "+CientNuevo+", "+FamNuevo+", "+SmallNuevo3+", "+StockNuevo+", "+PrecioNuevo+")"));
      
      let newDeleteBttn=document.createElement("button");
      newDeleteBttn.className = "btn btn-success";
      newDeleteBttn.innerHTML = "Remover";
      var DeleteBttnNuevo = contador++;
      newDeleteBttn.id = DeleteBttnNuevo;
      let DeleteBttn = document.getElementById(CardBodyNuevo);
      DeleteBttn.appendChild(newDeleteBttn);
      newDeleteBttn.setAttribute("onclick",("removeBttn("+ContenedorNuevo+")"));
    }