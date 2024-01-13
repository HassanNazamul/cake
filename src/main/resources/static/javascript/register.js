$(document).ready(function () {
  function validateName() {
    var fname = $("#fname").val().trim();
    var lname = $("#lname").val().trim();
    var isValid = false;

    if (fname === "" || lname === "") {
      $("#name-error").text("Name cannot be empty");
      isValid = true;
    } else {
      $("#name-error").text("");
    }

    return isValid;
  }

  function validateEmail() {
    var email = $("#email").val().trim();
    var isValid = false;

    if (email === "") {
      $("#email-error-message").text("Email cannot be empty");
      isValid = true;
    } else {
      $("#email-error-message").text("");
    }

    return isValid;
  }

  function validatePassword(input, errorElement) {
    var value = $(input).val().trim();
    var isValid = false;

    if (value.length === "") {
      $(errorElement).text("Password cannot be empty");
      isValid = true;
    } else {
      $(errorElement).text("");
    }

    return isValid;
  }

  $("#fname, #lname").on("input", function () {
    $("#signUpBtn").prop("disabled", validateName());
  });

  $("#email").on("input", function () {
    $("#signUpBtn").prop("disabled", validateEmail());
  });

  $("#password").on("input", function () {
    $("#signUpBtn").prop(
      "disabled",
      validatePassword("#password", "#password-error-message")
    );
  });

  $("#confirmPassword").on("input", function () {
    $("#signUpBtn").prop(
      "disabled",
      !validatePassword("#confirmPassword", "#confirmpassword-error-message")
    );
  });
});
