var tc = 'nadają orgonity (super bonus kurwo xD)';

var t = [
'Globaliści',
'Dzwoni Stały Słuchacz',
'Alex Jones',
'Idiokracja',
'Big Pharma',
'Jerzy Zięba',
'"Zły Wilk"',
'Pedofilia',
'Klodowi plącze się język',
'Psychuszka',
'Jechanie po polsce',
'Szczepionki',
'Klod pierdoli o trollach',
'Nikola Tesla',
'Klod jest nawciągany',
'Spucha',
'UFO',
'Monty Pajton',
'*BEEEEEEK*',
'"Naprawie X za tydzień"',
'Sheeple',
'Telefon od anona',
'Free Energy',
'PACH!',
'Nitinol',
'"Umówmy się"',
'Luźniejszy temat',
'PACH!',
'Grupa Bilderberg',
'mBank',
'Trolling na czacie',
'Przerwa muzyczna',
'Problemy techniczne',
'Żydzi',
'Dzwoni jechowiec',
'Dzwoni zjeb z UK',
'Witamina D3',
'Judeopolonia',
'Vtol',
'Kryptowaluty',
'Seryjny samobójca',
'Rząd Światowy',
'Falseflag',
'Klod pierdoli głupoty',
'Bill Hicks',
'Klod jest zmęczony',
'Służby',
'Cywilizacja Turańska',
'Zamach na JFK',
];

var tw = 7
  
function szufla(array, seed) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    seed = seed || 1;
    let random = function() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    while (0 !== currentIndex) {
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function initTable() {
    var ta = '';
    let c = 0;

    for (let i = 0; i < tw; i++) {
        ta += '<tr>';

        for (let j = 0; j < tw; j++) {

            if (j == Math.floor(tw / 2) && i == Math.floor(tw / 2)) {
                ta += '<td data-cell="' + c + '" data-cell-center class="crossed"><span>' + tc + '</span></td>';
            }
            else {
                ta += '<td data-cell="' + c + '"><span></span></td>';
            }
            c++;
        }

        ta += '</tr>';
    }

    $('table').html(ta);

    $('td').click(function() {
        if ($(this).hasClass('crossed')) {
            $(this).removeClass('crossed');
        }
        else {
            $(this).addClass('crossed');
        }
    });
}

function randomizeTable() {
    let d = new Date();
    let seed = d.getDate() + ((d.getMonth() + 1) * 100) + (d.getFullYear() * 10000);
    t = szufla(t, seed);

    for (let i = 0; i < tw*tw; i++) {
        $('td[data-cell="' + i + '"]:not([data-cell-center]) span').text(t[i]);
    }
}

$(document).ready(function() {
    var today = new Date().toJSON().slice(0,10);
    $('#date').text(today);

    initTable();
    randomizeTable();
});