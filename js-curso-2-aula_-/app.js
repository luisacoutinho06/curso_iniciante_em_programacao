//O HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar o conteúdo de uma página web.
//Essa linguagem usa tags para definir a hierarquia dos elementos de uma página.Originado em 1991 por Tim Berners-Lee, 
//o HTML é como o esqueleto de uma página web: trabalha organizando o conteúdo, como títulos, parágrafos, imagens e links,
//para que tudo fique bem arrumado e no lugar certo.


//O CSS (Cascading Style Sheets), criado em 1995, é destacado como uma linguagem de estilos.
//Ele separa a apresentação da estrutura: 
//é responsável pela apresentação e estilização dos elementos, pois permite controlar cores, fontes, layouts e outros aspectos visuais.
//É como vestir a estrutura HTML com roupas elegantes para que a página pareça exatamente como você deseja.

//O JavaScript, por sua vez, é a única linguagem de programação das três. É responsável por adicionar interatividade e dinamismo às páginas.
//Possibilita a criação de funcionalidades como animações, validações de formulários e atualizações de conteúdo em tempo real.

//Resumo: o HTML estrutura o conteúdo, o CSS define o estilo e o layout, e o JavaScript adiciona funcionalidades dinâmicas.


// Tecnologia	    Função	                                                 Exemplos de Uso
// HTML	            Linguagem de marcação para estruturar conteúdo.	         Titulo, parágrafo
// CSS	            Linguagem de estilos para apresentação e estilização.	 p { color: blue; } div { background: #f2f2f2; }
// JavaScript (JS)	Linguagem de programação para interatividade.	         function inicarJogo() { ... }



//Inicialmente será feito um código onde vamos manipular o arquivo de HTML. 
//Para alterar o conteúdo do HTML com o JS, precisamos capturar o fragmento e selecionar o h1.
//Conseguimos fazer isso usando uma palavra reservada chamada document, porém já que o HTML possui muitos documentos vamos usar o:
//.querySelector() -- É importante que o S esteja em maiúsculo, caso contrário não vai funcionar. Trata-se de um case-sensitive. 
//Significa que caracteres em caixa alta e em caixa baixa são tratados de modo diferente.
//E dentro dos parênteses, passamos entre aspas simples o nome da propriedade(tag) a ser selecionada.
// let titulo = document.querySelector('h1');

//Agora é inserir um texto dentro desta tag. Para isso pegamos a variável titulo e chamamos o .innerHTML para atribuir o valor a variável.
// titulo.innerHTML = 'Jogo do número secreto';

//Vamos inserir o paragráfo para que façamos uma pergunta.
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

//Sempre que temos padrão de código ou um código muito parecido, onde apenas alguns detalhes são modificados, 
//podemos isolar esse comportamento em uma função. Assim, evitamos a repetição de código com funções.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femasle', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//No lugar de name, podemos nomear a função da forma que achamos mais adequada.Vamos chamá-la de gerarNumeroAleatorio.
//Esta função fará com que a máquina gere um número aleatório sem a necessidade de receber qualquer informação prévia.
//Por isso, podemos apagar params que está entre os parênteses, deixando-os vazios.
function gerarNumeroAleatorio() {
    // A função Math.random() retorna um valor decimal, mas queremos um número inteiro. 
    //Por isso, colocamos a expressão matemática entre parênteses e utilizamos parseInt() para converter o resultado em um número inteiro.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    //Inserimos dentro de uma variável para guardar o número aleatório, porque já estamos retornando ele diretamente.

    if (quantidadeDeElementosNalista == numeroLimite) {
        listaDeNumerosSorteados = [];
        }
    //O método includes() que verifica se o elemento está na lista. Se estiver, retorna true e, se não estiver, retorna false.
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        //Se o número já foi sorteado fazemos algo chamado recursão, ou seja, chamaremos a própria função "gerarNumeroAleatorio()" novamente
        //gerando um novo número aleatório.
        return gerarNumeroAleatorio();
    }

    //Agora tratar o caso do else, em que o elemento não está na lista. 
    else {
        //Para adicionarmos algo na lista com JS, utilizaremos o método "push()". Sendo assim, dentro do "else" e antes do "return",
        //escreveremos "listaDeNumerosSorteados.push()". Dentro dos parênteses do método "push()", passaremos o "numeroEscolhido", que é a
        //informação que queremos adicionar à lista.
        listaDeNumerosSorteados.push(numeroEscolhido);

        //Se não está na lista, queremos retornar o numeroEscolhido, e para isso usaremos o return:
        return numeroEscolhido;
    }
}
//O objetivo agora será criar uma lista para os números secretos que já foram sorteados, para não os sortear novamente.
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
//Agora será necessário guardar o valor do número aleatório em algum lugar para posteriormente fazer sua vericação.
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//Após passarmos o nome da função no onclick dentro do arquivo HTML, criaremos aqui o que será executado no momento em que clicarmos no botão.
//Uma função, pensamos em um trecho de código que executa uma ação ou tem alguma responsabilidade.
function verificarChute() {
    //Quando temos um input e queremos somente o valor inserido, usamos o value.
    let chute = document.querySelector('input').value;

    //Em function verificarChute(), abaixo de let chute, escrevemos if(). Se o chute for igual ao número secreto, 
    //isso significa que acertamos. Então, nos parênteses passamos chute == numeroSecreto e adicionamos chaves.
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativas = `Isso ai! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        //Ao pegarmos o id do botão(que faz com que ele seja único), iremos remover o atributo que faz com que o botão seja desativado.
        //Nesse caso irá funcionar se usarmos o removeAttribute. Existem várias funções, mas essa é a que queremos, remover o atributo.
        // Agora, vamos testar. No jogo, chutamos o número "5" e a mensagem "Você descobriu o número secreto com 1 tentativa!" aparece. 
        //Logo em seguida, note que o botão "Novo jogo" é habilitado.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    //Porque usamos == e não =? Sempre que usamos =, queremos atribuir um valor. Quando usamos ==, queremos comparar um valor.
    // console.log(chute == numeroSe    creto);
    //Após verificarmos no console, veremos que aparecerá ou "true" ou "false". O tipo booleano é um nome muito comum para outras linguagens
    //esperamos que esse valor será verdadeiro ou falso.
    //E além deste tipo temos a string(texto), o tipo number(número), e agora o tipo boolean(verdadeiro ou falso).
}
//Analisando nosso código, percebemos que, quando acertamos o chute, deixamos o número exibindo na tela. 
//Mas, quando erramos, é melhor deixarmos o campo de texto limpo. Então criaremos uma função para isso.
//Strings são sempre textos entre aspas. Como não definimos nenhum texto, o campo deve ficar vazio.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//As funções desempenham um papel central na programação e no desenvolvimento de software,
//permitindo encapsular blocos de código reutilizáveis e executáveis. Elas podem ser definidas para executar tarefas específicas,
//desde cálculos simples até manipulação complexa de dados.
//As funções em JavaScript podem ter ou não parâmetros, bem como retornar ou não valores.

// Tipo de Função           	    Exemplo de Código	                        Uso
// Sem retorno e sem parâmetro	    function saudacao() { ... }	                Execução de bloco de código simples.
// Sem retorno e com parâmetro	    function cumprimentar(nome) { ... }	        Execução de bloco de código com argumentos.
// Com retorno e sem parâmetro	    function gerarNumeroAleatorio() { ... }	    Cálculo e retorno de um valor específico.
// Com retorno e com parâmetro	    function somar(a, b) { ... }	            Cálculo e retorno baseado em argumentos.
// Função anônima	                let saudacao = function() { ... };	        Definição de função sem nome localmente.
// Arrow function	                let quadrado = x => x * x;	                Definição concisa de funções curtas.


//Criaremos a função reiniciarJogo(), que não receberá nenhum parâmetro. Vamos executar essa função quando o botão for clicado, 
//diferente de como geralmente usamos funções no JavaScript, aqui não invocamos a função.
//Ao iniciar o jogo queremos que um novo número secreto seja sorteado. 
//Então, adicionamos chaves e dentro passamos numeroSecreto igual à gerarNumeroAleatorio()

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Criamos a função exibirMensagemInicial(). A única responsabilidade dessa função será exibir as mensagens iniciais.
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}
exibirMensagemInicial();

//A documentação do JS diz que o objeto Array é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
// var frutas = ["Maçã", "Banana"];

// console.log(frutas.length);

//Foi utilizado o var para declarar uma variável, mas é semelhante ao let. Então seria como "let frutas=". Depois temos uma estrutura diferente
//onde utilizamos colchetes "[]". Isso não é exclusivo do JS, a maioria das linguagens de programação utiliza colchetes para se tratar de lista
//Nessa lista de frutas, o primeiro elemento da lista sempre terá o índice zero, e para acessarmos qualquer elemento dessa lista, utilizamos
// seus respectivos índices.
// var primeiro = frutas[0];

//Para verificarmos quantos elementos temos em uma lista, podemos utilizar "nomeDaLista.length". Nesse caso, codamos "numeros.length".
//O método "length" sempre retorna a quantidade de elementos que temos na lista.
// frutas[frutas.length - 1]

