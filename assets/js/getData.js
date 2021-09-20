//validation
$(window).ready(() => {
    $.ajax({
        url: '/guviintern-main/backend/getData.php',
        type: 'GET',
        data: {},
        success: function (data) {
            if (data.code === true) {
                $("#usernamefield").text(data["username"]);
                $("#agefield").val(data["age"]);
                $("#dobfield").val(data["dob"]);
                $("#contactfield").val(data["contact"]);
                $("#cityfield").val(data["city"]);
            }
            else{
                $("#usernamefield").text(data["username"]);
            }
        },
        dataType: 'json',
    })
})