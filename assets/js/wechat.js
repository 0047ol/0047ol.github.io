$(function() {
    var link = window.location.href;
    if (link.indexOf('?key=') == -1) {
        window.location.href = '404.html';
    }
});