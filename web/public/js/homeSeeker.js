$(document).ready(function () {
 $("#email1").html("asdasd");
                    $("#email2").html("qwe");
                    $("#email3").html("qwrwq");
                    $("#email4").html("ertert");
                    $("#email1").html("");
                    $("#email1").html("");
                    $("#email1").html("");
                    $("#email1").html("");
                    $("#email1").html("");
                    $("#email1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#firstname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("#lastname1").html("");
                    $("profession1").html("");
                    $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
 $("profession1").html("");
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
