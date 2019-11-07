const urlBaseApiEquipamento = "http://localhost:59934/api/equipamento/";
const urlBaseApiAgendamento = "http://localhost:59934/api/agendamento/";
const urlBaseApiLogin = "http://localhost:59934/api/Login/";


function ApiEquipamento() {
    var api = new Object;

    api.Listar = function (filtro, categoria, iniciopag, fimpag, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiEquipamento + "?filtro=" + filtro + "&categoria=" + categoria + "&iniciopag=" + iniciopag + "&fimpag=" + fimpag,
            method: "GET",
            success: function (data) { acaoSucesso(data); },
            error: function (data) { acaoErro(data); }
        })
    }

    api.Consultar = function (Id, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiEquipamento + Id,
            method: "GET",
            success: function (data) { acaoSucesso(data); },
            error: function (data) { acaoErro(data); }
        })
    }

    return api;
}

function ApiAgendamento() {
    var api = new Object;

    api.ConsultarDisponibilidade = function (Dia, HoraRetirada, HoraDevolucao, Id, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiAgendamento + "?dia=" + Dia,// falta terminar sa poha ,
            method: "GET",
            success: function (data) { acaoSucesso(data); },
            error: function (data) { acaoErro(data); }
        })
    }

    api.Incluir = function (dados, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiAgendamento,
            method: "POST",
            contentType: 'application/json', 
            data: JSON.stringify(dados),
            success: function (data) { acaoSucesso(data); },
            error: function (data) { acaoErro(data); }
        })
    }

    return api;
}
function ApiLogin() {
    api.FazerLogin = function(dados,acaoSucesso,acaoErro) {
        $.ajax ({
            url: urlBaseApiLogin,
            method: "POST",
            contentType: 'application/json', 
            data: JSON.stringify(dados),            
            success: function (data) { acaoSucesso(data);},
            error: function (data) {acaoErro(data);}
        })
    }
}