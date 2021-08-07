function Deck(name, wins, looses) {
    this.name = name;
    this.wins = wins;
    this.looses = looses;
}

var decks = JSON.parse(localStorage['decks'] || "[]"),
    currentDeck = 0,
    winsDiv = $('#wins'),
    loosesDiv = $('#looses'),
    ratioDiv = $('#ratio'),
    deckListDiv = $('#deck-list');

// migrate from old version
if (localStorage['wins'] || localStorage['looses']) {
    decks.push(new Deck('Unknown', Number(localStorage['wins']), Number(localStorage['looses'])));
    localStorage['wins'] = '';
    localStorage['looses'] = '';
    localStorage['decks'] = JSON.stringify(decks);
}

function win() {
    decks[currentDeck].wins += 1;
    refreshData();
    localStorage['decks'] = JSON.stringify(decks);
}

function loose() {
    decks[currentDeck].looses += 1;
    refreshData();
    localStorage['decks'] = JSON.stringify(decks);
}

$(window).on('load', function () {
    if (decks.length) {
        refreshSidebar();
        refreshData();
    }
});

function refreshData() {
    var wins = decks[currentDeck].wins,
        looses = decks[currentDeck].looses,
        winRatio = looses ? Math.round(wins / (wins + looses) * 100) : "100";
    loosesDiv.text(looses);
    winsDiv.text(wins);
    winRatio > 50 ? ratioDiv.addClass("wins").removeClass("looses") : ratioDiv.removeClass("wins").addClass("looses");
    ratioDiv.text(winRatio + '%');
}

function refreshSidebar() {
    var date = new Date();
    var options = {weekday: 'long', month: 'long', day: 'numeric'};
    var today = date.toLocaleDateString("fr-FR", options);
    deckListDiv.empty();
    for (let i = 0; i < decks.length; i++) {
        var newElement = $(`<div class="list-item" onClick="changeDeck(${i});"><span>${decks[i].name} - ${today}</span></div>`);
        var actionDiv = $(`<div class="edit-wrapper"></div>`);
        actionDiv.append($(`<svg onClick="deleteDeck(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M472 83H351V60c0-33.084-26.916-60-60-60h-70c-33.084 0-60 26.916-60 60v23H40c-11.046 0-20 8.954-20 20s8.954 20 20 20h20.712l24.374 315.987.023.278a79.818 79.818 0 0025.73 51.816A79.822 79.822 0 00164.778 512h182.444c41.667 0 75.917-31.032 79.669-72.183 1.003-11.001-7.101-20.731-18.101-21.734-11.011-1.003-20.731 7.101-21.734 18.101C385.195 456.603 368.07 472 347.222 472H164.778c-20.777 0-37.875-15.571-39.823-36.242L100.831 123h310.338l-17.082 221.462c-.849 11.013 7.39 20.629 18.403 21.479.524.04 1.043.06 1.56.06 10.347 0 19.11-7.974 19.919-18.463L451.288 123H472c11.046 0 20-8.954 20-20s-8.954-20-20-20zm-161 0H201V60c0-11.028 8.972-20 20-20h70c11.028 0 20 8.972 20 20v23z"/><path d="M165.127 163.019c-11.035.482-19.59 9.818-19.108 20.854l10 228.933c.469 10.738 9.322 19.128 19.966 19.128.294 0 .591-.006.888-.02 11.035-.482 19.59-9.818 19.108-20.854l-10-228.934c-.482-11.034-9.836-19.603-20.854-19.107zM326.019 182.127l-10 228.934c-.482 11.035 8.073 20.372 19.108 20.854.297.013.593.02.888.02 10.643 0 19.497-8.39 19.966-19.128l10-228.933c.482-11.035-8.073-20.372-19.108-20.854-11.017-.493-20.372 8.072-20.854 19.107zM236 183v228.933c0 11.046 8.954 20 20 20s20-8.954 20-20V183c0-11.046-8.954-20-20-20s-20 8.954-20 20z"/></svg>`));
        newElement.append(actionDiv);
        if (i === currentDeck) newElement.toggleClass('active');
        deckListDiv.append(newElement);
    }
}

function addNewDeck() {
    var name = prompt("Name of the session:");
    if (name != '' && name != null) {
        console.log(name)
        decks.push(new Deck(name, 0, 0));
        refreshSidebar();
        localStorage['decks'] = JSON.stringify(decks);
    }
}

function changeDeck(ind) {
    $(deckListDiv.children()[currentDeck]).toggleClass('active');
    currentDeck = ind;
    $(deckListDiv.children()[currentDeck]).toggleClass('active');
    refreshData();
}

function editDeck(ind) {
    var name = prompt("New name:");
    decks[ind].name = name;
    refreshSidebar();
    event.stopPropagation();
    localStorage['decks'] = JSON.stringify(decks);
}

function deleteDeck(ind) {
    decks.splice(ind, 1);
    refreshSidebar();
    event.stopPropagation();
    localStorage['decks'] = JSON.stringify(decks);
}

function deleteAllDeck() {
    decks.splice(0);
    refreshSidebar();
    event.stopPropagation();
    localStorage['decks'] = JSON.stringify(decks);
}

function reset() {
    decks[currentDeck].wins = 0;
    decks[currentDeck].looses = 0;
    localStorage['decks'] = JSON.stringify(decks);
    winsCount = 0;
    loosesCount = 0;
    winRatio = '-';
    loosesDiv.text(loosesCount);
    winsDiv.text(winsCount);
    ratioDiv.text(winRatio);
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyZ' || event.code === 'Numpad1') {
        win();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyL' || event.code === 'Numpad2') {
        loose();
    }
});