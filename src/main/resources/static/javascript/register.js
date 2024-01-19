$(document).ready(function () {
  // This function is to validate name
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

  // This function is to validate Email
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

  // This function is to validate Password
  function validatePassword() {
    var password = $("#password").val().trim();
    var isValid = false;

    if (password === "") {
      $("#password-error-message").text("Password cannot be empty");
      isValid = true;
    } else {
      $("#password-error-message").text("");
    }

    return isValid;
  }

  // This function is to validate Confirm Password
  function validateConfirmPassword() {
    var password = $("#password").val().trim();
    var confirmPassword = $("#confirmPassword").val().trim();
    var isValid = false;

    if (confirmPassword === "") {
      $("#confirmpassword-error-message").text("password cannot be empty");
      isValid = true;
    } else if (password !== confirmPassword) {
      $("#confirmpassword-error-message").text("password do not match");
      isValid = true;
    } else {
      $("#confirmpassword-error-message").text("");
    }

    return isValid;
  }

  $("#fname, #lname").on("keyup", function () {
    validateName();
  });

  $("#email").on("keyup", function () {
    validateEmail();
  });

  $("#password").on("keyup", function () {
    validatePassword();
  });

  $("#confirmPassword").on("keyup", function () {
    validateConfirmPassword();
  });

  // function enableBtn() {
  // if (
  //   validateName() === true &&
  //   validateEmail() === true &&
  //   validatePassword() === true &&
  //   validateConfirmPassword() === true
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
  // }
});
