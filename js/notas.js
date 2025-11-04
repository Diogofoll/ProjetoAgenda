var textoNota = document.getElementById("textoNota") 
var checkUrgente = document.getElementById("urgente")
var listaVermelha = document.getElementById("lista-vermelha")
var listaVerde = document.getElementById("lista-verde")

var cores = ["blue", "green", "purple"]
var indiceCor = 0

function adicionarNota() {
    alert("Tentando adicionar a palavra: " + textoNota.value)
    
    if(textoNota.value == "") {
        alert("Digite uma palavra!")
        return
    }
    
    if(textoNota.value.includes(" ")) {
        alert("Digite apenas uma palavra!")
        return
    }

    var novaNota = document.createElement("li")
    novaNota.classList.add("nota")
    novaNota.innerHTML = textoNota.value

    novaNota.style.backgroundColor = cores[indiceCor]
    indiceCor = (indiceCor + 1) % cores.length

    var botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = function() {
        novaNota.remove()
    }

    novaNota.appendChild(botaoRemover)
    
    if(checkUrgente.checked) {
        listaVermelha.appendChild(novaNota)
        checkUrgente.checked = false
    } else {
        listaVerde.appendChild(novaNota)
    }
    
    textoNota.value = ""
}

function apagarTudo() {
    var confirma = confirm("Quer mesmo apagar todas as palavras?")
    if(confirma) {
        listaVermelha.innerHTML = ""
        listaVerde.innerHTML = ""
    }
}
