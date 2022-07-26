const conexion = require ('./conectar');

class Node
{
    constructor(index, data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.index = index;
    }
}
        var contador2=0;
        var contador1=0;// AGREGAR FALTA ESTA LINEA
        this.root = null;
    
        function insert(index, data) {
        var newNode = new Node(index, data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    
    function insertNode(node, newNode) {
        if (newNode.index < node.index) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    

    function inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node);
            this.inorder(node.right);
        }
    }

    function preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    function postorden(node) {
        if (node !== null) {
            this.postorden(node.left);
            this.postorden(node.right);
            console.log(node.data);
        }
    }
    
    function findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    function getRootNode() {
        return this.root;
    }

    function search(node, id) {
        console.log(node.index);
        if (node === null)
            return null;
        else if (id < node.index){
            return this.search(node.left, id);
        }
        else if (id > node.index){
            return this.search(node.right, id);
        }
        else{
            console.log("dato encontrado");
            console.log(node);
            return node.data;
        }
    }


    function buscarUsuario(){
        correo = document.getElementById("inpBuscar").value;
        document.getElementById("tabla1").innerHTML = "";
        document.getElementById("tabla2").innerHTML = "";
        document.getElementById("tabla3").innerHTML = "";
        document.getElementById("tabla4").innerHTML = "";

        if(correo==""){
            return;
        }
        
        $query = `Select * from usuario where correo='${correo}'`;
    
        conexion.query ($query, function (err, rows){
        if (err){
            console.log ("error en el query");
            console.log (err);
            return;
        }
        console.log ("ejecutado correctamente");
        //console.log(rows.length);
        if(rows==0){
         alert("No encontrado");  
         return; 
        }else{
            //insert(contador1, rows[0]);


    console.log("*************************************************");
    var root = getRootNode();
    console.log("inorder traversal");
    inorder(root);
    console.log("postorder traversal");
    postorden(root);
    console.log("preorder traversal");
    preorder(root);*/
    console.log("*************************************************");
            
        document.getElementById("nss").value = rows[0].nss;
        document.getElementById("estudios").value = rows[0].estudio;
        document.getElementById("c/r").value = rows[0].cr;
        document.getElementById("a/p").value = rows[0].ap;
        document.getElementById("observacion").value = rows[0].observacion;
        document.getElementById("puesto").value = rows[0].puesto;
        document.getElementById("sueldo").value = rows[0].sueldo;
    
        var tabla1=document.getElementById("tabla1");
        var tabla2=document.getElementById("tabla2");
        var tabla3=document.getElementById("tabla3");
        var tabla4=document.getElementById("tabla4");
    
            var newRow = tabla1.insertRow(-1);
            var celda = newRow.insertCell(0)
            var texto = document.createTextNode(rows[0].id);
            celda.appendChild(texto);
                
            var newRow = tabla2.insertRow(-1);
            celda = newRow.insertCell(0)
            var texto = document.createTextNode(rows[0].usuario);
            celda.appendChild(texto);
    
            var newRow = tabla3.insertRow(-1);
            celda = newRow.insertCell(0)
            var texto = document.createTextNode(rows[0].correo);
            celda.appendChild(texto);
    
            var newRow = tabla4.insertRow(-1);
            celda = newRow.insertCell(0)
            var texto = document.createTextNode(rows[0].contraseña);
            celda.appendChild(texto);
            }
            $query = `Select id from usuario where correo='${correo}'`;
            conexion.query ($query, function (err, rows){
                if (err){
                    console.log ("error en el query");
                    console.log (err);
                    return;
                }

                var node = search(getRootNode(), rows[0].id);
                console.log(node.hentrada);

            document.getElementById("hentrada1").value = node.hentrada;
            document.getElementById("hsalida1").value = node.hsalida;
            document.getElementById("hentrada2").value = node.hentrada;
            document.getElementById("hsalida2").value = node.hsalida;
            document.getElementById("hentrada3").value = node.hentrada;
            document.getElementById("hsalida3").value = node.hsalida;
            document.getElementById("hentrada4").value = node.hentrada;
            document.getElementById("hsalida4").value = node.hsalida;
            document.getElementById("hentrada5").value = node.hentrada;
            document.getElementById("hsalida5").value = node.hsalida;
        });
    });
    contador1--;
    }

$query = `Select * from usuario`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");
    

for(var i=0 ; i<rows.length ; i++){
    insert(rows[i].id, rows[i]);
    contador2++;

    var tabla1=document.getElementById("tabla1");
    var tabla2=document.getElementById("tabla2");
    var tabla3=document.getElementById("tabla3");
    var tabla4=document.getElementById("tabla4");

        var newRow = tabla1.insertRow(-1);
        var celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].id);
        celda.appendChild(texto);
            
        var newRow = tabla2.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].usuario);
        celda.appendChild(texto);

        var newRow = tabla3.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].correo);
        celda.appendChild(texto);

        var newRow = tabla4.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].contraseña);
        celda.appendChild(texto);

    
}
});

function guardar(){

    correo = document.getElementById("inpBuscar").value;
    hEntrada1 = document.getElementById("hentrada1").value;
    hSalida1 = document.getElementById("hsalida1").value;
    hEntrada2 = document.getElementById("hentrada2").value;
    hSalida2 = document.getElementById("hsalida2").value;
    hEntrada3 = document.getElementById("hentrada3").value;
    hSalida3 = document.getElementById("hsalida3").value;
    hEntrada4 = document.getElementById("hentrada4").value;
    hSalida4 = document.getElementById("hsalida4").value;
    hEntrada5 = document.getElementById("hentrada5").value;
    hSalida5 = document.getElementById("hsalida5").value;
    nss = document.getElementById("nss").value;
    estudio = document.getElementById("estudios").value;
    cr = document.getElementById("c/r").value;
    ap = document.getElementById("a/p").value;
    puesto = document.getElementById("puesto").value;
    sueldo = document.getElementById("sueldo").value;
    observacion = document.getElementById("observacion").value;

    if(correo=="" || sueldo=="" || hEntrada1=="" || hSalida1=="" || nss=="" || estudio=="" || cr=="" || 
        ap=="" || hEntrada2=="" || hSalida2=="" || hEntrada3=="" || hSalida3=="" || hEntrada4=="" || 
        hSalida4=="" || hEntrada5=="" || hSalida5=="" || puesto==""){
            alert("Llene todos los campos")
        }else{

    $query = `UPDATE usuario SET 
    hentrada='${hEntrada1}', sueldo='${sueldo}', hsalida='${hSalida1}' , nss='${nss}', estudio='${estudio}',
    cr='${cr}', ap='${ap}', observacion='${observacion}', puesto='${puesto}' WHERE correo= '${correo}';`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");
    });
    cancelar();
        }
        //location.href='empleados.html';
    }



function cancelar(){
    document.getElementById("hentrada1").value = "";
    document.getElementById("hsalida1").value = "";
    document.getElementById("hentrada2").value = "";
    document.getElementById("hsalida2").value = "";
    document.getElementById("hentrada3").value = "";
    document.getElementById("hsalida3").value = "";
    document.getElementById("hentrada4").value = "";
    document.getElementById("hsalida4").value = "";
    document.getElementById("hentrada5").value = "";
    document.getElementById("hsalida5").value = "";

    document.getElementById("nss").value = "";
    document.getElementById("estudios").value = "";
    document.getElementById("c/r").value = "";
    document.getElementById("a/p").value = "";
    document.getElementById("observacion").value = "";
    document.getElementById("puesto").value = "";
    document.getElementById("sueldo").value = "";
    document.getElementById("tabla1").innerHTML = "";
    document.getElementById("tabla2").innerHTML = "";
    document.getElementById("tabla3").innerHTML = "";
    document.getElementById("tabla4").innerHTML = "";

    document.getElementById("puesto").disabled = true;
    document.getElementById("sueldo").disabled = true;
    document.getElementById("nss").disabled = true;
    document.getElementById("c/r").disabled = true;
    document.getElementById("a/p").disabled = true;
    document.getElementById("estudios").disabled = true;
    document.getElementById("hentrada1").disabled = true;
    document.getElementById("hsalida1").disabled = true;
    document.getElementById("hentrada2").disabled = true;
    document.getElementById("hsalida2").disabled = true;
    document.getElementById("hentrada3").disabled = true;
    document.getElementById("hsalida3").disabled = true;
    document.getElementById("hentrada4").disabled = true;
    document.getElementById("hsalida4").disabled = true;
    document.getElementById("hentrada5").disabled = true;
    document.getElementById("hsalida5").disabled = true;
    document.getElementById("observacion").disabled = true;

    $query = `Select * from usuario`;

    conexion.query ($query, function (err, rows){
    if (err){
        console.log ("error en el query");
        console.log (err);
        return;
    }
    console.log ("ejecutado correctamente");

    var tabla1=document.getElementById("tabla1");
    var tabla2=document.getElementById("tabla2");
    var tabla3=document.getElementById("tabla3");
    var tabla4=document.getElementById("tabla4");

for(i=0 ; i<rows.length ; i++){
    var tabla1=document.getElementById("tabla1");
    var tabla2=document.getElementById("tabla2");
    var tabla3=document.getElementById("tabla3");
    var tabla4=document.getElementById("tabla4");

        var newRow = tabla1.insertRow(-1);
        var celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].id);
        celda.appendChild(texto);
            
        var newRow = tabla2.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].usuario);
        celda.appendChild(texto);

        var newRow = tabla3.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].correo);
        celda.appendChild(texto);

        var newRow = tabla4.insertRow(-1);
        celda = newRow.insertCell(0)
        var texto = document.createTextNode(rows[i].contraseña);
        celda.appendChild(texto);
}
});
}

function editar(){
    document.getElementById("puesto").disabled = false;
    document.getElementById("sueldo").disabled = false;
    document.getElementById("nss").disabled = false;
    document.getElementById("c/r").disabled = false;
    document.getElementById("a/p").disabled = false;
    document.getElementById("estudios").disabled = false;
    document.getElementById("hentrada1").disabled = false;
    document.getElementById("hsalida1").disabled = false;
    document.getElementById("hentrada2").disabled = false;
    document.getElementById("hsalida2").disabled = false;
    document.getElementById("hentrada3").disabled = false;
    document.getElementById("hsalida3").disabled = false;
    document.getElementById("hentrada4").disabled = false;
    document.getElementById("hsalida4").disabled = false;
    document.getElementById("hentrada5").disabled = false;
    document.getElementById("hsalida5").disabled = false;
    document.getElementById("observacion").disabled = false;
}