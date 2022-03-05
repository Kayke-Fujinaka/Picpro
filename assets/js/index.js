const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")
const listaOpcoes1 = document.querySelector(".secaoTransacao__boxOpcao")
const listaOpcoes2 = document.querySelector(".secaoTransacao__boxOpcao2")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE 
function indentificarOpcoes(event) {

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento = event.target

    //VERIFICANDO SE É UM LI 
    if (elemento.tagName == "LI") {

        //RECUPERANDO O ID
        const id = elemento.id
        let divEscolha
        let divEscolha1

        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUÁRIO)
        const secaoEscolha = document.querySelector(`div [data-id="${id}"] `)      
        if (id == 2) {
            divEscolha = document.querySelectorAll(`div .secaoTransacao__boxOpcao`)
        }
        if (id == 4) {
            divEscolha1 = document.querySelectorAll(`div .secaoTransacao__boxOpcao`)
        }

        //REMOCENDO CLASSE MOSTRAR
        removeClasseMostrar()

        console.log(divEscolha)
        console.log(divEscolha1)
        //ADICIONAR UMA CLASSE 
        secaoEscolha.classList.add("mostrar")
        if(id == 2){
            divEscolha.forEach((element)=> element.classList.add("mostrar"))
        }
        if(id == 4){
            divEscolha1.forEach((element)=> element.classList.add("mostrar"))
        }
    }


}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")

    for (let i = 0; i < divs.length; i++) {

        divs[i].classList.remove("mostrar")

    }
}






//vc precisa criar um if para quando vc clicar no id 2
//e fazer o processo novamente com suas divs q n estao aparecendo

//420 x 570