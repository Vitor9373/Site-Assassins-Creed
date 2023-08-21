const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")
const erros = document.querySelector(".erros")
const acertos = document.querySelector(".acertos")


async function main() {
  const requisicao = await fetch("assets/questões.json")
  const quiz = await requisicao.json()
  
  
  let questaoAtual = 0
  let alternativaCorretaAtual
  let npergunta = 1
  
  function carregarAlternativa(numeroDaAlternativa) {
    if(numeroDaAlternativa >= quiz.length){
      pergunta.innerHTML = 'Parabéns! Você terminou.'
      alternativas.innerHTML = ''
      return
    }
    
    let alt = quiz[numeroDaAlternativa]
    alternativaCorretaAtual = alt.correta
    pergunta.innerHTML =npergunta + alt.pergunta

    alternativas.innerHTML = ""
    //quiz[0].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt.alternativas[]}</button>`);
    for (let i = 0; i <= 9 ; i++) {
     alternativas.innerHTML += `<button class="jefferson">${alt.alternativas[i]}</button>`
    }
  }
  
  let erro = 0
  let acerto = 0
  
  alternativas.addEventListener("click", ev => {
    const botao = ev.target.closest("button")
    if (!botao){
      return
    }
    const listaDeFilhos = [...alternativas.children]
    const alternativaCorretaClicada = listaDeFilhos.indexOf(botao)
    if (alternativaCorretaClicada == alternativaCorretaAtual){
      ++acerto
      acertos.innerText = acerto
      console.log(acerto)
      npergunta.innerHTML = ++npergunta
      return carregarAlternativa(++questaoAtual)
    }
    alert("errou!")
    ++erro
    erros.innerText = erro
    
  })

  carregarAlternativa(questaoAtual)
}

main()