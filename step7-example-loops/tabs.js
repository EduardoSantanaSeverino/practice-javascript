
function updateTabs(index){
    if (index == 1) { // div is awesome
        document.getElementById('div-no-awesome').style.display = 'none';
        document.getElementById('div-awesome').style.display = 'block';
    }
    if (index == 2) { // div is NOT awesome
        document.getElementById('div-no-awesome').style.display = 'block';
        document.getElementById('div-awesome').style.display = 'none';
    }
}

document
    .getElementById('awesome')
    .addEventListener('click', function () {
        updateTabs(1);
    });

document
    .getElementById('no-awesome')
    .addEventListener('click', function () {
        updateTabs(2);
    });
