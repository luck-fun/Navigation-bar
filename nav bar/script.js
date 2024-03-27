document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger_button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})