const conexion = require('./conectar');


function cargarDatos(){

    var categoria=document.getElementById("txto2").value;
    var nombre=document.getElementById("product").value;
    var descripcion=document.getElementById("descrip").value;
    var precio=document.getElementById("price").value;
    if(categoria=="" || nombre=="" || descripcion=="" || precio=="..."){
        alert("Llene todos los campos")
    }else{
    $query = `INSERT INTO producto VALUES (0,'${nombre}','${precio}','${categoria}','${descripcion}','${null}')`;
    conexion.query($query,function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente");
        }
    });
}
}

function borrarDatos(){
    var producto=document.getElementById("delete").value;
    if(producto==""){
        alert("Llene el campo")
    }else{
    $query = `delete from producto where nombre = '${producto}'`
    conexion.query($query,function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente");
            alert("el producto ha sido eliminado")
        }
    });
}
}

function buscarDatos(){//dependiendo de la categoria
    console.log("esto funciona")
    
    //para borrar los datos de las tablas
    document.getElementById("tabla1").innerHTML="";
    document.getElementById("tabla2").innerHTML="";
    document.getElementById("tabla3").innerHTML="";
    document.getElementById("tabla4").innerHTML="";
    document.getElementById("tabla5").innerHTML="";

    //la funcion se atora si eliges una categoria sin registros
    var buscar=document.getElementById("txto1").value;
    if(buscar=="---"){
        return;
    }
    /*if (buscar=="Todo") {
        $query = `Select * from producto`;*/
    else{
        $query = `Select * from producto where categoria='${buscar}'`;
    }
   
    conexion.query($query, function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente", rows);
    
            var tabla1=document.getElementById("tabla1");
            var tabla2=document.getElementById("tabla2");
            var tabla3=document.getElementById("tabla3");
            var tabla4=document.getElementById("tabla4");
            var tabla5=document.getElementById("tabla5");
    
            if(rows.length == 0){
                alert("no encontrado");
            }else{
                var long = rows.length;
                console.log("ejecutado correctamente",rows);
                var long = rows.length;

                for(i=0 ; i<long ; i++){
                 //var cadena = rows[i].id + ' ' + rows[i].nombre + ' ' + rows[i].precio + ' '
                   // +rows[i].cantidad + ' ' + rows[i].categoria + ' '+ row[i].especificacion +'\n';
                    
                    var newRow = tabla1.insertRow(-1);
                    var celdaId = newRow.insertCell(0);
                    var textoId = document.createTextNode(rows[i].id);
                    celdaId.appendChild(textoId);

                    var newRow = tabla2.insertRow(-1);
                    var celdaCategoria = newRow.insertCell(0);
                    var textoCategoria = document.createTextNode(rows[i].categoria);
                    celdaCategoria.appendChild(textoCategoria);

                    var newRow = tabla3.insertRow(-1);
                    var celdaNombre = newRow.insertCell(0);
                    var textoNombre = document.createTextNode(rows[i].nombre);
                    celdaNombre.appendChild(textoNombre);

                    var newRow = tabla4.insertRow(-1);
                    var celdaDescripcion = newRow.insertCell(0);
                    var textoDescripcion = document.createTextNode(rows[i].descripcion);
                    celdaDescripcion.appendChild(textoDescripcion);

                    var newRow = tabla5.insertRow(-1);
                    var celdaPrecio = newRow.insertCell(0);
                    var textoPrecio = document.createTextNode(rows[i].precio);
                    celdaPrecio.appendChild(textoPrecio);
                   
            }
            }
        }
    }); 
}

function actualizarDatos(){
// no estoy seguro que debe hacer esta funcion
    var categoria=document.getElementById("txto2").value;
    var nombre=document.getElementById("product").value;
    var descripcion=document.getElementById("descrip").value;
    var precio=document.getElementById("price").value;
    var buscar=document.getElementById("buscar").value;

    if(categoria=="" || nombre=="" || descripcion=="" || precio=="..." || buscar=="" ){
        alert("Llene todos los campos")
    }else{

    $query = `update producto set nombre='${nombre}',precio='${precio}',categoria='${categoria}',descripcion='${descripcion}'
    where nombre='${buscar}'`;
    conexion.query($query,function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente");
        }
    });
}
    }


function buscarDato(){// en el boton buscar
    document.getElementById("tabla1").innerHTML="";
    document.getElementById("tabla2").innerHTML="";
    document.getElementById("tabla3").innerHTML="";
    document.getElementById("tabla4").innerHTML="";
    document.getElementById("tabla5").innerHTML="";
    document.getElementById("observacion").value="";
    var buscar=document.getElementById("buscar").value;
    
    
        $query = `Select * from producto where nombre='${buscar}'`;
    
   
    conexion.query($query, function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente", rows);
                    
                    
    
            if(rows.length == 0){
                alert("no encontrado");
            }else{
                var long = rows.length;
                console.log("ejecutado correctamente",rows);
                var long = rows.length;
   
                for(i=0 ; i<long ; i++){
                 //var cadena = rows[i].id + ' ' + rows[i].nombre + ' ' + rows[i].precio + ' '
                   // +rows[i].cantidad + ' ' + rows[i].categoria + ' '+ row[i].especificacion +'\n';
                   

                    var newRow = tabla1.insertRow(-1);
                    var celdaId = newRow.insertCell(0);
                    var textoId = document.createTextNode(rows[i].id);
                    celdaId.appendChild(textoId);

                    var newRow = tabla2.insertRow(-1);
                    var celdaCategoria = newRow.insertCell(0);
                    var textoCategoria = document.createTextNode(rows[i].categoria);
                    celdaCategoria.appendChild(textoCategoria);

                    var newRow = tabla3.insertRow(-1);
                    var celdaNombre = newRow.insertCell(0);
                    var textoNombre = document.createTextNode(rows[i].nombre);
                    celdaNombre.appendChild(textoNombre);

                    var newRow = tabla4.insertRow(-1);
                    var celdaEspecificacion = newRow.insertCell(0);
                    var textoEspecificacion = document.createTextNode(rows[i].descripcion);
                    celdaEspecificacion.appendChild(textoEspecificacion);

                    var newRow = tabla5.insertRow(-1);
                    var celdaPrecio = newRow.insertCell(0);
                    var textoPrecio = document.createTextNode(rows[i].precio);
                    celdaPrecio.appendChild(textoPrecio);

                    document.getElementById("txto2").value=rows[i].categoria;
                    document.getElementById("product").value=rows[i].nombre;
                    document.getElementById("descrip").value=rows[i].descripcion;
                    document.getElementById("price").value=rows[i].precio; 
                    document.getElementById("observacion").value=rows[i].observacion;
            }
                
           
    
            }
        }
    }); 
}

/*function limpiarDatos(){
    document.getElementById("tabla1").innerHTML="";
    document.getElementById("tabla2").innerHTML="";
    document.getElementById("tabla3").innerHTML="";
    document.getElementById("tabla4").innerHTML="";
    document.getElementById("tabla5").innerHTML="";
    document.getElementById("observacion").value="";
    document.getElementById("product").value="";
    document.getElementById("descrip").value="";
    document.getElementById("price").value="";
    document.getElementById("delete").value="";
    document.getElementById("buscar").value="";;

}*/

function habilitatexto(){
   
    document.getElementById("observacion").disabled=false;
}

function cancelartexto(){
    document.getElementById("observacion").value="";
    
    document.getElementById("observacion").disabled=true;
}

function guardarTA(){

    var buscar=document.getElementById("buscar").value;
    var observacion=document.getElementById("observacion").value;
    if(observacion==""){
        alert("no tiene observaciones")
    }else{
    $query = `update producto set observacion='${observacion}'
    where nombre='${buscar}'`;
    document.getElementById("observacion").disabled=true;
    conexion.query($query,function (err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("ejecutado correctamente");
        }
    });
}
}
