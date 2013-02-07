$(document).on 'click', '.js-door-me', ->
  $.ajax
    type: 'GET'
    url: "#{$('body').attr('data-base-url')}/door/open"
    dataType: 'json'
    beforeSend: (xhr) ->
      bytes = Crypto.charenc.Binary.stringToBytes($('#username').val() + ":" + $('#password').val())
      base64 = Crypto.util.bytesToBase64(bytes)
      xhr.setRequestHeader("Authorization", "Basic " + base64)
    success: (data) ->

  checkStatus()
  false

checkStatus = ->
  $('body')
    .addClass("checking")
    .removeClass("space-is-open")
    .removeClass("space-is-closed")
  $.ajax
    type: 'GET'
    url: "#{$('body').attr('data-base-url')}/space"
    success: (data) ->
      if data.open
        isClass = 'open'
        notClass = 'closed'
      else
        isClass = 'closed'
        notClass = 'open'
      $('body')
        .removeClass("checking")
        .addClass("space-is-#{isClass}")
        .removeClass("space-is-#{notClass}")

$ ->
  checkStatus()