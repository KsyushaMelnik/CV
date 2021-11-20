const $tabNav = document.querySelectorAll('.btn');
const $textNav = document.querySelectorAll('.text-nav');

$tabNav.forEach(function (el) {
    el.addEventListener('click', function() {

        $tabNav.forEach(function (el) {
            el.classList.remove('active');
        }); 

        $textNav.forEach(function (el) {
            el.classList.remove('active');
        }); 

        this.classList.add('active');
        let target = this.getAttribute('data-tab');
        document.querySelector('.text-nav' + target).classList.add('active');    
    });
});
