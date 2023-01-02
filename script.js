
$(document).ready(function() {
    $('.Tema').click(function(event){
        $('body, .Header, .Account, .Burger__list, .Tema').toggleClass('dark');
    });
});

const toggles = document.querySelectorAll('.Tema');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const currentStatus = toggle.innerText;

    for (const toggle of toggles) {
      toggle.innerText = currentStatus === 'DARK' ? 'LIGHT' : 'DARK';
    }
  });
});

$(document).ready(function() {
    $('.Header__burger').click(function(event){
        $('.Burger__list, .Header__burger').toggleClass('active');
    });
});
