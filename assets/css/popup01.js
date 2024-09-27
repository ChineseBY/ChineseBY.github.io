setTimeout(function() {
    document.getElementById('popup01').style.opacity = 1;
}, 1600);

document.getElementById('popup01').addEventListener('click',function(){
    this.style.display = 'none';
    var worker_01 = document.getElementById('worker_01');
    var worker_02 = document.getElementById('worker_02');
    var worker_03 = document.getElementById('worker_03');
    var worker_04 = document.getElementById('worker_04');

    worker_01.style.display = 'block';
    worker_01.classList.add('worker_01_anim');
    worker_01.addEventListener('animationend', function onworker_01_end() {
        worker_01.style.display = 'none';
        worker_02.style.display = 'block';
        worker_02.classList.add('worker_02_anim');
        worker_02.addEventListener('animationend', function onworker_02_end() {
            worker_02.style.display = 'none';
            worker_03.style.display = 'block';
            worker_03.classList.add('worker_03_anim');
            worker_03.addEventListener('animationend', function onworker_03_end() {
                worker_03.style.display = 'none';
                worker_04.style.display = 'block';
                worker_04.classList.add('worker_04_anim');
                worker_04.addEventListener('animationend', function onworker_04_end() {
                    // worker_04.style.display = 'none';
                    selector_01();
                    //进入popup_main

                    worker_01.removeEventListener('animationend', onworker_01_end);
                    worker_02.removeEventListener('animationend', onworker_02_end);
                    worker_03.removeEventListener('animationend', onworker_03_end);
                    worker_04.removeEventListener('animationend', onworker_04_end);
                });
            });
        });
    });
});