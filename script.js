$('ul').on('click', 'li', function () {
   $(this).toggleClass('completed');
})

$('ul').on('click', 'span', function (e) {
   $(this).parent().fadeOut(500, function () {
      $(this).remove()
   });

   e.stopPropagation();
});

$('input[type= "text"]').keypress(function (e) {
   if (e.which === 13) {
      var inputValue = $(this).val()

      $(this).val("");
      $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + inputValue + " </li>")

   }
})

$('.fa-plus').click(function () {
   $('input').fadeToggle(500, function () {

   })
})

// use on 'listner' because it will apply for future e that we cretea
