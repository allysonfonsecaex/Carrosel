 // Captura o botão "proximo"
let btnProximo = document.getElementById("proximo");

// Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");

// Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem");

// Cria o album e guarda as fotos
let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
];

// Define a posição inicial da fotografia do album
let foto = 0;

// Exibe a primeira fotografia
Quadroimagem.src = album[foto];

// Quando o botão próximo for clicado
btnProximo.addEventListener("click", mostrarProximo);

// Quando o botão anterior for clicado
btnAnterior.addEventListener("click", mostrarAnterior);

// Função responsável por mostrar a proxima fotografia
function mostrarProximo() {
    // Avança uma posição do album
    foto = foto + 1;

    // Verifica se passou da última fotografia
    if (foto >= album.length) {
        // Volta para a posição inicial
        foto = 0;
    }

    Quadroimagem.src = album[foto];
}

// Função responsável por mostrar a fotografia anterior
function mostrarAnterior() {
    // Retrocede uma posição do album
    foto = foto - 1;

    // Verifica se chegou antes da primeira fotografia
    if (foto < 0) {
        foto = album.length - 1;
    }

    Quadroimagem.src = album[foto];
}