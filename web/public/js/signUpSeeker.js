$(document).ready(function() {
    $("#divForm").submit(function(data) {
        data.preventDefault();

        $.post(
            "/signUp/seeker",
            {
                email: $("#inputEmail").val(),
                password: $("#inputPassword").val(),
            },
            function(res) {
                switch (res.result) {
                    case 0: {
                        window.location.href = "/home/seeker";
                        break;
                    }
                    case 1: {
                        alert("User does not exist.");
                        break;
                    }
                    case 2: {
                        alert("Invalid password.");
                        break;
                    }
                }
            },
        );
    });
});
