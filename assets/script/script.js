/* Schedule are to be precise so I chose format with 'MMMM Do YYYY, h:mm:ss a' */
/* This method will only show when user first login */
/*
var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);
*/
/* setInterval to make it live */
setInterval(function() {
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(todayDate);
}, 1000);

/* button submitting */

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        /* Saw this on high score tutorial last challenge */
        /* adding input into local storage */
        localStorage.setItem(time, text);
    })
})

