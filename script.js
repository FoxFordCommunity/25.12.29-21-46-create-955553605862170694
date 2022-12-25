
$(document).ready(function() {
    $('.Tema').click(function(event){
        $('body, .Header, .Account, .Burger__list').toggleClass('dark');
    });
});

$('.Tema').click(function(){
    if (!$(this).data('status')) {
      $(this).html('DARK');
      $(this).data('status', true);
    }
    else {
      $(this).html('LIGHT');
      $(this).data('status', false);
    }
});

$(document).ready(function() {
    $('.Header__burger').click(function(event){
        $('.Burger__list').toggleClass('active');
    });
});