function takemeback() {
    if (window.location.href.indexOf("inspi") > -1) {
        window.location.href = "/inspi";
    } else {
        window.location.href = "/";
    }
}

window.addEventListener('DOMContentLoaded', function () {
});