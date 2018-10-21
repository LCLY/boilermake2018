var professionalList;

$(document).ready(function () {
  var credentials = localStorage.getItem("credentials");
  var obj = JSON.parse(credentials);
  $.post(
    "",//unique call waiting for ZAC
    {
      userID: obj.userID,
    },
    function (result) {
      switch (result.result) {
        case 0: {
          //case 0
          break;
        }
        case 1: {
          //case 1
          break;
        }
      }
    }
  )
});

function generateViewProfessionalList(professionalList) {
  $("#confirmCodeModal").modal("hide"); //modify here
  var options = {
    valueNames: [
      { data: ["offerid"] }, //Not sure about this
      "name",
      "position",
      "photoURL",
      "profileURL",
      "messageURL"
    ],
    item:
      '<li class="chat-people-outer  col-6 m-0">' +
      '<div class="chat_people row">' +
      '<div class="chat_img">' +
      '<img src="https://ptetutorials.com/images/user-profile.png" height="80rem" width="80rem">' +
      "</div>" +
      '<div class="chat_ib pl-3 pt-3">' +
      '<h5>Andrew</h5>' +
      '<p>Sophomore student in Purdue</p>' +
      "</div>" +
      '<div style="position:absolute; left:25rem; padding-top: 5px" class="button-logo">' +
      '<img src="../assets/profilelogoturquoise.png" width="50rem" height="50rem">' +
      "</div>" +
      '<div style="position:absolute; right:2rem; padding-top: 5px" class="button-logo2">' +
      '<img src="../assets/messages logo turquoise.png" width="50rem" height="50rem">' +
      "</div>" +
      "</div>" +
      "</li>"
  };
}