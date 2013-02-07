(function() {
  var checkStatus;

  $(document).on('click', '.js-door-me', function() {
    $.ajax({
      type: 'GET',
      url: "" + ($('body').attr('data-base-url')) + "/door/open",
      dataType: 'json',
      beforeSend: function(xhr) {
        var base64, bytes;
        bytes = Crypto.charenc.Binary.stringToBytes($('#username').val() + ":" + $('#password').val());
        base64 = Crypto.util.bytesToBase64(bytes);
        return xhr.setRequestHeader("Authorization", "Basic " + base64);
      },
      success: function(data) {}
    });
    checkStatus();
    return false;
  });

  checkStatus = function() {
    $('body').addClass("checking").removeClass("space-is-open").removeClass("space-is-closed");
    return $.ajax({
      type: 'GET',
      url: "" + ($('body').attr('data-base-url')) + "/space",
      success: function(data) {
        var isClass, notClass;
        if (data.open) {
          isClass = 'open';
          notClass = 'closed';
        } else {
          isClass = 'closed';
          notClass = 'open';
        }
        return $('body').removeClass("checking").addClass("space-is-" + isClass).removeClass("space-is-" + notClass);
      }
    });
  };

  $(function() {
    return checkStatus();
  });

}).call(this);
