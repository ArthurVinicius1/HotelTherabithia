var nome_usuario = prompt("Olá, Boa tarde. Qual é o seu nome?");
const hospedes = [];
nome_hotel();
acesso();

function nome_hotel() {
  var nome_hotel = prompt(`Por favor ${nome_usuario}, insira o nome do Hotel:`);
  var tratamento_dado_1 =
    nome_hotel.charAt(0).toUpperCase() + nome_hotel.slice(1);
  alert(`O nome do hotel procurado é: ${tratamento_dado_1}`);
}

function acesso() {
  var senha = prompt("Digite sua senha");
  if (senha === "2678") {
    inicio();
  } else {
    alert("Senha inválida");
    acesso();
  }
}

function inicio() {
  var escolha = parseInt(
    prompt(
      "Selecione uma opção\n 1) Reserva de Quartos\n 2) Abastecimento de carros\n 3) Sair\n 4) Eventos"
    )
  );

  switch (escolha) {
    case 1:
      reserva_quartos();
      break;
    case 2:
      abastecerCarro();
      break;
    case 3:
      sair();
      break;
    case 4:
      eventos();
      break;
    default:
      erro();
      break;
  }
}

function reserva_quartos() {
  var valor = parseFloat(prompt("Digite o valor diário:"));

  while (valor !== 55.0) {
    alert("Valor errado!");
    valor = parseFloat(
      prompt("Digite o valor diário que gostaria de gastar (55 max):")
    );
  }

  var dias = parseInt(prompt("Digite o número de dias:"));
  var valorTotal = valor * dias;
  alert(`O valor total em reais é: ${valorTotal}`);
  opcao();
}

// Função para cadastrar um novo hóspede
function cadastro_hospede() {
  const nome = prompt("Digite o nome do hóspede:");
  const idade = prompt("Digite a idade do hóspede:");
  const hospede = { nome, idade };
  alert("Hóspede cadastrado com sucesso!");
  hospedes.push(hospede);
  opcao();
}

// Função para pesquisar um hóspede pelo nome
function pesquisarHospede() {
  const nome = prompt("Digite o nome do hóspede que deseja pesquisar:");
  const resultado = hospedes.filter((hospede) =>
    hospede.nome.toLowerCase().includes(nome.toLowerCase())
  );
  if (resultado.length > 0) {
    alert(
      "Hóspede(s) encontrado(s):\n\n" +
        resultado
          .map((hospede) => `${hospede.nome} - ${hospede.idade} anos`)
          .join("\n")
    );
  } else {
    alert("Nenhum hóspede encontrado com esse nome.");
  }
  inicio();
}

// Função para listar todos os hóspedes cadastrados
function listarHospedes() {
  alert(
    "Lista de hóspedes:\n\n" +
      hospedes
        .map((hospede) => `${hospede.nome} - ${hospede.idade} anos`)
        .join("\n")
  );
  opcao();
}

function eventos() {
  var horasEvento = parseInt(prompt("Digite a quantidade de horas do evento:"));
  var numGarcons = parseInt(
    prompt("Digite o número de garçons para o evento:")
  );
  var custoGarcomPorHora = 10; // Defina o custo de cada garçom por hora
  var custoTotal = horasEvento * custoGarcomPorHora * numGarcons;

  alert(`O custo total do evento será de R$ ${custoTotal.toFixed(2)}`);

  var confirmacao = prompt("Deseja confirmar o evento? (S/N)").toUpperCase();
  if (confirmacao === "S") {
    // Ação a ser tomada caso o evento seja confirmado
    alert("Evento confirmado!");
  } else {
    // Ação a ser tomada caso o evento não seja confirmado
    alert("Evento não confirmado.");
  }
  opcao();
}

function abastecerCarro() {
  const precoAlcool = 4.2;
  const precoGasolina = 5.82;

  const combustivel = prompt(
    "Informe o tipo de combustível (Álcool ou Gasolina):"
  );
  const litros = parseFloat(
    prompt("Informe a quantidade de litros abastecidos:")
  );

  let valorTotal = 0;

  if (combustivel.toLowerCase() === "álcool") {
    valorTotal = precoAlcool * litros;
  } else if (combustivel.toLowerCase() === "gasolina") {
    valorTotal = precoGasolina * litros;
  } else {
    alert("Tipo de combustível inválido.");
    return;
  }

  alert(
    `Você abasteceu ${litros.toFixed(
      2
    )} litros de ${combustivel} por R$ ${valorTotal.toFixed(2)}`
  );
  opcao();
}

function sair() {
  inicio();
}

function opcao() {
  var opcao = parseInt(
    prompt(
      "Escolha uma opção\n 1) Cadastrar hóspede\n 2) Pesquisar hóspede\n 3) Listar hóspedes\n 4) Voltar"
    )
  );

  switch (opcao) {
    case 1:
      cadastro_hospede();
      opcao();
    case 2:
      pesquisarHospede();
      opcao();
    case 3:
      listarHospedes();
      opcao();
    case 4:
      inicio();
      break;
    default:
      erro();
      break;
  }
}

function erro() {
  alert("Opção inválida.");
  inicio();
}
