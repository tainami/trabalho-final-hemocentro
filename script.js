let doadores = []

const cadastrarDoador = () => {
    const nome = prompt("Seu nome:")
    const idade = prompt("Sua idade:")
    const peso = prompt("Seu peso")
    const tipoSanguineo = prompt("Seu tipo sanguíneo:")
    const dataUltimaDoacao = prompt("Data da última doação") 
    const doador = {nome, idade, peso, tipoSanguineo, dataUltimaDoacao}
    doadores.push(doador)
    opcaoMenu()
}

const listarDoadores = () => {
    
    const campoNome = "NOME"
    const campoIdade = "IDADE"
    const campoPeso = "PESO"
    const campoTipoSanguineo = "TIPO SANGUÍNEO"
    const campoUltimaDoacao = "ÚLTIMA DOAÇÃO"

    let doadoresLista = `${campoNome.padEnd(17)}|${campoIdade.padEnd(7)}|${campoPeso.padEnd(6)}|${campoTipoSanguineo.padEnd(16)}|${campoUltimaDoacao.padEnd(14)}`

    for (let i = 0; i < doadores.length; i++) {

        doadoresLista += `\n${doadores[i].nome.padEnd(17)}|${doadores[i].idade.padEnd(7)}|${doadores[i].peso.padEnd(6)}|${doadores[i].tipoSanguineo.padEnd(16)}|${doadores[i].dataUltimaDoacao.padEnd(14)}`

    }
    doadoresLista += "\n-----------------------------------------------------------------"
    console.log(`${doadoresLista}`)
    opcaoMenu()
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

        default:
            break;
    }
}
opcaoMenu()

