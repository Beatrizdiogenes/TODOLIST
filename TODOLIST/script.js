const nome = document.querySelector("#nome"); 
const formulario = document.querySelector("#formulario"); 
const resultado = document.querySelector("#resultado"); 


  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const card = document.createElement("div");
    card.className = "card";

    if (nome.value.trim() === '') {
      alert('INVALID, TRY AGAIN.');
      return; 
    };

    const novo_nome = document.createElement("h2");
    novo_nome.textContent = nome.value;

    const botao_excluir = document.createElement("img");
    botao_excluir.src = "https://cdn-icons-png.flaticon.com/512/5016/5016735.png";
    botao_excluir.className = "botao2";

    botao_excluir.addEventListener("click", () => {
      resultado.removeChild(card);
    });

    const botao_check = document.createElement("img");
    botao_check.src = "https://cdn-icons-png.flaticon.com/512/10828/10828522.png";
    botao_check.className = "botao3";

    botao_check.addEventListener("click", () => {

      if (novo_nome.style.textDecoration === "line-through") {
        novo_nome.style.textDecoration = "none";
        card.style.backgroundColor = "#e6e0c4";
        
      } else {
        novo_nome.style.textDecoration = "line-through";
        card.style.backgroundColor = "#774854";
      }
    });
    
    card.append(novo_nome, botao_excluir, botao_check); 
    resultado.appendChild(card);

    formulario.reset();
    nome.focus();

}); 
