/***************************************************************************************************************
 *
 *           2.
 *           Известны два расстояния.
 *           Одно в километрах, другое - в футах (1 фут = 0,305м).
 *           Какое расстояние меньше?
 *
 ************************************************************************************************************* */

const box = document.getElementById('box')

const kmInMeters = 1000;
const footInMeters = 0.305;

const kmDist = parseInt(prompt('Введите расстояние в км', 0))
const footDist = parseInt(prompt('Введите расстояние в футах', 0))

let userKmInMeters = kmDist * kmInMeters;
let userFtInMeters = footDist * footInMeters;


function compare(km, fts) {
    if (userKmInMeters > userFtInMeters) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Расстояние в км: </h6> <span>${km}</span></div>
            <div class="arr-box"> <h6>Расстояние в футах: </h6> <span>${fts}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>Расстояние в км больше </h6></div>
        `
    } else {
        box.innerHTML = `
            <div class="arr-box"> <h6>Расстояние в км: </h6> <span>${km}</span></div>
            <div class="arr-box"> <h6>Расстояние в футах: </h6> <span>${fts}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>Расстояние в футах больше </h6></div>
        `
    }
}
compare(kmDist, footDist)


