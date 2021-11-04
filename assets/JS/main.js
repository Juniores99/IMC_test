//formulario capturado, adicionado um evento no formulario(submit)
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  const inputPeso = evento.target.querySelector('#peso')
  const inputAltura = evento.target.querySelector('#altura')
  //dados dos inputs capturados

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)
  //tentou transformar para numeros. Caso Nan o valor digitado retorna uma mensagem de erro para o usuario
  if (!peso) {
    setResultado('Peso inválido', false)
    return
  }
  if (!altura) {
    setResultado('Altura inválida', false)
    return
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)
  //imc e nivelImc calculados com uma função específica
  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)
})

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso', //array criado para obter valores
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]
  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2] //checamos de trás para frente
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function criaP(className) {
  const p = document.createElement('p') //função para criar parágrafos
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

  const p = criaP()

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg
  resultado.appendChild(p)
}
