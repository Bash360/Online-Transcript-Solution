const server = require("../../index");


$(document).ready(function () {

  $("#submit_signup").submit(function (event) {

    event.preventDefault();

    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var student_id = $("#student_id").val();
    var department = $("#dept").val();
    var year_of_entry = $("#yoe").val();
    var year_of_graduation = $("#yog").val();
    var password = $("#password").val();


    $.ajax({
      method: "POST",
      url: `http://localhost:${PORT}/users`,
      data: {
        fullname: fullname,
        email: email,
        student_id: student_id,
        department: department,
        yearOfEntry: year_of_entry,
        yearOfGraduation: year_of_graduation,
        password: password
      },
      success: function () {
        window.location.assign(`dashboard.html?id=${student_id}`);
      }
    });

  })



  $("#login_login").submit(function (event) {

    event.preventDefault();

    student_id = $("#student_id").val();
    var password = $("#password").val();

    $.ajax({
      method: "GET",
      url: `http://localhost:${PORT}/users`,
      dataType: "json",
      data: { student_id: student_id, password: password },
      success: function (res) {
        if (!res.length) {
          alert("Details do not match")
        } else {
          window.location.assign(`dashboard.html?id=${student_id}`);
        }
      }
    });

  })



  $("#admin_signup").submit(function (event) {

    event.preventDefault();

    var email = $("#email").val();
    var admin_id = $("#admin_id").val();
    var password = $("#password").val();

    $.ajax({
      method: "POST",
      url: `http://localhost:${PORT}/users`,
      data: {
        email: email,
        admin_id: admin_id,
        password: password
      },
      success: function () {
        window.location.assign(`adminDashboard.html?admin_id=${admin_id}`);
      }
    });

  })



  $("#admin_login").submit(function (event) {

    event.preventDefault();

    admin_id = $("#admin_id").val();
    var password = $("#password").val();

    $.ajax({
      method: "GET",
      url: `http://localhost:${PORT}/users`,
      dataType: "json",
      data: { admin_id: admin_id, password: password },
      success: function (res) {
        if (!res.length) {
          alert("Details do not match")
        } else {
          window.location.assign(`adminDashboard.html?admin_id=${admin_id}`);
        }
      }
    });

  })

});
