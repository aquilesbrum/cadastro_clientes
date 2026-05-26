// Busca clientes no localStorage
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Controla edição
let editando = null;

// Função salvar
function salvar(){

    // Captura valores dos inputs
    const nome = document.getElementById("nome").value;

    const cpf = document.getElementById("cpf").value;

    const rg = document.getElementById("rg").value;

    const dataNascimento = document.getElementById("dataNascimento").value;

    const telefone = document.getElementById("telefone").value;

    const whatsapp = document.getElementById("whatsapp").value;

    const email = document.getElementById("email").value;

    const logradouro = document.getElementById("logradouro").value;

    const numero = document.getElementById("numero").value;

    const complemento = document.getElementById("complemento").value;

    const bairro = document.getElementById("bairro").value;

    const cidade = document.getElementById("cidade").value;

    const uf = document.getElementById("uf").value;

    const cep = document.getElementById("cep").value;

    // Validação simples
    if(nome === "" || cpf === ""){

        alert("Preencha os campos obrigatórios");

        return;
    }

    // Verifica edição
    if(editando !== null){

        clientes[editando] = {

            id: clientes[editando].id,

            nome,
            cpf,
            rg,
            dataNascimento,
            telefone,
            whatsapp,
            email,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep
        };

        editando = null;

    }else{

        // Cria objeto cliente
        const cliente = {

            id: Date.now(),

            nome,
            cpf,
            rg,
            dataNascimento,
            telefone,
            whatsapp,
            email,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep
        };

        clientes.push(cliente);
    }

    // Salva no localStorage
    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Limpa campos
    limparCampos();

    // Atualiza tabela
    listar();
}

// Função listar
function listar(){

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

    clientes.forEach((cliente, indice) => {

        tabela.innerHTML += `
            <tr>

                <td>${cliente.id}</td>

                <td>${cliente.nome}</td>

                <td>${cliente.whatsapp}</td>

                <td>${cliente.bairro}</td>

                <td>${cliente.cidade}</td>

                <td>${cliente.uf}</td>

                <td>

                    <button onclick="editar(${indice})">
                        Editar
                    </button>

                    <button onclick="excluir(${indice})">
                        Excluir
                    </button>

                </td>

            </tr>
        `;
    });
}

// Função editar
function editar(indice){

    const cliente = clientes[indice];

    document.getElementById("nome").value = cliente.nome;

    document.getElementById("cpf").value = cliente.cpf;

    document.getElementById("rg").value = cliente.rg;

    document.getElementById("dataNascimento").value = cliente.dataNascimento;

    document.getElementById("telefone").value = cliente.telefone;

    document.getElementById("whatsapp").value = cliente.whatsapp;

    document.getElementById("email").value = cliente.email;

    document.getElementById("logradouro").value = cliente.logradouro;

    document.getElementById("numero").value = cliente.numero;

    document.getElementById("complemento").value = cliente.complemento;

    document.getElementById("bairro").value = cliente.bairro;

    document.getElementById("cidade").value = cliente.cidade;

    document.getElementById("uf").value = cliente.uf;

    document.getElementById("cep").value = cliente.cep;

    editando = indice;
}

// Função excluir
function excluir(indice){

    const confirmar = confirm("Deseja excluir?");

    if(confirmar){

        clientes.splice(indice, 1);

        localStorage.setItem("clientes", JSON.stringify(clientes));

        listar();
    }
}

// Limpa inputs
function limparCampos(){

    document.getElementById("nome").value = "";

    document.getElementById("cpf").value = "";

    document.getElementById("rg").value = "";

    document.getElementById("dataNascimento").value = "";

    document.getElementById("telefone").value = "";

    document.getElementById("whatsapp").value = "";

    document.getElementById("email").value = "";

    document.getElementById("logradouro").value = "";

    document.getElementById("numero").value = "";

    document.getElementById("complemento").value = "";

    document.getElementById("bairro").value = "";

    document.getElementById("cidade").value = "";

    document.getElementById("uf").value = "";

    document.getElementById("cep").value = "";
}

// Lista dados ao abrir
listar();