$(document).ready(function() {
    $("#signInForm").submit(function(data) {
        data.preventDefault();
        $.post(
            "/signIn/seeker",
            {
                email: $("#inputEmail").val(),
                password: $("#inputPassword").val(),
            },
            function(res) {
                switch (res.result) {
                    case 0: {
                        console.log("result" + res.result);
                        window.location.href = "/home/seeker";
                        break;
                    }
                    case 1: {
                        alert("Incorrect password");
                        break;
                    }
                    case 2: {
                        alert("Incorrect credentials");
                        break;
                    }
                    default: {
                        alert("some kind of error");
                    }
                }
            },
        );
    });
});
