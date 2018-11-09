$(function() {
  $('.js-partial').each(function() {
    var $this = $(this);
    var href = '/' + $this.data('href') + '.html?' + new Date().getTime();
    $.get(href).done(function(html) {
      $this.html(html);
    });
  });
});
