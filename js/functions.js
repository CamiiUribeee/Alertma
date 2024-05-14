var name;
var date;
var number;
var genero;
var age;
var lastname;

var registro;
var page;
console.log("Hola");

function cargar(){
    document.getElementById("name").focus();
    page = document.getElementById("page");
    page.style.display = "none";
}
function datos(){
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    date = document.getElementById("date").value;
    number = document.getElementById("number").value;
    genero = document.getElementById("gender").value;
    age = document.getElementById("age").value;


    registro = document.getElementById("registro");

    if(name != "" && lastname != "" && date != "" && number != "" && genero != "" && age != ""){
        registro.style.visibility = "hidden";

        document.getElementById("info").innerText = name;
        document.getElementById("info2").innerText = "Bienvenid@ " + name;
        document.getElementById("names").innerText += name
        document.getElementById("lastnames").innerText += lastname;
        document.getElementById("dates").innerText += date;
        document.getElementById("cel").innerText += number;
        document.getElementById("genero").innerText += genero;
        document.getElementById("edad").innerHTML += age;


        page.style.display = "flex";
        

    }else{
        Swal.fire("Completa todos los campos");
    }
    
    
}
function news(){
    const alertEl = document.querySelector('.alert');
    alertEl.classList.toggle('hide');
}
console.log("Adiós "+name);
