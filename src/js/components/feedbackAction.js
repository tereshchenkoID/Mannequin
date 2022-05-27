const feedbackAction = () => {

  $('.js-feedback-item').click(function (){
    const $parrent = $(this)
    $parrent.addClass('focused')

    if ($(this).hasClass('error')) {
      $(this).removeClass('error')
    }

    $parrent.addClass('focused');
  })

  $('.js-textarea-input').on('keyup', function() {
    const parent = $(this).closest('.js-feedback')
    const data = $(this).val()

    if (data.length > 500) {
      $(parent).find('.js-feedback-wrapper').addClass('error')
    }
    else {
      $(parent).find('.js-feedback-wrapper').removeClass('error')
    }

    $(parent).find('.js-feedback-count').find('*')[0].innerHTML = data.length
  });


  $('.js-feedback').on('submit', function(e) {
    e.preventDefault();
    const items = $(this).find('.js-feedback-item');
    let fill = false;

    items.map(function(index, item) {

      if ($(item).find('input, textarea').val().length === 0) {
        $(this).addClass('error')
        fill = false
      }
      else {
        fill = true
      }

      return true
    })

    if (fill) {
      $.ajax({
        url: 'https://tereshchenko-id.com/website/mannequin/mail.php',
        method: 'post',
        dataType: 'json',
        data: {
          "name": $(this).find("[name='name']").children()[0].value,
          "email": $(this).find("[name='email']").children()[0].value,
          "phone": $(this).find("[name='phone']").children()[0].value,
          "company": $(this).find("[name='company']").children()[0].value,
          "message": $(this).find("[name='message']").children()[0].value,
        },
        complete(data) {
          if(data.readyState === 4) {
            $('.js-feedback').addClass('feedback--success')
          }
        }
      });
    }
  })
}

export default feedbackAction
