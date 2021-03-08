function init() {
    var tabs = $('.toolbar .tab')
    var elem = null
    if (location.pathname === '/friends')
        elem = $(tabs[1])
    else
        elem = $(tabs[0])
    elem.addClass('selected')
    elem.find('path').attr('fill', '#2d88ff')
}

$(document).ready(() => init())