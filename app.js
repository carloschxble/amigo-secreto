// Array para almacenar los nombres de los amigos
let amigos = []

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input con el id "amigo"
    let nombreAmigo = document.getElementById("amigo").value;

    // Verificar que el input no este vacío
    if (nombreAmigo.trim() !== "") {
        // Agregar el nombre al array de amigos
        amigos.push(nombreAmigo);

        // Limpiar el input para poder agregar un nuevo amigo
        document.getElementById("amigo").value = "";

        // Actualizar la lista de amigos en la interfaz de usuario
        mostrarAmigos();
    
    // En caso de que el input este vacío    
    } else {
        // El usuario es alertado de que agrege el nombre de un amigo
        alert("Por favor, inserte un nombre")
    }
}

// Función para mostrar la lista de amigos en la interfaz de usuario
function mostrarAmigos() {
    // Obtener el elemento ul con el id "listaAmigos"
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar el contendio anterior de la lista
    listaAmigos.innerHTML = "";

    // Iterar sobre el array de amigos y crear elementos li para cada nombre
    amigos.forEach(amigo => {
        // Crear un nuevo elemento li
        let elementoAmigo = document.createElement("li");

        // Establecer el texto del elemento li con el nombre del amigo
        elementoAmigo.textContent = amigo;

        // Agregar el elemento li a la lista ul
        listaAmigos.appendChild(elementoAmigo);
    });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre del amigo secreto
        let amigoSecreto = amigos[indiceAleatorio];

        // Mostrar el resultado en la interfaz
        mostrarResultado(amigoSecreto);
    } else {
        // Mostrar un mensaje si no hay amigos en la lista
        alert("Agrega amigos a la lista antes de sortear.")
    }
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia resultados anteriores

    let resultadoAmigo = document.createElement("li");
    resultadoAmigo.textContent = "Tu amigo secreto es: " + amigoSecreto;
    resultado.appendChild(resultadoAmigo);
}