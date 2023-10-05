
function clicou(){
    let data = new Date() // pega o ano atual
    let anoAtual = data.getFullYear()
    let idadetxt = document.getElementById('inascimento') // pega o input do ano que nasceu
    let res = document.getElementById('res')
   
    if (idadetxt.value.length == 0 || Number(idadetxt.value) > anoAtual){
        alert('Verifique se os dados estão corretos')
    }else{
         let nascido = Number(idadetxt.value)
         let idade = anoAtual - nascido //calculo do ano atual - nascimento

         let sexo = document.getElementsByName('sexo')
         let img = document.createElement('img')
         img.setAttribute('id' , 'foto')

         let genero = ''
         if (sexo[0].checked){
            genero = 'um Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
                genero = 'um bebe'
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
                genero = 'um homem jovem'
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
                genero = 'um homem adulto'
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
                genero = 'um senhor'
            }
         }else if(sexo[1].checked){
            genero = 'uma Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
                genero = 'uma bebê'
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
                genero = 'uma jovem'
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
                genero = 'uma mulher adulta'
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
                genero = 'uma senhora'
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos`
         res.append(img)
    }
}