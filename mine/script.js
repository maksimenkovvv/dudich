$(document).ready(function () {
    $("button.otpravka").on("click", function () {
      var nameValue = $("input.name").val();
      var telValue = $("input.tel").val();
      var emailValue = $("input.email").val();

      $.ajax({
        method: "POST",
        url: "form.php",
        data: { name: nameValue, tel:telValue, email:emailValue },
      }).done(function () {
        // alert("Data saved: " + msg);
      });

      $("input.name").val();
      $("input.tel").val();
      $("input.email").val();
    });
  });