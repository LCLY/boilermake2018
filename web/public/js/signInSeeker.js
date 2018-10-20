$(document).ready(function() {
    $("#signInForm").submit(function(data) {
        data.preventDefault();

        $.post(
            "/signIn/seeker",
            {
                email: $("#emailSignIn").val(),
                password: $("#passwordSignIn").val(),
            },
            function(res) {
                switch (res.result) {
                    case 0: {
                        localStorage.key = "credentials";
                        localStorage.setItem(
                            "credentials",
                            JSON.stringify({
                                status: res.status,
                                userid: res.userid,
                                email: $("#emailSignIn").val(),
                            }),
                        );

                        window.location.href = "/profilePage/seeker";
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
