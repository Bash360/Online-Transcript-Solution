$(document).ready(function () {

  $("#target").submit(function (event) {

    var fullname = $("#fullname").val();
    var id = $("#id").val();
    var password = $("#password").val();
    var compare_password = $("#compare_password").val();

    if (password === compare_password) {
      

    $.ajax({
      method: "POST",
      url: "http://localhost:3000/users",
      data: {
        fullname: fullname,
        id: id,
        password: password,
        compare_password: compare_password
      },
      success() {
        window.location.assign("dashboard.html");
      }
    });
    event.preventDefault();
  }

  });
  


  


});
