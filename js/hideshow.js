
var display_button_first = document.getElementById("display_button_first")
var display_button_second = document.getElementById("display_button_second")

var event_detail_first = document.getElementById("event_detail_first");
var event_detail_second = document.getElementById("event_detail_second");

display_button_first.onclick = function(){

    if (event_detail_first.style.display === "none") {
        event_detail_first.style.display = "block";
        display_button_first.src = "asset/main-elements/button/close.png";
    } else {
        event_detail_first.style.display = "none";
        display_button_first.src = "asset/main-elements/button/read-more.png";
    }

}

display_button_second.onclick = function(){

    if (event_detail_second.style.display === "none") {
        event_detail_second.style.display = "block";
        display_button_second.src = "asset/main-elements/button/close.png"
    } else {
        event_detail_second.style.display = "none";
        display_button_second.src = "asset/main-elements/button/read-more.png"
    }
}

