$(document).ready(function () {
    $.post(
        "/home/seeker",
        {
            // email: $("#inputEmail").val(),
            // password: $("#inputPassword").val(),
        },
        function (res) {
            switch (res.result) {
                case 0: {
                    // $("#logInBtn").change(function () {
                    //     var action = "/show/seeker/professional";
                    //     $("#signInForm").attr("action", action);
                    // });
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#email1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#firstname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("#lastname1")
                    $("profession1")
                    $("profession1")
                    
                    console.log("result" + res.result);                   
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
}
