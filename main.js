function verificar() {
    var data = new Date() // Obtém a data atual
    var ano = data.getFullYear() // Obtém o ano atual da data
    var fano = document.getElementById('txtano') // Obtém o elemento HTML txtano
    var res = document.getElementById('res')  // Obtém o elemento HTML onde o resultado será exibido
    if  (fano.value.length == 0  || Number(fano.value) > ano) {  // Verifica se o campo de entrada de ano está vazio ou se o valor inserido é maior que o ano atual se for apresentar ERRO
        window.alert('[ERRO] Verifique os dados e teste novamente!')
    } else {
        var fsex = document.getElementsByName("radsex") // Obtém os elementos HTML dos botões de seleção de sexo
        var idade = ano - Number(fano.value) // Calcula a idade com base no ano inserido e o ano atual
        var genero =  ''  // Variável para armazenar o gênero
        var img = document.createElement('img') //criando uma imagem
        img.setAttribute('id', 'foto') //criando uma imagem com id foto, mesma coisa que ir ao HTML e fazer um <img id="foto"> mais pelo js.
        img.classList.add('imagem-persona'); // Adiciona a classe "imagem-persona" à imagem para poder estilizar
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem-bebe.jpg')
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpg')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg')
                // Adulto
            } else {
                img.setAttribute('src', 'homem-senhor.jpg')
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher-bebe.avif')
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpg')
                // Adulta
            } else {
                img.setAttribute('src', 'mulher-senhora.png')
                // Idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Resultado: ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}