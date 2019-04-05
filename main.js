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
const resultPanel   = select("#result");

var years = 0;
var percent = 0;

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

    resultPanel.className = '';
}