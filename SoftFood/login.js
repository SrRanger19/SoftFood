const conexion = require ('./conectar');

function iniciarSesion(){
	var usernamecorreo = document.getElementById("username").value;
	var password = document.getElementById("password").value;

    if(usernamecorreo=="" || password==""){
        var texto = "Por favor llene todos los campos";
        document.getElementById("validacion").innerHTML = texto;
    }else{
        var texto = "Usuario, correo o contraseña incorrectos";
        $query = `Select * from usuario where (usuario='${usernamecorreo}' or 
        correo='${usernamecorreo}') && contraseña='${password}'`;

        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");

        if(rows.length==0){
            texto = "Usuario, correo o contraseña incorrectos";
            document.getElementById("validacion").innerHTML = texto;
            return;
        }

         for(var i = 0; i < rows.length; i++){
               if (rows[i].usuario ==  usernamecorreo || rows[i].correo == usernamecorreo){
                if(rows[i].contraseña ==  password){
                     location.href='comanda.html';
                     break;
                  }else{
                    texto = "Usuario, correo o contraseña incorrectos";
                    document.getElementById("validacion").innerHTML = texto;
                  }
                }else{
                    texto = "Usuario, correo o contraseña incorrectos";
                    document.getElementById("validacion").innerHTML = texto;
                }    
        }
        });
    }
}
