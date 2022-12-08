//Pegar todos os elementos do html que vamos interagir//
//Nome, altura, peso, calcular e com a caixa de resultado//
//Pegar pelos ID////getElementById= Vai buscar e pegar o elemento pela id//
//Ctrl + D = Seleciona e muda os dois//
//const nome = é o elemento html//
//. = é para acessar uma propriedade de algo// // Assim, eu vou estar acessando a propriedade do elemento. Exemplo nome//
//!== : isso significa diferente;//
// '' : isso significa vazio;//

const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; //Assim que clicar no calcular, essa mensagem vai aparecer//
    const resultado = document.getElementById('resultado');

 //Fazer a validação se está ou não preenchido// //Aqui ele não quer o elemento html, ele quer um valor. Por isso, o .value vai ser utilizado//
    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1); //ToFixed =serve para arrendondar o número de casas, para que o resultado não apareça como uma dizima periodica// // Vc também escolhe quantas casas é para aparecer depois da vírgula//

        let classificacao = '';
        if (valorIMC < 18.5)  {
            classificacao = 'Abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'Com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'Com obesidade grau I.';
        }else if (valorIMC < 40) {
            classificacao = 'Com obesidade grau II.';
        }else {
            classificacao = 'Com obesidade grau III. Cuidado!!!';
        }


        resultado.textContent = `${nome} ,seu IMC é ${valorIMC} e você está abaixo do peso.`;

    }else {
       resultado.textContent = 'Preencha todos os campos!!';
    }
}


calcular.addEventListener('click', imc);