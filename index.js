let resultado = document.querySelector('#resultado')
let date = parseInt.document.querySelector('#data')
let name = document.querySelector('#nome')

function calculonadador() {
    if (data.value != '') {
        let idade = document.getElementById('data').value
        if (idade >= 5 & idade <= 7) {
            resultado.innerHTML = 'Categoria na qual meu atleta se classifica. Infantil (A) para 5 a 7 anos'
        } else if (idade <= 11) {
            resultado.innerHTML = 'Categoria na qual meu atleta se classifica. Infantil (b) para 8 a 11 anos'
        } else if (idade <= 13) {
            resultado.innerHTML = 'ategoria na qual meu atleta se classifica. Juvenil A para 12 a 13 anos'
        } else if (idade <= 17) {
            resultado.innerHTML = 'Categoria na qual meu atleta se classifica. Juvenil B para 14 a 17 anos'
        } else if (idade <= 60) {
            resultado.innerHTML = 'Categoria na qual meu atleta se classifica. Adulto para 18 anos a 60 anos'
        } else if (idade <= 100) {
            resultado.innerHTML = 'Categoria na qual meu atleta se classifica. Idoso Acima de 60 Anos'
        }
    }
    else {
        alert('Preencha os campos')
        limpar()
    }
}
function limpar() {
    document.getElementById('data').value = ""
    document.getElementById('nome').value = ""
    document.getElementById('resultado').innerHTML = ""
}
