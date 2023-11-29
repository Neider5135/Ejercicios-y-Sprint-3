//Aplicación 1
let urlParams = new URLSearchParams(window.location.search);
let peso = parseInt(urlParams.get("Peso"));
let estatura =
  (parseInt(urlParams.get("Estatura")) / 100) *
  (parseInt(urlParams.get("Estatura")) / 100);
resultado = peso / estatura;
Resultado = document.getElementById("resultado");
Peso = document.getElementById("peso");
Estatura = document.getElementById("estatura");
if (!isNaN(resultado)) {
  Resultado.placeholder = resultado;
  Peso.placeholder = peso;
  Estatura.placeholder = urlParams.get("Estatura");
}

//Aplicación 2
let cop = document.getElementById("cop");
let usd = document.getElementById("usd");

cop.addEventListener("keyup", conversorE);
usd.addEventListener("keyup", conversorE);

function conversorE(evento) {
  if (evento.target.classList.contains("peso")) {
    resultado = evento.target.value * 0.00025;
    usd.value = resultado;
  } else if (evento.target.classList.contains("usd")) {
    resultado = evento.target.value * 4004.73;
    cop.value = resultado;
  }
}

//Aplicación 3
let idGeneral = 4;
let notas = [
    {
        _id: 0,
        titulo: "Nota 1",
        texto: "bla bla bla"
    },
    {
        _id: 1,
        titulo: "Nota 2",
        texto: "bla bla bla"
    },
    {
        _id: 2,
        titulo: "Nota 3",
        texto: "bla bla bla"
    },
    {
        _id: 3,
        titulo: "Nota 4",
        texto: "bla bla bla"
    }

];
let carrusel = document.getElementById("carruselPrincipal");

pintarTarjetas(notas, carrusel);

document.getElementById("crear").addEventListener("click", crearNota)

function crearNota() {
  titulo = document.getElementById("titulo").value;
  texto = document.getElementById("texto").value;
  if (titulo == "" || texto == "") {
    // alert(
    //   "Debes rellenar el título y escribir algo en tu nota para poderla guardar"
    // );
  } else {
    notas.push({ _id: idGeneral, titulo: titulo, texto: texto });
    idGeneral++;
    pintarTarjetas(notas, carrusel)
  }
}

function pintarTarjetas(arreglo, dondePintar) {
    dondePintar.innerHTML = ""
  for (let i = 0; i < arreglo.length; i += 4) {
    let carruselItem = document.createElement("div");
    carruselItem.classList.add("carouselItem");
    if (i < 1) {
      carruselItem.classList.add("active");
    }
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    for (let j = i; j < i + 4; j++) {
      if (arreglo[j] != undefined) {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card1">
                <div class="tituloCard">${arreglo[j].titulo}</div>
                <div class="textoCard">${arreglo[j].texto}</div>
                <button class="borrarCarrusel" id="borrarCarrusel">Borrar</button>
            </div>
            `;
        contenedor.appendChild(card);
      }
    }
    carruselItem.appendChild(contenedor);
    dondePintar.appendChild(carruselItem);
  }
}
