const popupAction = () => {

  $('.js-button-popup').on('click', function() {
    $('.js-popup').show();
  })

  $('.js-popup-close').on('click', function() {
    $('.js-popup').hide();
  })
}

export default popupAction
