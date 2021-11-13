var tc = 'nadają orgonity (super bonus kurwo xD)';

/*
var temporaryOLD = [
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
'Klod jest najebany albo naćpany',
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
'Nikola Tesla',
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
'Cywilizacja według Konecznego',
'Zamach na JFK'
];
*/

var temporary = [
'Globaliści',
'Dzwoni Stały Słuchacz',
'Alex Jones',
'Idiokracja',
'Big Pharma',
'"Zły Wilk"',
'Pedofilia',
'Klodowi plącze się język',
'Jechanie po polsce',
'Szczepionki',
'Klod pierdoli o trollach',
'Klod jest najebany albo naćpany',
'Spucha',
'UFO',
'Monty Pajton',
'*BEEEEEEK*',
'"Naprawie X za tydzień"',
'Sheeple',
'Telefon od anona',
'Free Energy',
'PACH!',
'"Umówmy się"',
'Luźniejszy temat',
'Nikola Tesla',
'Grupa Bilderberg',
'mBank',
'Trolling na czacie',
'Przerwa muzyczna',
'Problemy techniczne',
'Żydzi',
'Witamina D3',
'Judeopolonia',
'Kryptowaluty',
'Seryjny samobójca',
'Rząd Światowy',
'Falseflag',
'Klod pierdoli głupoty',
'Bill Hicks',
'Klod jest zmęczony',
'Służby',
'Zamach na JFK',
'Magia Chaosu',
'Łysyblower',
'Dzwoni Patus',
'Dzwoni Paweł z Zabrza',
'Newsy do drugiej',
'Żółte kamizelki',
'Srole'
];

var t

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
    array.splice(24,0,"0")
    
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
        saveBingoState();
    });
}

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Friday in current week decides the year.
  date.setDate(date.getDate() + 4 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Friday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function randomizeTable() {
    let d = new Date();
    let seed = d.getWeek() + ((d.getMonth() + 1) * 100) + (d.getFullYear() * 10000);
    t = szufla(t, seed);
}

function fillTable() {
    for (let i = 0; i < tw*tw; i++) {
        $('td[data-cell="' + i + '"]:not([data-cell-center]) span').text(t[i]);
    }
}

function downloadimage(){
    
    const scale = 3;
    var node = document.getElementById('tablecontainer');
    
    document.getElementById("tablecontainer").style.margin = ('0 0')
    
let obj = {
    height: 780 * scale,
    width: 745 * scale,
    style: {
        'position':'absolute',
        'marginTop': '-60px',
        'transform': "scale(" + scale + ")",
        'transformOrigin': "top left",
     }
}

var d = new Date();
    d.setDate(d.getDate() + 4 - (d.getDay() + 6) % 7);
var hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds(),
    day = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear();

domtoimage.toPng(node, obj)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = day + '-' + month + '-' + year +' ' + hour + 'h' + minute + 'm' + second + 's.png';
        link.href = dataUrl;
        link.click();
        document.getElementById("tablecontainer").style.margin = ('0 auto')
    });
}

function save() {
    var temp = document.getElementById('textbox').value.split('\n');
    Cookies.set('valuesnew', JSON.stringify(temp), { expires: 999 });
    resetTable();
}

function loadToTextbox() {
    var temp = Cookies.get('valuesnew');
    var cookie = JSON.parse(temp);
    var textbox = document.getElementById('textbox');
    textbox.value = cookie.join("\n")
}

function loadDefaultToTextbox() {
    var textbox = document.getElementById('textbox');
    textbox.value = temporary.join("\n");
    Cookies.set('valuesnew', JSON.stringify(temporary), { expires: 999 })
}

function resetTable() {
    t = undefined
    loadToTextbox()
    t = document.getElementById('textbox').value.split('\n'); 

    randomizeTable();
    fillTable();
}

function saveBingoState() {
    let krzyze = new Array();
    for (td of document.querySelectorAll('table#table td')) {
        if (td.className.includes("crossed")) { 
            krzyze.push(td.attributes['data-cell'].value)
        }
    }
    var sunday = new Date();
    sunday.getDate() + 1
    Cookies.set('krzyze', JSON.stringify(krzyze), { expires: sunday })
    console.log(sunday);
}

function restoreBingoState() {
    if (Cookies.get('krzyze')!==undefined) {
        let krzyze = JSON.parse(Cookies.get('krzyze'));
        for (k of krzyze) {
            cell = document.querySelector(`table#table td[data-cell="${k}"]`)
            if (!cell.className.includes("crossed")) {
                cell.classList.add("crossed");
            }
            console.log(k);
        }
    }
}



$(document).ready(function() {
    var loaded = Cookies.get('valuesnew')
    
    if (loaded !== undefined) {
        loadToTextbox()
    }
    else {
        loadDefaultToTextbox();
    }
    
    t = document.getElementById('textbox').value.split('\n');   //load textbox into array
    
    var friday = new Date()
    friday.setDate(friday.getDate() + 4 - (friday.getDay() + 6) % 7);
    var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var date = friday.toLocaleDateString('pl-PL', options)
    $('#date').text(date);
    
    initTable();
    randomizeTable();
    fillTable();
    restoreBingoState();
});