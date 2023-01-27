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
