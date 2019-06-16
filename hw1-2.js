const byId = (id) => document.getElementById(id);

var pool = [];
pool.length = 100;

pool.fill('1星卡', 0, 80);
pool.fill('2星卡', 80, 98);
pool.fill('3星卡', 98, 100);

byId('do').addEventListener('click', function () {
    rand = Math.floor(Math.random() * 100) + 1;
    byId('get').innerHTML = pool[rand];

})