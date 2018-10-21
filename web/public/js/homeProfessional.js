$(document).ready(function() {
    $("#email1").html("karani@microsoft.com");
    $("#email2").html("mfreeman@gmail.com");
    $("#email3").html("rachel.baker@gmail.com");
    $("#email4").html("danl@ontech.com");
    $("#email5").html("jungs@gmail.com");
    $("#email6").html("htaka@gmail.com");
    $("#email7").html("zbakar@gmail.com");
    $("#email8").html("patel@gmail.com");
    $("#email9").html("chenz@gmail.com");
    $("#email10").html("tguan12@gmail.com");
    $("#first1").html("Agatha");
    $("#first2").html("Saiful");
    $("#first3").html("Morgan");
    $("#first4").html("Kirsten");
    $("#first5").html("Penelope");
    $("#first6").html("Chung-hua");
    $("#first7").html("Vladmir");
    $("#first8").html("Najib");
    $("#first9").html("Johann");
    $("#first10").html("Jan");
    $("#last1").html("Christy");
    $("#last2").html("Bukhari");
    $("#last3").html("Stillman");
    $("#last4").html("Stewart");
    $("#last5").html("Similankis");
    $("#last6").html("Lin");
    $("#last7").html("Yankovich");
    $("#last8").html("Razak");
    $("#last9").html("Graham");
    $("#last10").html("Steiner");
    $("#position1").html("Student");
    $("#position2").html("Computer Engineer");
    $("#position3").html("Student");
    $("#position4").html("Computer Science");
    $("#position5").html("Student");
    $("#position6").html("Computer Science");
    $("#position7").html("IT");
    $("#position8").html("Student");
    $("#position9").html("Computer Science");
    $("#position10").html("Computer Engineer");

    $.post(
        "/home/professional",
        {
            sid: "0",
        },
        function(res) {
            switch (res.result) {
                case 0: {
                    break;
                }
                case 1: {
                    break;
                }
                case 2: {
                    break;
                }
            }
        },
    );
});
