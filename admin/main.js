function change_width() {
    let left_panel = document.getElementById('left_panel')
    let icon = document.getElementById('icon')
    let games = document.getElementById('games')
    let buttons = document.getElementById('buttons')

    console.log(window.outerWidth)
    if (left_panel.offsetWidth == '50') {

        left_panel.style.width = '200px'
        icon.style.display = 'none'
        games.style.width = '190px'
        buttons.style.display = 'initial'


    } else {
        left_panel.style.width = '50px'
        icon.style.display = 'initial'
        games.style.width = '40px'
        buttons.style.display = 'none'
    }
}

function change_text() {
    let object_text = event.target.innerHTML
    let panel = document.getElementById('game')
    panel.textContent = object_text
}

