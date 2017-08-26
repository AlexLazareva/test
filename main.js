window.onload = function() {
    var items = document.querySelectorAll('.items .item');

    function activeItem() {
        this.classList.toggle('item-active');
    }

    setInterval(function () {
        var rand = mtRand(0, items.length - 1);

        activeItem.call( items[rand]);
    }, 1000);

    var item = document.querySelector('.items .item');
    var timer = new Timer(60, item);

    var steps = setInterval(function() {
        timer.tick();
    }, 1000);

    setTimeout(function () {
        clearInterval(steps);
        item.innerHTML = 'Отсчет окончен!';
        showModal();
    }, 60000);

};

function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function Timer(time, elem) {
    this.time = time;
    this.elem = elem;

    this.tick = function () {

        this.time--;
        this.elem.innerHTML = this.time;

    };

}

function showModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
}


