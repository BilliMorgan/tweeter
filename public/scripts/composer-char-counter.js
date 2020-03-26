$(document).ready(function () {
  $('#tweet-text').on('keyup', function () {
    const inputLength = $(this).val().length;
    const maxInput = 140;
    $('.counter').text(maxInput - inputLength)
    if(maxInput-inputLength <= 0) {
      $('.counter').css("color", "red")
    }
  })

});
