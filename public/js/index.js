
$(document).ready(function () {

  $("#login_submit").submit(function (event) {

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
        success: function() {
          window.location.assign("dashboard.html");
        }
      });
      event.preventDefault();
    }

  })



  $("#login_login").submit(function (event) {

    event.preventDefault();

    var id = $("#id").val();
    var password = $("#password").val();

      $.ajax({
        method: "GET",
        url: "http://localhost:3000/users",
        dataType: "json",
        data: {id: id, password: password },
        success(res) {
          if (!res.length) {
              return false
          }
          window.location.assign(`dashboard.html?id=${id}`);
        }
      });
     
    })


});
