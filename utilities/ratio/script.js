class Deck {
    constructor(name, wins, looses) {
        this.name = name
        this.wins = wins
        this.looses = looses
    }
}

const decks = JSON.parse(localStorage['decks'] || "[]"),
    currentDeck = 0,
    winsDiv = $('#wins'),
    loosesDiv = $('#looses'),
    ratioDiv = $('#ratio'),
    deckListDiv = $('#deck-list')

function win() {
    decks[currentDeck].wins += 1
    localStorage['decks'] = JSON.stringify(decks)
    refreshData()
}

function loose() {
    decks[currentDeck].looses += 1
    localStorage['decks'] = JSON.stringify(decks)
    refreshData()
}

function refreshData() {
    const wins = decks[currentDeck].wins,
        looses = decks[currentDeck].looses,
        winRatio = looses ? Math.round(wins / (wins + looses) * 100) : "100"
    loosesDiv.text(looses)
    winsDiv.text(wins)
    winRatio > 50 ? ratioDiv.addClass("wins").removeClass("looses") : ratioDiv.removeClass("wins").addClass("looses")
    ratioDiv.text(winRatio + '%')
}

function refreshSidebar() {
    const date = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    const today = date.toLocaleDateString("fr-FR", options)
    deckListDiv.empty()
    for (let i = 0; i < decks.length; i++) {
        const newElement = $(`<div class="list-item" onClick="changeDeck(${i})"><span>${decks[i].name} - ${today}</span></div>`)
        if (i === currentDeck) newElement.toggleClass('active')
        deckListDiv.append(newElement)
    }
}

$(window).on('load', function () {
    if (decks.length) {
        refreshSidebar()
        refreshData()
    }
})

function addNewDeck() {
    const name = 'RL'
    if (name != '' && name != null && decks < 1) {
        decks.push(new Deck(name, 0, 0))
        refreshSidebar()
        localStorage['decks'] = JSON.stringify(decks)
    }
}

function deleteDeck(ind) {
    decks.splice(ind, 1)
    refreshSidebar()
    event.stopPropagation()
    localStorage['decks'] = JSON.stringify(decks)
}

function reset() {
    decks[currentDeck].wins = 0
    decks[currentDeck].looses = 0
    winsCount = 0
    loosesCount = 0
    winRatio = '-'
    loosesDiv.text(loosesCount)
    winsDiv.text(winsCount)
    ratioDiv.text(winRatio)
    localStorage['decks'] = JSON.stringify(decks)
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyZ' || event.code === 'Numpad1') {
        win()
    }
})

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyL' || event.code === 'Numpad2') {
        loose()
    }
})