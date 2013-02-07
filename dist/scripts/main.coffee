$(document).on 'click', '.js-door-me', ->
  $('body')
    .toggleClass('space-is-open')
    .toggleClass('space-is-closed')
  false