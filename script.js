// script.js
console.log("carregou");

const container = document.querySelector("#container");

function criarGrid(tamanho){
    container.innerHTML = "";
    const tamanhoQuadrado = 960 / tamanho;

    for (let i = 0; i < tamanho * tamanho; i++){
        const quadrado = document.createElement("div");
        quadrado.style.width = tamanhoQuadrado + "px";
        quadrado.style.height = tamanhoQuadrado + "px";
        quadrado.style.border = "1px solid #ccc";
        quadrado.style.boxSizing = "border-box";
        quadrado.addEventListener("mouseover",function(){
            quadrado.style.backgroundColor = "black"
        })

        container.appendChild(quadrado);
    } 

}

const botao = document.querySelector("#btn-novo-grid");
botao.addEventListener("click",function(){
    let tamanho = prompt("Quantos quadrados por lado? (máx 100)")
    tamanho = parseInt(tamanho);

    if (isNaN(tamanho) || tamanho<1){
        alert("Digite um número válido.")
        return;
    }
    if (tamanho > 100) tamanho = 100;
    criarGrid(tamanho) 
})


criarGrid(16);