$('#updateDetails').click(function () {
    $('#updateDetailsDiv').show(1000);
    $('#showDetailsDiv').hide(500);
})
$('#viewDetails').click(function () {
    $('#updateDetailsDiv').hide(500);
    $('#showDetailsDiv').show(1000);
})

$(document).ready(function () {
    $('#updateDetailsDiv').hide();
    $('#showDetailsDiv').show(1000);
})