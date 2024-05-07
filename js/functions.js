var name;
var lastname;
var registro;
var page;
console.log("Hola");

function cargar(){
    document.getElementById("name").focus();
    page = document.getElementById("page");
    page.style.visibility = "hidden"
}

function datos(){
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    registro = document.getElementById("registro");
    if(name != "" && lastname != ""){
        registro.style.visibility = "hidden";
        document.getElementById("info").innerText = name+" "+lastname;
        document.getElementById("info2").innerText = name+" "+lastname;
        page.style.visibility = "visible";
        

    }else{
        alert("Ingrese sus datos")
    }  
}
function news(){
    const alertEl = document.querySelector('.alert');
    alertEl.classList.toggle('hide');
}
console.log("Adiós "+name);
