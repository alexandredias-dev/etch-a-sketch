// script.js
console.log("carregou");

const container = document.querySelector("#container");
let tamanhoAtual = 16;


function randomColor(opacity){
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;
    return `rgba(${red}, ${green}, ${blue})`;
}


function criarGrid(tamanho){
    container.innerHTML = "";
    const tamanhoQuadrado = 960 / tamanho;
    tamanhoAtual = tamanho;
    

    for (let i = 0; i < tamanho * tamanho; i++){
        const quadrado = document.createElement("div");
        quadrado.style.width = tamanhoQuadrado + "px";
        quadrado.style.height = tamanhoQuadrado + "px";
        quadrado.style.border = "1px solid #ccc";
        quadrado.style.boxSizing = "border-box";
        let passadas = 0;

        quadrado.addEventListener("mouseover",function(){
        quadrado.style.backgroundColor = modoRandom ? randomColor() : "black"
        if (passadas < 10) passadas ++;
        const opacidade = passadas / 10;
        if (modoRandom){
            quadrado.style.background = randomColor();
        }else{
            quadrado.style.backgroundColor = `rgba(0, 0, 0, ${opacidade})`;
  }

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

let modoRandom = false;

const btnRandom = document.querySelector("#btn-random");
btnRandom.addEventListener("click", function(){
    modoRandom = !modoRandom;
    btnRandom.textContent = modoRandom ? "Cor Aleatória ✓" : "Cor Aleatória";
})
const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", function(){
    criarGrid(tamanhoAtual);
})


criarGrid(16);