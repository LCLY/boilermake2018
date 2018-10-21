$(document).ready(function() {
    $.post(
        "/home/professional",
        {
            pid: "0",
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
