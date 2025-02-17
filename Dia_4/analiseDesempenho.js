const equipe = [
    { nome: "Lucas" },
    { nome: "Lara" },
    { nome: "Pedro" },
    { nome: "Carlos" },
    { nome: "Felipe" }
  ]
  
equipe.forEach(membro => {
    const numTarefas = Math.floor(Math.random() * 6) + 5
    membro.tarefas = []
    for (let i = 0; i < numTarefas; i++) {
      membro.tarefas.push(Math.floor(Math.random() * 11))
    }
  })

  equipe.forEach(membro => {
    let somaPonderada = 0
    let pesoTotal = 0
    membro.tarefas.forEach((pontuacao, indice) => {
      const peso = (indice % 2 === 0) ? 2 : 1
      somaPonderada += pontuacao * peso;
      pesoTotal += peso;
    });
    let media = somaPonderada / pesoTotal
    if (media > 8) {
      media += 2
    }
    membro.media = media
  })
  
  let melhor = equipe[0]
  let pior = equipe[0]
  
  equipe.forEach(membro => {
    if (membro.media > melhor.media) {
      melhor = membro;
    }
    if (membro.media < pior.media) {
      pior = membro;
    }
  });
  
  console.log("Desempenho da equipe:")
  equipe.forEach(membro => {
    console.log(`Nome: ${membro.nome} - Média: ${membro.media.toFixed(2)}`)
  })
  
  console.log(`\nMelhor desempenho: ${melhor.nome} com média ${melhor.media.toFixed(2)}`)
  console.log(`Pior desempenho: ${pior.nome} com média ${pior.media.toFixed(2)}`)
  