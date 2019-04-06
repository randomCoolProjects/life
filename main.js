function select(data)
{
    return document.querySelector(data);
}

const mediumYears = 80; // 80 years of life in Brazil / Medium

const btn           = select("button");
const yearsInput    = select("input");
const pbar          = select(".progress-bar");

const livedPercent  = select("#lived");
const toliveYears   = select("#tolive");
const tolivePercent = select("#tolivep");
const death         = select("#death");
const resultPanel   = select("#result");

var years = 0;
var percent = 0;

/*var today = new Date();
var year = today.getFullYear();
var deathYear = 0;*/

btn.onclick = function()
{
    years = parseFloat(yearsInput.value.replace(',','.'));
    percent = years / mediumYears * 100;

    var toLivePercentYears = 100 - percent;
    var toLive = mediumYears - years;
    
    livedPercent.innerText = percent;
    toliveYears.innerText = toLive;
    tolivePercent.innerText = toLivePercentYears;

    pbar.style = 'width: ' + percent + '%;';
    pbar.innerText = percent + '%';

    /*deathYear = year + toLive;

    var dd = today.getDay();
    var mm = today.getMonth();
    if (dd < 10)
    dd = '0' + dd;
    if (mm < 10)
    mm = '0' + mm;
    death.innerText = ("Você irá morrer em " + dd + "/" + mm + "/" + deathYear + " às " + today.getHours() + " horas!");
    if (today.getHours() < 8)
    death.innerText += "\n(Você nem irá acordar)";*/

    resultPanel.className = '';
}
