var urlSite = 'http://127.0.0.1:5500/';
var api = ApiLogin();

$(document).ready(function(){
    $('#Login').focus();
})

$('#formLogin').submit(function (form)
{
    form.preventDefault();
    var dados = {
        usuario: $('#Login').val(),
        senha: $("#Senha").val()
    }

    api.FazerLogin(dados, function(dados){
        Cookies.set('site_autenticado', dados.Token, {expires: 1})
        window.location.href = urlSite + 'equipamentos.html';
    }, function(dados){
        $('.confirm-button').attr('disabled','disabled');
        $('.confirm-button').val('Carregando...');
    }, function(dados){
        $('.confirm-button').removeAttr('disabled');
        $('.confirm-button').val('Próximo'); 
    }, function(dados){
        if (dados.status == 401) {
            window.alert("Usuario e/ou senha invalidos");
        }
        else {
            window.alert("Ocorreu um erro ao efutuar o login");
        }
        $('#Senha').val('') 
    })

    // $.ajax({
    //     url: urlAPI +'Login',
    //     method: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(dados),
    //     success: function(dados){
    //         Cookies.set('site_autenticado',dados.Token,{expires: 1})
    //         window.location.href = urlSite+ 'equipamentos.html';
    //     },
    //     error: function(data){

    //         if(data.status == 401){
    //             window.alert("Usuario e/ou senha invalidos");
    //         }
    //         else {
    //             window.alert("Ocorreu um erro ao efutuar o login");
    //         }
    //         $('#Senha').val('')
    //     },
    //     beforeSend: function(){
    //         $('.confirm-button').attr('disabled','disabled');
    //         $('.confirm-button').val('Carregando...');
    //     },
    //     complete:function(){
            
    //         $('.confirm-button').removeAttr('disabled');
    //         $('.confirm-button').val('Próximo');
    //     }
    // })
})