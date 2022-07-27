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
function buscar() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      confirmButtonColor: '#198754',
      width: 800,
      title: 'Agregar nuevo producto',
      html:
      '<label class="col-10">Nombre</label><input id="swal-input1" class="swal2-input col-10">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          resp=document.getElementById('swal-input1').value,
        ]
      }
    })
    
    if (formValues) {
      encontrar(resp)
    }
    })()
}

function encontrar(resp) {
  switch(resp) {
    case "zapote":
      document.getElementById("Imagen1").src = "Images/Plantas/zapote/zapote1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/zapote/zapote2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/zapote/zapote3.jpg"
      document.getElementById("Titulo").innerHTML = "Zapote"
      document.getElementById("Precio").innerHTML = "Precio: $100"
      document.getElementById("Boton").href = "Producto_Zapote.html"
      break;
    case "caoba":
      document.getElementById("Imagen1").src = "Images/Plantas/caoba/caoba1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/caoba/caoba2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/caoba/caoba3.jpg"
      document.getElementById("Titulo").innerHTML = "Caoba"
      document.getElementById("Precio").innerHTML = "Precio: $120"
      document.getElementById("Boton").href = "Producto_Caoba.html"
      break;
    case "cedro":
      document.getElementById("Imagen1").src = "Images/Plantas/cedro/cedro1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/cedro/cedro2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/cedro/cedro3.jpg"
      document.getElementById("Titulo").innerHTML = "Cedro"
      document.getElementById("Precio").innerHTML = "Precio: $110"
      document.getElementById("Boton").href = ""
      break;
    case "guarumo":
      document.getElementById("Imagen1").src = "Images/Plantas/guarumo/guarumo1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/guarumo/guarumo2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/guarumo/guarumo3.jpg"
      document.getElementById("Titulo").innerHTML = "Guarumo"
      document.getElementById("Precio").innerHTML = "Precio: $130"
      document.getElementById("Boton").href = ""
      break;
    case "chiit":
      document.getElementById("Imagen1").src = "Images/Plantas/chiit/chiit1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/chiit/chiit2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/chiit/chiit3.jpg"
      document.getElementById("Titulo").innerHTML = "Chiit"
      document.getElementById("Precio").innerHTML = "Precio: $100"
      document.getElementById("Boton").href = ""
      break;
    case "despeinada":
      document.getElementById("Imagen1").src = "Images/Plantas/despeinada/despeinada1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/despeinada/despeinada2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/despeinada/despeinada3.jpg"
      document.getElementById("Titulo").innerHTML = "Despeinada"
      document.getElementById("Precio").innerHTML = "Precio: $130"
      document.getElementById("Boton").href = ""
      break;
    case "ceiba":
      document.getElementById("Imagen1").src = "Images/Plantas/ceiba/ceiba1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/ceiba/ceiba2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/ceiba/ceiba3.jpg"
      document.getElementById("Titulo").innerHTML = "Ceiba"
      document.getElementById("Precio").innerHTML = "Precio: $90"
      document.getElementById("Boton").href = ""
      break;
    case "chaka":
      document.getElementById("Imagen1").src = "Images/Plantas/chaka/chaka1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/chaka/chaka2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/chaka/chaka3.jpg"
      document.getElementById("Titulo").innerHTML = "Chaka"
      document.getElementById("Precio").innerHTML = "Precio: $100"
      document.getElementById("Boton").href = ""
      break;
    case "roble":
      document.getElementById("Imagen1").src = "Images/Plantas/roble/roble1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/roble/roble2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/roble/roble3.jpg"
      document.getElementById("Titulo").innerHTML = "Roble"
      document.getElementById("Precio").innerHTML = "Precio: $140"
      document.getElementById("Boton").href = ""
      break;
    case "siricote":
      document.getElementById("Imagen1").src = "Images/Plantas/siricote/siricote1.jpg"
      document.getElementById("Imagen2").src = "Images/Plantas/siricote/siricote2.jpg"
      document.getElementById("Imagen3").src = "Images/Plantas/siricote/siricote3.jpg"
      document.getElementById("Titulo").innerHTML = "Siricote"
      document.getElementById("Precio").innerHTML = "Precio: $90"
      document.getElementById("Boton").href = "Producto_Siricote.html"
      break;
    
  }
}

function editBttn(idnombre, idimagen, idimagen2, idimagen3, idnombrealt, idfamilia, iddesc, idplant, idcuid, idstock, idprice) {
  var nombre=document.getElementById(idnombre).innerHTML;
  var imagen=document.getElementById(idimagen).src;
  var imagen2=document.getElementById(idimagen2).src;
  var imagen3=document.getElementById(idimagen3).src;
  var nombrecient=document.getElementById(idnombrealt).innerHTML;
  var familia=document.getElementById(idfamilia).innerHTML;
  var desc=document.getElementById(iddesc).innerHTML;
  var plant=document.getElementById(idplant).innerHTML;
  var cuid=document.getElementById(idcuid).innerHTML;
  var stock=document.getElementById(idstock).innerHTML;
  var precio=document.getElementById(idprice).innerHTML;
  (async () => {

    const { value: formValues } = await Swal.fire({
      confirmButtonColor: '#198754',
      width: 800,
      title: 'Editar información',
      html:
        '<label class="col-10">Nombre</label><input id="swal-input1" class="swal2-input col-10" value="'+nombre+'">' +
        '<label class="col-10">Primera Imagen</label><input id="swal-input2" class="swal2-input col-10" value="'+imagen+'">' +
        '<label class="col-10">Segunda Imagen</label><input id="swal-input3" class="swal2-input col-10" value="'+imagen2+'">' +
        '<label class="col-10">Tercera Imagen</label><input id="swal-input4" class="swal2-input col-10" value="'+imagen3+'">' +
        '<label class="col-10">Nombre cientifico</label><input id="swal-input5" class="swal2-input col-10" value="'+nombrecient+'">' +
        '<label class="col-10">Familia</label><input id="swal-input6" class="swal2-input col-10" value="'+familia+'">'+
        '<label class="col-10">Descripción</label><input id="swal-input7" class="swal2-input col-10" value="'+desc+'">'+
        '<label class="col-10">Plantación</label><input id="swal-input8" class="swal2-input col-10" value="'+plant+'">'+
        '<label class="col-10">Cuidado</label><input id="swal-input9" class="swal2-input col-10" value="'+cuid+'">'+
        '<label class="col-10">Stock</label><input id="swal-input10" class="swal2-input col-10" value="'+stock+'">'+
        '<label class="col-10">Precio</label><input id="swal-input11" class="swal2-input col-10" value="'+precio+'">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          newnombre=document.getElementById('swal-input1').value,
          newimagen=document.getElementById('swal-input2').value,
          newimagen2=document.getElementById('swal-input3').value,
          newimagen3=document.getElementById('swal-input4').value,
          newcient=document.getElementById('swal-input5').value,
          newfamilia=document.getElementById('swal-input6').value,
          newdesc=document.getElementById('swal-input7').value,
          newplant=document.getElementById('swal-input8').value,
          newcuid=document.getElementById('swal-input9').value,
          newstock=document.getElementById('swal-input10').value,
          newprecio=document.getElementById('swal-input11').value,
        ]
      }
    })
    
    if (formValues) {
      Swal.fire({
        confirmButtonColor: '#198754',
        title: 'Los datos han sido guardados'})
      document.getElementById(idnombre).innerHTML=newnombre
      document.getElementById(idimagen).src=newimagen
      document.getElementById(idimagen2).src=newimagen2
      document.getElementById(idimagen3).src=newimagen3
      document.getElementById(idnombrealt).innerHTML=newcient
      document.getElementById(idfamilia).innerHTML=newfamilia
      document.getElementById(iddesc).innerHTML=newdesc
      document.getElementById(idplant).innerHTML=newplant
      document.getElementById(idcuid).innerHTML=newcuid
      document.getElementById(idstock).innerHTML=newstock
      document.getElementById(idprice).innerHTML=newprecio
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
        '<label class="col-10">Primera Imagen</label><input id="swal-input2" class="swal2-input col-10">' +
        '<label class="col-10">Segunda Imagen</label><input id="swal-input3" class="swal2-input col-10">' +
        '<label class="col-10">Tercera Imagen</label><input id="swal-input4" class="swal2-input col-10">' +
        '<label class="col-10">Nombre cientifico</label><input id="swal-input5" class="swal2-input col-10">' +
        '<label class="col-10">Familia</label><input id="swal-input6" class="swal2-input col-10">'+
        '<label class="col-10">Descripción</label><input id="swal-input7" class="swal2-input col-10">'+
        '<label class="col-10">Plantación</label><input id="swal-input8" class="swal2-input col-10">'+
        '<label class="col-10">Cuidado</label><input id="swal-input9" class="swal2-input col-10">'+
        '<label class="col-10">Stock</label><input id="swal-input10" class="swal2-input col-10">'+
        '<label class="col-10">Precio</label><input id="swal-input11" class="swal2-input col-10">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            regnombre=document.getElementById('swal-input1').value,
            regimagen=document.getElementById('swal-input2').value,
            regimagen2=document.getElementById('swal-input3').value,
            regimagen3=document.getElementById('swal-input4').value,
            regcient=document.getElementById('swal-input5').value,
            regfamilia=document.getElementById('swal-input6').value,
            regdesc=document.getElementById('swal-input7').value,
            regplant=document.getElementById('swal-input8').value,
            regcuid=document.getElementById('swal-input9').value,
            regstock=document.getElementById('swal-input10').value,
            regprecio=document.getElementById('swal-input11').value,
          ]
        }
      })
      
      if (formValues) {
        Swal.fire({
          confirmButtonColor: '#198754',
          title: 'El producto ha sido registrado'})
        agregarProducto(regnombre, regimagen, regimagen2, regimagen3, regcient, regfamilia, regdesc, regstock, regprecio)
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
function agregarProducto(regnombre, regimagen, regimagen2, regimagen3, regcient, regfamilia, regdesc, regstock, regprecio)
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
      newImagen.className = "img-fluid col-4";
      newImagen.style = "object-fit: cover; max-height: 100%;";
      newImagen.src = regimagen;
      var ImagenNuevo = contador++;
      newImagen.id = ImagenNuevo;
      let Imagen = document.getElementById(SecondRowNuevo);
      Imagen.appendChild(newImagen);

      let newImagen2=document.createElement("img");
      newImagen2.className = "img-fluid col-4";
      newImagen2.style = "object-fit: cover; max-height: 100%;";
      newImagen2.src = regimagen;
      var ImagenNuevo2 = contador++;
      newImagen2.id = ImagenNuevo2;
      let Imagen2 = document.getElementById(SecondRowNuevo);
      Imagen2.appendChild(newImagen2);

      let newImagen3=document.createElement("img");
      newImagen3.className = "img-fluid col-4";
      newImagen3.style = "object-fit: cover; max-height: 100%;";
      newImagen3.src = regimagen;
      var ImagenNuevo3 = contador++;
      newImagen3.id = ImagenNuevo3;
      let Imagen3 = document.getElementById(SecondRowNuevo);
      Imagen3.appendChild(newImagen3);

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
      let newBreak3=document.createElement("br");
      let Break3 = document.getElementById(SmallNuevo2);
      Break3.appendChild(newBreak3);

      let newSmall3=document.createElement("small");
      newSmall3.innerHTML = regdesc;
      var SmallNuevo3 = contador++;
      newSmall3.id = SmallNuevo3;
      let Small3 = document.getElementById(CardTextNuevo);
      Small3.appendChild(newSmall3);
      let newBreak4=document.createElement("br");
      let Break4 = document.getElementById(SmallNuevo3);
      Break4.appendChild(newBreak4);

      let newSmall4=document.createElement("small");
      newSmall4.innerHTML = regplant;
      var SmallNuevo4 = contador++;
      newSmall4.id = SmallNuevo4;
      let Small4 = document.getElementById(CardTextNuevo);
      Small4.appendChild(newSmall4);
      let newBreak5=document.createElement("br");
      let Break5 = document.getElementById(SmallNuevo4);
      Break5.appendChild(newBreak5);

      let newSmall5=document.createElement("small");
      newSmall5.innerHTML = regcuid;
      var SmallNuevo5 = contador++;
      newSmall5.id = SmallNuevo5;
      let Small5 = document.getElementById(CardTextNuevo);
      Small5.appendChild(newSmall5);
      let newBreak6=document.createElement("br");
      let Break6 = document.getElementById(SmallNuevo5);
      Break6.appendChild(newBreak6);

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

