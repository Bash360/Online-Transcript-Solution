$(document).ready(function() {
  //On login page
  $("#signup_form").click(function() {
    $("#login_container").fadeIn();
    //$("#signup_container").fadeIn();
  })

  //On signup page
  $("#login_form").click(function() {
    $("#signup_container").hide();
    $("#login_container").show();
  })






})
