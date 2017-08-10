$(document).ready(function() {
     // клик по дивам с классом acc-heading
    $('#accordeon .acc-heading').on('click', accord);
});

function accord(){
//скрываем все кроме того, что должны показать
  $('#accordeon .description').not($(this).next()).slideUp(1000);
// переключаем блоки под дивом, по которому кликнули
    $(this).next().slideToggle(2000);
}(jQuery);