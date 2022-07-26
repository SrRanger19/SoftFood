const conexion = require ('./conectar');

function registrarse(){
    var username = document.getElementById("username").value;
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var txto = document.getElementById("txto").value;
    

    if(username=="" || correo=="" || password=="" || txto=="..." || confirm=="" ){
        var texto = "Por favor llene todos los campos";
        document.getElementById("validacion").innerHTML = texto;
    }else{
        var texto = "Las contraseñas no coinciden";
    if(password==confirm){
        
    $query = `INSERT INTO usuario VALUES (
    0,'${null}',
    '${null}','${txto}','${null}','${null}', '${null}',
    '${null}', '${password}', '${username}', '${correo}', '${null}', '${null}'
    )`;
    conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");

        location.href='login.html';
    
    });}else{
            document.getElementById("validacion").innerHTML = texto;
        }
    }
}
