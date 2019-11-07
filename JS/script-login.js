var urlAPI = 'http://localhost:59934/api/';
var urlSite = 'http://127.0.0.1:5500/';
$('#formLogin').submit(function (form)
{
    form.preventDefault();
    var dados = {
        usuario: $('#Login').val(),
        senha: $("#Senha").val()
    }

    $.ajax({
        url: urlAPI +'Login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dados),
        success: function(dados){
            Cookies.set('site_autenticado',dados.Token,{expires: 1})
            window.location.href = urlSite+ 'equipamentos.html';
        },
        error: function(data){
            if(data.status == 401){
                window.alert("Usuario e/ou senha invalidos");
            }
            else {
                window.alert("Ocorreu um erro ao efutuar o login");
            }
        },
        beforeSend: function(){
            $('.confirm-button').attr('disabled','disabled');
            $('.confirm-button').val('Carregando...');
        },
        complete:function(){
            
            $('.confirm-button').removeAttr('disabled');
            $('.confirm-button').val('Próximo');
        }
    })
})