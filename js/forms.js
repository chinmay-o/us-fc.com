
$("#contact-form-main").submit((e) => {

  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbz0zZH7GoN6JW2d-xUtVxq0v-YaI0zTHbbUmDOwMw/exec",
    data: $("#contact-form-main").serialize(),
    type: "POST",
    success: function(response) {

      $('#contact-form-main')[0].reset();
      $(".custom-form-alert").css("display", "block");
      $(".custom-form-alert").text("Successfully Submitted. We will contact you back.");
      setTimeout(function() {

        $(".custom-form-alert").css("display", "none")
      }, 6000);
    },
    error: function(err) {

      $(".custom-form-alert").css("display", "block");
      $(".custom-form-alert").text("Error in submission. Refresh and try again.");
      setTimeout(function() {

        $(".custom-form-alert").css("display", "none")
      }, 6000);
    }
  })
})

fun
