window.addEventListener('load', function () {
    function spanClick(event) {
        var active = document.querySelector('.active');
        if (active != null) {
            active.classList.remove('active');
        }
        var target = event.target;
        if (target != active) {
            target.classList.add('active');
        }
    }

    document.body.addEventListener('click', spanClick);
});

