//This file is dedicated to login page to detect user is register or not dynamically
$(document).ready(function () {
  $("#email").on("input", async function () {
    var email = $("#email").val();

    $("#password").val("");

    var userEmail = await getUser(email);

    if (userEmail) {
      // Use userEmail for further processing if needed
      $("#error-message").text("");
    } else {
      $("#error-message").text("User not found. Please create an account.");
    }
  });

  async function getUser(email) {
    var response = await fetch(
      "http://localhost:8080/users/search/email?value=" + email
    );

    if (!response.ok) {
      return null;
    }

    var userData = await response.json();
    // Assuming your API response contains an 'email' field
    return userData.email || null;
  }
});
