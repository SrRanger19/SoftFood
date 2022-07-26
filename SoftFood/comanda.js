
const conexion = require ('./conectar');

var precio = 0.00;
var categoria = "";

function hamburguesa(){
    $query = `Select * from producto where categoria='hamburguesa'`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");
    
    mostrarDatos(rows);
    
    });
    
    categoria = "Hamburguesa";
}

function taco(){

    $query = `Select * from producto where categoria='taco'`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");
    
    mostrarDatos(rows);
    
    });

    categoria = "Taco";
}

function burrito(){
   
    $query = `Select * from producto where categoria='burrito'`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");
    
    mostrarDatos(rows);
    
    });

   categoria = "Burrito";

}

function orden(){
    
    $query = `Select * from producto where categoria='orden'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Orden";

}



function tlayuda(){
    
    $query = `Select * from producto where categoria='tlayuda'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Tlayuda";

}

function quesadilla(){
    
    $query = `Select * from producto where categoria='quesadilla'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Quesadilla";

}

function postre(){
    
    $query = `Select * from producto where categoria='postre'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Postre";

}

function natural(){
    
    $query = `Select * from producto where categoria='natural'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });
    
    categoria = "Natural";

}

function embotellado(){
    
    $query = `Select * from producto where categoria='embotellado'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Embotellado";
    
}

function cerveza(){
    
    $query = `Select * from producto where categoria='cerveza'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
    mostrarDatos(rows);
        
        });

    categoria = "Cerveza";

}

function mostrarDatos(rows){
    if(rows[0] != null)
        document.getElementById("label1").innerHTML = rows[0].nombre;
    else
        document.getElementById("label1").innerHTML = "";
    if(rows[1] != null)
        document.getElementById("label2").innerHTML = rows[1].nombre;
    else
        document.getElementById("label2").innerHTML = "";
    if(rows[2] != null)
        document.getElementById("label3").innerHTML = rows[2].nombre;
    else
        document.getElementById("label3").innerHTML = "";
    if(rows[3] != null)
        document.getElementById("label4").innerHTML = rows[3].nombre;
    else
        document.getElementById("label4").innerHTML = "";
    if(rows[4] != null)
        document.getElementById("label5").innerHTML = rows[4].nombre;
    else
        document.getElementById("label5").innerHTML = "";
    if(rows[5] != null)
        document.getElementById("label6").innerHTML = rows[5].nombre;
    else
        document.getElementById("label6").innerHTML = "";
    if(rows[6] != null)
        document.getElementById("label7").innerHTML = rows[6].nombre;
    else
        document.getElementById("label7").innerHTML = "";
    if(rows[7] != null)
        document.getElementById("label8").innerHTML = rows[7].nombre;
    else
        document.getElementById("label8").innerHTML = "";
    if(rows[8] != null)
        document.getElementById("label9").innerHTML = rows[8].nombre;
    else
        document.getElementById("label9").innerHTML = "";
    if(rows[9] != null)
        document.getElementById("label10").innerHTML = rows[9].nombre;
    else
        document.getElementById("label10").innerHTML = "";
    if(rows[10] != null)
        document.getElementById("label11").innerHTML = rows[10].nombre;
    else
        document.getElementById("label11").innerHTML = "";
    if(rows[11] != null)
        document.getElementById("label12").innerHTML = rows[11].nombre;
    else
        document.getElementById("label12").innerHTML = "";
    if(rows[12] != null)
        document.getElementById("label13").innerHTML = rows[12].nombre;
    else
        document.getElementById("label13").innerHTML = "";
    if(rows[13] != null)
        document.getElementById("label14").innerHTML = rows[13].nombre;
    else
        document.getElementById("label14").innerHTML = "";
    if(rows[14] != null)
        document.getElementById("label15").innerHTML = rows[14].nombre;
    else
        document.getElementById("label15").innerHTML = "";
    if(rows[15] != null)
        document.getElementById("label16").innerHTML = rows[15].nombre;
    else
        document.getElementById("label16").innerHTML = "";
    if(rows[16] != null)
        document.getElementById("label17").innerHTML = rows[16].nombre;
    else
        document.getElementById("label17").innerHTML = "";
    if(rows[17] != null)
        document.getElementById("label18").innerHTML = rows[17].nombre;
    else
        document.getElementById("label18").innerHTML = "";
    if(rows[18] != null)
        document.getElementById("label19").innerHTML = rows[18].nombre;
    else
        document.getElementById("label19").innerHTML = "";
    if(rows[19] != null)
        document.getElementById("label20").innerHTML = rows[19].nombre;
    else
        document.getElementById("label20").innerHTML = "";
    if(rows[20] != null)
        document.getElementById("label21").innerHTML = rows[20].nombre;
    else
        document.getElementById("label21").innerHTML = "";
    if(rows[21] != null)
        document.getElementById("label22").innerHTML = rows[21].nombre;
    else
        document.getElementById("label22").innerHTML = "";
    if(rows[22] != null)
        document.getElementById("label23").innerHTML = rows[22].nombre;
    else
        document.getElementById("label23").innerHTML = "";
    if(rows[23] != null)
        document.getElementById("label24").innerHTML = rows[23].nombre;
    else
        document.getElementById("label24").innerHTML = "";
    if(rows[24] != null)
        document.getElementById("label25").innerHTML = rows[24].nombre;
    else
        document.getElementById("label25").innerHTML = "";
}

function subOrden1(){
    var subOrden = document.getElementById("label1").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden2(){
    var subOrden = document.getElementById("label2").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden3(){
    var subOrden = document.getElementById("label3").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden4(){
    var subOrden = document.getElementById("label4").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden5(){
    var subOrden = document.getElementById("label5").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);
 
}

function subOrden6(){
    var subOrden = document.getElementById("label6").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden7(){
    var subOrden = document.getElementById("label7").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden8(){
    var subOrden = document.getElementById("label8").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden9(){
    var subOrden = document.getElementById("label9").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden10(){
    var subOrden = document.getElementById("label10").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden11(){
    var subOrden = document.getElementById("label11").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);
    
}

function subOrden12(){
    var subOrden = document.getElementById("label12").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden13(){
    var subOrden = document.getElementById("label13").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden14(){
    var subOrden = document.getElementById("label14").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden15(){
    var subOrden = document.getElementById("label15").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden16(){
    var subOrden = document.getElementById("label16").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden17(){
    var subOrden = document.getElementById("label17").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden18(){
    var subOrden = document.getElementById("label18").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden19(){
    var subOrden = document.getElementById("label19").innerHTML;
    document.getElementById("producto").value = subOrden;
    if(subOrden=="") return;
    getPrecio(subOrden);

}

function subOrden20(){
    var subOrden = document.getElementById("label20").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);
}

function subOrden21(){
    var subOrden = document.getElementById("label21").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);

}

function subOrden22(){
    var subOrden = document.getElementById("label22").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);
}

function subOrden23(){
    var subOrden = document.getElementById("label23").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);
}

function subOrden24(){
    var subOrden = document.getElementById("label24").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);
}

function subOrden25(){
    var subOrden = document.getElementById("label25").innerHTML;

    if(subOrden=="") return;
    document.getElementById("producto").value = subOrden;
    getPrecio(subOrden);
}

var subTotal = 0;
var lista=[];

function update(){

    var descuento = document.getElementById("Descuento").value;
    var cantidad = document.getElementById("cantidad").value;
    var especificacion = document.getElementById("especificacion").value;
    var subOrden = document.getElementById("producto").value;

    if(subOrden==""  || cantidad=="0" || cantidad=="" || especificacion==""){
        return;
    }
    if(cantidad<=0){
        alert("Acción no posible");
        return;
    }
   
    temp = precio * cantidad;

    subTotal = parseFloat(temp) + parseFloat(subTotal);
    document.getElementById("Subtotal").value = subTotal;

    var iva = subTotal*.16;
    document.getElementById("IVA").value = iva;

    var total = parseFloat(subTotal) + parseFloat(iva) - parseFloat(descuento);
    document.getElementById("Total").value = total;

    lista.push({categoria, subOrden, cantidad, especificacion, temp});

    var tabla1=document.getElementById("tabla1");
    var tabla2=document.getElementById("tabla2");
    var tabla3=document.getElementById("tabla3");
    var tabla4=document.getElementById("tabla4");
    var tabla5=document.getElementById("tabla5");

        var newRow = tabla1.insertRow(-1);
        var celda = newRow.insertCell(0)
        var texto = document.createTextNode(categoria);
        celda.appendChild(texto);
            
        var newRow = tabla2.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(subOrden);
        celda.appendChild(texto);

        var newRow = tabla3.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(cantidad);
        celda.appendChild(texto);

        var newRow = tabla4.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(especificacion);
        celda.appendChild(texto);

        var newRow = tabla5.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(temp);
        celda.appendChild(texto);

}

function generarTicket(){
    if(lista.length == 0){
        alert("No hay ningun producto registrado");
        return;
    }

    var descuento = document.getElementById("Descuento").value;
    var iva = document.getElementById("IVA").value;
    var Subtotal = document.getElementById("Subtotal").value;
    var Total = document.getElementById("Total").value;
    var texto="";
    
    for(var i = 0; i <lista.length; i++){
        texto += "Categoria: " + lista[i].categoria + " " + "\n" +
        "Producto: " + lista[i].subOrden + " " + "\n" +
        "Cantidad: " + lista[i].cantidad + " " + "\n" +
        "Especificacion: " +  lista[i].especificacion + "\n" +
        "Precio: " + lista[i].temp + "\n" + "\n";
    }

    alert(
        "***SOFTFOOD***" + "\n" + "\n" +
        "¡Gracias por la compra!" + "\n" + "\n" + "***********************" + "\n" +
        texto + "\n" +
        "***********************" + "\n" + "\n" +
        "sub total: " + Subtotal + "\n" +
        "IVA: " + iva + "\n" +
        "Descuento: " + descuento + "\n" +
        "Total: " + Total
    );
    limpiarTodo();
}

function limpiarTodo(){
    document.getElementById("Descuento").value = 0.00;
    document.getElementById("IVA").value = 0.00;
    document.getElementById("Subtotal").value = 0.00;
    document.getElementById("Total").value = 0.00;

    document.getElementById("tabla1").innerHTML = "";
    document.getElementById("tabla2").innerHTML = "";
    document.getElementById("tabla3").innerHTML = "";
    document.getElementById("tabla4").innerHTML = "";
    document.getElementById("tabla5").innerHTML = "";

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "0";
    document.getElementById("especificacion").value = "";

    document.getElementById("label1").innerHTML = "";
    document.getElementById("label2").innerHTML = "";
    document.getElementById("label3").innerHTML = "";
    document.getElementById("label4").innerHTML = "";
    document.getElementById("label5").innerHTML = "";
    document.getElementById("label6").innerHTML = "";
    document.getElementById("label7").innerHTML = "";
    document.getElementById("label8").innerHTML = "";
    document.getElementById("label9").innerHTML = "";
    document.getElementById("label10").innerHTML = "";
    document.getElementById("label11").innerHTML = "";
    document.getElementById("label12").innerHTML = "";
    document.getElementById("label13").innerHTML = "";
    document.getElementById("label14").innerHTML = "";
    document.getElementById("label15").innerHTML = "";
    document.getElementById("label16").innerHTML = "";
    document.getElementById("label17").innerHTML = "";
    document.getElementById("label18").innerHTML = "";
    document.getElementById("label19").innerHTML = "";
    document.getElementById("label20").innerHTML = "";
    document.getElementById("label21").innerHTML = "";
    document.getElementById("label22").innerHTML = "";
    document.getElementById("label23").innerHTML = "";
    document.getElementById("label24").innerHTML = "";
    document.getElementById("label25").innerHTML = "";

    categoria = "";
    precio = 0.00;
    subTotal=0;
    iva=0;
    total=0;
    lista=[];
}

 function getPrecio(subOrden){

    $query = `select precio from producto where nombre='${subOrden}'`;
    
    conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        
        precio = rows[0].precio;
        
        });
}