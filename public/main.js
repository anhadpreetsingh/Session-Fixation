function search() {

    var searching = document.getElementById("query").value

    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("query", searching);
        window.location.search = searchParams.toString();
    }
}

(function ready() {
    var param = new URL(window.location).searchParams.get('query')

    document.getElementById("query").value = param;
    var text = document.getElementById("text")

    text.innerHTML = param

})()