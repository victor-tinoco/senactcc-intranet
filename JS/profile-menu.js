$(function() {
    var menuContainer = $('.dropd-profile');
    var menuDropContainer = $('.menu-drop')

    var menu =  '<div class="circleProfile d-flex justify-content-center align-items-center">' +
                    '<i class="fas fa-user-circle"></i>' +
                '</div>';
    menuContainer.html(menu);

    var menuDrop = '<a href="carteira.html" class="d-block" class="link-drop">Carteira de Agendamentos</a>' +
    '<a href="index.html" class="d-block" class="link-drop">Sair</a>';
    menuDropContainer.html(menuDrop);

    var circleProfile = $('.circleProfile')
    circleProfile.click(function(){
        if (menuDropContainer.hasClass('d-none'))
            menuDropContainer.removeClass('d-none');
        else
            menuDropContainer.addClass('d-none');
            
    })
})