$('.popup__form-button').click(function(e){
    e.preventDefault();

    $.ajax({
        url: 'form.php',         /* Куда пойдет запрос */
        method: 'get',             /* Метод передачи (post или get) */
        dataType: 'html',     /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            alert('Успешно!');            /* В переменной data содержится ответ от index.php. */
        }
    });
})