function verificar() {
    var data = new Date(); //guarda a data atual
    var ano = data.getFullYear(); //guarda o ano atual em uma variável
    var fAno = document.getElementById("txtano"); //pega o ano digitado

    var res = document.getElementById("res");

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert("Algo deu errado por aqui... Verifique os dados e tente novamente.");
    }else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement("img");
        img.setAttribute('id', 'foto') // cria o elemento img com id-foto

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute("src", "bebe__homem.png")
            }else if( idade < 21) {
                //jovem
                img.setAttribute("src", "jovem__homem.jpg")
            }else if (idade < 50) {
                //adulto
                img.setAttribute("src", "homem__adulto.jpg")
            }else {
                //idoso
                img.setAttribute("src", "homem__maduro.jpg")
            }
            

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute("src", "bebe_mulher.png")
            }else if( idade < 21) {
                //jovem
                img.setAttribute("src", "jovem__mulher.jpg")
            }else if (idade < 50) {
                //adulto
                img.setAttribute("src", "mulher__adulta.jpg")
            }else {
                //idoso
                img.setAttribute("src", "mulher__madura.jpg")
            }
        }
        
        res.innerHTML = `Gênero ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
        
    }



}   