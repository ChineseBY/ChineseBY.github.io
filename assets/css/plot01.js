function building_anim() {
    document.getElementById('building').style.display = 'block';
    document.getElementById('building').classList.add('building_anim');

    setTimeout(() => {
        window.location.replace('assets/css/exp.html');
    }, 1000);
}
