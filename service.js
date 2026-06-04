let weddingCard = document.getElementById('wedding');
let birthdayCard = document.getElementById('Birthday'); 
let corporateCard = document.getElementById('corporate');
let sportsCard = document.getElementById('sports');

function allservice(){
    weddingCard.style.setProperty('display', 'flex', 'important');
    birthdayCard.style.setProperty('display', 'flex', 'important');
    corporateCard.style.setProperty('display', 'flex', 'important');
    sportsCard.style.setProperty('display', 'flex', 'important');
}

function wedding(){
    weddingCard.style.setProperty('display', 'flex', 'important');
    birthdayCard.style.setProperty('display', 'none', 'important');
    corporateCard.style.setProperty('display', 'none', 'important');
    sportsCard.style.setProperty('display', 'none', 'important');
}

function Birthday(){
    birthdayCard.style.setProperty('display', 'flex', 'important');
    weddingCard.style.setProperty('display', 'none', 'important');
    corporateCard.style.setProperty('display', 'none', 'important');
    sportsCard.style.setProperty('display', 'none', 'important');
}

function corporate(){
    corporateCard.style.setProperty('display', 'flex', 'important');
    birthdayCard.style.setProperty('display', 'none', 'important');
    weddingCard.style.setProperty('display', 'none', 'important');
    sportsCard.style.setProperty('display', 'none', 'important');
}

function sports(){
    sportsCard.style.setProperty('display', 'flex', 'important');
    birthdayCard.style.setProperty('display', 'none', 'important');
    weddingCard.style.setProperty('display', 'none', 'important');
    corporateCard.style.setProperty('display', 'none', 'important');
}