// login page animation 
VANTA.WAVES({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x885e
});

//signup

$('#signup').click(function () {
    location.href = '/guviintern-main/routes/signup.html';

});

//login
$('#loginbtn').click(function () {
    location.href = "/guviintern-main/index.html";
});