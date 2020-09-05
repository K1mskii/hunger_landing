// Scroll page
$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
        .stop()
        .animate({
                scrollTop: $(anchor).offset().top - 0,
            },
            800
        );
});


// Map
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 51.5298887,
        lng: -0.1707836,
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}