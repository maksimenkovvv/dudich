$(document).ready(function () {
  $("button.popup__form-button").on("click", function () {
    var nameValue = $("input.name").val();
    var telValue = $("input.tel").val();
    var emailValue = $("input.email").val();

    if ($.trim($(".popup__form-fields-1").val()) === "" || $.trim($(".popup__form-fields-2").val()) === "" || $.trim($(".popup__form-fields-3").val()) === "") {
      $('button.popup__form-button').css('background-color','red');
      $('button.popup__form-button').html('Ошибка! Не все поля заполнены');
      return false;
  }

  if ($.trim($(".popup__form-fields-2").length >= 13)) {
    $('.popup__form-fields-2').css('background-color','red');
    $(".popup__form-fields-2").trigger('reset');
    $('.popup__form-fields-2.placeholder').html('Некорректно введен номер телефона');
    return false;
}

    $.ajax({
      method: "POST",
      url: "form.php",
      data: { name: nameValue, tel:telValue, email:emailValue },
      success: function (data) {
        $('button.popup__form-button').css('background-color','green');
        $('button.popup__form-button').html('Успешно!');
      },
      error: function (data){
      }
    })
  
    $("input.name").val();
    $("input.tel").val();
    $("input.email").val();
  });
});