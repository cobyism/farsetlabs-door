(function() {

  $(document).on('click', '.js-door-me', function() {
    $('body').toggleClass('space-is-open').toggleClass('space-is-closed');
    return false;
  });

}).call(this);
