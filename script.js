let doadores = [
    {nome: "José da Silva", idade: "40", peso: "80", tipoSanguineo: "AB-", dataUltimaDoacao: "04/07/2023"},
    {nome: "Maria da Silva", idade: "37", peso: "70", tipoSanguineo: "A+", dataUltimaDoacao: "04/07/2023"},
    {nome: "Luciano", idade: "45", peso: "84", tipoSanguineo: "O+", dataUltimaDoacao: "20/08/2023"}
]

const cabecalhoBusca = (tituloBusca) => {
    return (`
--------------------
${tituloBusca}
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
    `)
}

const cadastrarDoador = () => {
    const nome = prompt("Seu nome e sobrenome:")
    const idade = prompt("Sua idade:")
    const peso = prompt("Seu peso")
    const tipoSanguineo = prompt("Seu tipo sanguíneo:\nAB+\nA+\nB+\nO+\nAB-\nA-\nB-\nO-")
    const dataUltimaDoacao = prompt("Data da última doação\nFormato: (dd/mm/aaaa)")
    const doador = {nome, idade, peso, tipoSanguineo, dataUltimaDoacao}
    doadores.push(doador)
    opcaoMenu()
}

const listarDoadores = () => {
    let doadoresLista = cabecalhoBusca("LISTAGEM DE DOADORES:")

    for (let i = 0; i < doadores.length; i++) {

        doadoresLista += `\n${doadores[i].nome.padEnd(17)}|${doadores[i].idade.padEnd(7)}|${doadores[i].peso.padEnd(6)}|${doadores[i].tipoSanguineo.padEnd(16)}|${doadores[i].dataUltimaDoacao.padEnd(14)}`

    }

    doadoresLista += "\n-----------------------------------------------------------------"
    prompt(doadoresLista)
    opcaoMenu()
}

const listarDoadoresPorTipo = () => {
    let escolhaDoUsuario = prompt("Digite o tipo sanguíneo desejado:\nAB+\nA+\nB+\nO+\nAB-\nA-\nB-\nO-")
    let doadoresLista = cabecalhoBusca("RESULTADO DA BUSCA:")
    let achouTipoSanguineo = false

    for (let i = 0; i < doadores.length; i++) {
        if(doadores[i].tipoSanguineo.toUpperCase() === escolhaDoUsuario.toUpperCase()) {
            doadoresLista += `\n${doadores[i].nome.padEnd(17)}|${doadores[i].idade.padEnd(7)}|${doadores[i].peso.padEnd(6)}|${doadores[i].tipoSanguineo.padEnd(16)}|${doadores[i].dataUltimaDoacao.padEnd(14)}`
            achouTipoSanguineo = true
        }
    }
    if (!achouTipoSanguineo) {
        doadoresLista = "Tipo sanguíneo indisponível"
    }

    doadoresLista += "\n-----------------------------------------------------------------"
    prompt(doadoresLista)
    opcaoMenu()
}

const buscarDoadoresPorData = () => {
    let escolhaDoUsuario = prompt("Digite a data desejada (dd/mm/aaaa)")
    let doadoresLista = cabecalhoBusca("RESULTADO DA BUSCA:")
    let achouPeriodo = false

    for (let i = 0; i < doadores.length; i++) {
        if(doadores[i].dataUltimaDoacao < escolhaDoUsuario) {
            doadoresLista += `\n${doadores[i].nome.padEnd(17)}|${doadores[i].idade.padEnd(7)}|${doadores[i].peso.padEnd(6)}|${doadores[i].tipoSanguineo.padEnd(16)}|${doadores[i].dataUltimaDoacao.padEnd(14)}`
            achouPeriodo = true
        } 
    }
    if (!achouPeriodo) {
        doadoresLista = "Período indisponível"
    }

    doadoresLista += "\n-----------------------------------------------------------------"
    prompt(doadoresLista)
    opcaoMenu()
}

const sair = () => {
    console.log("Programa encerrado!")
}

const opcaoMenu = () => {
    const menu = Number(prompt(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:
    `))

    switch (menu) {
        case 1:
            cadastrarDoador()
            break;

        case 2:
            listarDoadores()
            break;

        case 3:
            listarDoadoresPorTipo()
            break;

        case 4:
            buscarDoadoresPorData()
            break;

        case 5:
            sair()
            break;

        default:
            alert("Opção inválida!")
            opcaoMenu()
            break;
    }
}

opcaoMenu() 
