function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    document.getElementById("numero-gerado").innerText = numeroAleatorio;
}