//É dessa forma que passamos uma mensagem para a pessoa que iniciou o jogo. O ; serve para identificar que o comando terminou.
alert('Boas-vindas ao jogo do Número Secreto');

//Para armazenar uma informação na programação, utilizamos um conceito chamado de variáveis. 
//Em cada linguagem de programação, há uma forma diferente de criar uma variável. No Javascript, para criarmos variáveis e armazenar valores nelas, usamos a palavra-chave let.
//Quando definimos uma variável para receber um número, não utilizamos aspas, inserimos o número diretamente.
//Dessa forma, o JS interpreta esse 29 como um número e não como texto.
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log('numeroSecreto');

//Usaremos um comando que possa fazer uma pergunta, ou pedir para a pessoa chutar um número, usaremos o comando prompt!
// prompt('Escolha um número entre 1 e 30!')

//Precisamos armazenar o valor inserido dentro do prompt para então compararmos com o número secreto. E por fim utilizaremos uma estrutura condicional. O if e o else.
//Abaixo estamos armazenando o número inserido:
// let chute = prompt('Escolha um número entre 1 e 30!');

let chute;
let tentativas = 1;

//Abaixo estamos inserindo uma estrutura de repetição(while), é uma forma de dizer "Execute essas instruções apenas enquanto uma determinada condição permanecer verdadeira". 
//Esse conceito é conhecido como loop ou, em inglês, while. A estrutura do while é bastante similar à do if. Todo código anterior ficou inserido dentro do while.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    //Abaixo estamos inserindo a estrutura condicional e verificando se o número inserido dentro da variável chute é igual ao numeroSecreto, estamos comparando-os(==).
    //Caso a condição que inserimos for verdadeira, irá entrar dentro da chaves e executar o comando.
    if (chute == numeroSecreto) {
        //Este código abaixo server para parar o laço de repetição.
        break;
    }

    //E caso a condição que inserirmos for falsa, iremos realizar o tratamento aqui dentro desta estrutura.
    // código omitido
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //Agora faremos um incremento, pois sempre que a pessoa errar irá somar ao número de tentativaas.
        //Incrementar é um termo comum na programação, que se refere a adicionar 1 a uma variável, e armazenar o valor na própria variável.
        tentativa++
    }
}

//Isto é um operador ternário. Onde escrevemos o if e o else de uma forma mais clara, facilitando a leitura do código.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//Agora realizamos a concatenação. Quando queremos juntar duas strings, ou inserir alguma variável para que o valor alocado apareça. 
//Temos também a interpolação e o placeholder.
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// Operador	Nome	        Exemplo     Resultado
// ==          Igual	        A == B	    Verdadeiro se A for igual a B
// !=          Diferente	    A != B	    Verdadeiro se A não for igual a B
// <           Menor que	    A < B       Verdadeiro se A for menor que B
// >           Maior que	    A > B       Verdadeiro se A for maior que B
// <=          Menor ou igual	A <= B	    Verdadeiro se A for menor ou igual a B.
// >=          Maior ou igual	A >= B	    Verdadeiro se A for maior ou igual a B.


//Operadores Lógicos

// Operador	    Nome	        Exemplo	                Resultado
// &&      	    E / AND	        (A > B) && (B == C)	    Verdadeiro se A fo maior que B E B for igual a C
// ǀǀ	        OU / OR	        (A > B) ǀǀ (B == C)	    Verdadeiro se A for maior que B OU B for igual a C
// !	        NEGAÇÃO	        !(A == B)	            Verdadeiro se A NÃO for igual a B