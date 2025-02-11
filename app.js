// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let yaSorteado = false;

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });

    document.getElementById("listaAmigos").style.display = amigos.length > 0 ? "block" : "none";
}

function sortearAmigo() {
    if (yaSorteado) {
        alert("Ya se ha sorteado un amigo. Presiona 'Reiniciar' para hacer otro sorteo.");
        return;
    }

    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indiceAleatorio];

    // Ocultar la lista y mostrar solo el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "Tu amigo sorteado es: " + elegido;

    // Deshabilitar el botón para evitar múltiples sorteos
    yaSorteado = true;
    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-draw").style.display = "none";  // Ocultar el botón de sorteo

    // Mostrar el botón "Reiniciar"
    document.getElementById("reiniciarBtn").style.display = "inline-block";
}

// Función para reiniciar la página y volver a empezar
function reiniciarPagina() {
    amigos = [];
    yaSorteado = false;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("amigo").value = "";
    document.querySelector(".button-draw").disabled = false;
    
    // Mostrar el botón de sorteo nuevamente
    document.querySelector(".button-draw").style.display = "inline-block";
    
    // Ocultar el botón "Reiniciar" nuevamente
    document.getElementById("reiniciarBtn").style.display = "none";
}
